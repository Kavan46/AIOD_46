import React from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function LoadingSpinner() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Loader2 className={`w-8 h-8 animate-spin ${
        isDark ? 'text-white' : 'text-gray-900'
      }`} />
    </div>
  );
}