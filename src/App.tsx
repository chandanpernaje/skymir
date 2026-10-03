import React, { useState, useEffect } from 'react';
import type { RoutePath } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { DesignServicesPage } from './pages/DesignServicesPage';
import { EngineeringPage } from './pages/EngineeringPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LatestPage } from './pages/LatestPage';
import { ApplicationsPage } from './pages/ApplicationsPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    const path = window.location.pathname;
    if (
      path === '/products' ||
      path === '/technology' ||
      path === '/design-services' ||
      path === '/engineering' ||
      path === '/about' ||
      path === '/contact' ||
      path === '/latest' ||
      path === '/applications'
    ) {
      return path;
    }
    return '/';
  });

  const navigate = (path: RoutePath) => {
    if (currentPath !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (
        path === '/products' ||
        path === '/technology' ||
        path === '/design-services' ||
        path === '/engineering' ||
        path === '/about' ||
        path === '/contact' ||
        path === '/latest' ||
        path === '/applications'
      ) {
        setCurrentPath(path);
      } else {
        setCurrentPath('/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/products':
        return <ProductsPage onNavigate={navigate} />;
      case '/technology':
        return <TechnologyPage onNavigate={navigate} />;
      case '/design-services':
        return <DesignServicesPage onNavigate={navigate} />;
      case '/engineering':
        return <EngineeringPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      case '/latest':
        return <LatestPage onNavigate={navigate} />;
      case '/applications':
        return <ApplicationsPage onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand selection:text-brand-foreground">
      <Header currentPath={currentPath} onNavigate={navigate} />
      {renderContent()}
      <Footer onNavigate={navigate} />
    </div>
  );
}
