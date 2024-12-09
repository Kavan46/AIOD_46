import React, { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { LoadingSpinner } from './components/common/LoadingSpinner';

// Lazy load components
const AppContent = React.lazy(() => import('./components/AppContent'));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AnalyticsProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <AppContent />
          </Suspense>
        </AnalyticsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;