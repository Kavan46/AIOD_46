import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AppInfo } from './types';
import { useTheme } from '../../context/ThemeContext';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  apps: AppInfo[];
}

export function CategoryCard({ title, icon: Icon, apps }: CategoryCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`transition-colors duration-200 ${
      isDark 
        ? 'bg-white/10 backdrop-blur-md' 
        : 'bg-white/70 backdrop-blur-md'
    } rounded-xl p-6 space-y-4`}>
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
          <Icon className={isDark ? 'w-6 h-6 text-white' : 'w-6 h-6 text-gray-900'} />
        </div>
        <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 group ${
              isDark 
                ? 'hover:bg-white/5 hover:scale-105' 
                : 'hover:bg-gray-50 hover:scale-105'
            }`}
          >
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg p-2 mb-3">
              <img
                src={app.logo}
                alt={app.name}
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-200"
                loading="lazy"
              />
            </div>
            <span className={`text-sm font-medium text-center group-hover:text-current ${
              isDark ? 'text-white/90' : 'text-gray-700'
            }`}>
              {app.name}
            </span>
            <span className={`text-xs text-center mt-1 ${
              isDark ? 'text-white/60' : 'text-gray-500'
            }`}>
              {app.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}