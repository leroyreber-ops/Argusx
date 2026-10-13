import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p.endsWith('/') || p.includes('.') ? p : `${p}/`;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      let p = window.location.pathname;
      if (!p.endsWith('/') && !p.includes('.')) p = `${p}/`;
      setCurrentPath(p);

      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle initial page load with hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const navigate = (path: string) => {
    // If it's a telephone, email, or external URL, let browser handle it
    if (
      path.startsWith('tel:') ||
      path.startsWith('mailto:') ||
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {
      if (typeof window !== 'undefined') {
        window.location.href = path;
      }
      return;
    }

    // Pure hash anchor on the current page (e.g. "#contact-form")
    if (path.startsWith('#')) {
      const id = path.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (typeof window !== 'undefined') {
          window.history.pushState(null, '', path);
        }
      }
      return;
    }

    // Handle path with optional hash (e.g. "/contact/#contact-form" or "/contact#contact-form")
    const [pathPart, hashPart] = path.split('#');
    const [cleanPath, queryPart] = pathPart.split('?');

    let normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    if (!normalized.endsWith('/') && !normalized.includes('.')) {
      normalized = `${normalized}/`;
    }

    const fullUrl = `${normalized}${queryPart ? `?${queryPart}` : ''}${hashPart ? `#${hashPart}` : ''}`;

    if (window.location.pathname !== normalized || window.location.hash !== (hashPart ? `#${hashPart}` : '')) {
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(normalized);
      
      if (hashPart) {
        setTimeout(() => {
          const el = document.getElementById(hashPart);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else if (hashPart) {
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export const Link: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  id?: string;
  'aria-label'?: string;
}> = ({ to, className, children, onClick, title, id, 'aria-label': ariaLabel }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // allow cmd+click or ctrl+click to open new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    // If external or tel/mailto, don't intercept with client SPA router
    if (
      to.startsWith('tel:') ||
      to.startsWith('mailto:') ||
      to.startsWith('http://') ||
      to.startsWith('https://')
    ) {
      if (onClick) onClick();
      return;
    }

    // If pure hash anchor on current page
    if (to.startsWith('#')) {
      e.preventDefault();
      if (onClick) onClick();
      const targetId = to.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (typeof window !== 'undefined') {
          window.history.pushState(null, '', to);
        }
      }
      return;
    }

    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      title={title}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
