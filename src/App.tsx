import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EnterprisePage } from './pages/EnterprisePage';
import { SmallBusinessPage } from './pages/SmallBusinessPage';
import { ProcurementPage } from './pages/ProcurementPage';
import { ManagedServicesPage } from './pages/ManagedServicesPage';
import { SupportServicesPage } from './pages/SupportServicesPage';
import { AssetDispositionPage } from './pages/AssetDispositionPage';
import { StaffingProjectsPage } from './pages/StaffingProjectsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

const RouteRenderer: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slash for comparison
  const normalized = currentPath.replace(/\/+$/, '') || '/';

  switch (normalized) {
    case '/':
      return <HomePage />;
    case '/about':
    case '/about-us':
    case '/vision':
      return <AboutPage />;
    case '/enterprise-it-services':
      return <EnterprisePage />;
    case '/small-business-it-services':
      return <SmallBusinessPage />;
    case '/it-procurement-deployment':
    case '/source':
    case '/services/source':
    case '/computer-mobile-services':
      return <ProcurementPage />;
    case '/managed-it-services':
    case '/msp':
    case '/services/msp':
    case '/network-data-center-services':
      return <ManagedServicesPage />;
    case '/it-support-services':
    case '/complete-care':
    case '/support-staffing':
    case '/services/support-staffing':
      return <SupportServicesPage />;
    case '/it-asset-disposition':
    case '/retire':
    case '/services/retire':
      return <AssetDispositionPage />;
    case '/it-staffing-project-services':
    case '/project-field-services':
      return <StaffingProjectsPage />;
    case '/careers':
      return <CareersPage />;
    case '/contact':
      return <ContactPage />;
    case '/sitemap':
      return <SitemapPage />;
    default:
      return <NotFoundPage />;
  }
};

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">
          <RouteRenderer />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
