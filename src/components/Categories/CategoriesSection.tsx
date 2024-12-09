import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { categories } from '../../data/categories';

function CategoriesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 px-4">
      {categories.map((category) => (
        <div key={category.title} className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${
              isDark ? 'bg-white/10' : 'bg-gray-100'
            }`}>
              <category.icon className={`w-5 h-5 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} />
            </div>
            <h2 className={`text-lg font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {category.title}
            </h2>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex space-x-4">
                {category.apps.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-24"
                  >
                    <div className={`${
                      isDark 
                        ? 'bg-white/10 hover:bg-white/15' 
                        : 'bg-white hover:bg-gray-50'
                    } backdrop-blur-md rounded-xl p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}>
                      <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-xl p-2 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                        <img
                          src={app.logo}
                          alt={app.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className={`font-medium text-xs ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {app.name}
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesSection;