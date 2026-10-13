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
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    let normalized = path.startsWith('/') ? path : `/${path}`;
    if (!normalized.endsWith('/') && !normalized.includes('.')) {
      normalized = `${normalized}/`;
    }
    
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'instant' });
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
