import React, { useState, useCallback, Suspense } from 'react';
import { Header } from './Layout/Header';
import { Navbar } from './Layout/Navbar';
import { LoginForm } from './Auth/LoginForm';
import { LoadingSpinner } from './common/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const CategoriesSection = React.lazy(() => import('./Categories/CategoriesSection').then(module => ({ default: module.default })));
const CompareSection = React.lazy(() => import('./Compare/CompareSection').then(module => ({ default: module.default })));
const AnalyticsSection = React.lazy(() => import('./Analytics/AnalyticsSection').then(module => ({ default: module.default })));
const SettingsSection = React.lazy(() => import('./Settings/SettingsSection').then(module => ({ default: module.default })));

type Tab = 'home' | 'compare' | 'analytics' | 'settings';

function AppContent() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [searchResults, setSearchResults] = useState<Array<{ name: string; price: string }>>([]);
  const isDark = theme === 'dark';

  const handleSearchResults = useCallback((results: Array<{ name: string; price: string }>) => {
    setSearchResults(results);
  }, []);

  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <LoginForm />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Header />
      <main className="pt-24 pb-24">
        <Suspense fallback={<LoadingSpinner />}>
          {activeTab === 'home' && <CategoriesSection />}
          {activeTab === 'compare' && <CompareSection onSearchResults={handleSearchResults} />}
          {activeTab === 'analytics' && <AnalyticsSection />}
          {activeTab === 'settings' && <SettingsSection />}
        </Suspense>
      </main>
      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        searchResults={searchResults}
      />
    </div>
  );
}

export default AppContent;