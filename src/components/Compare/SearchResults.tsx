import React from 'react';
import { Star, Clock, Truck, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SearchResult } from './types';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (results.length === 0) {
    return (
      <div className={`text-center py-12 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
        <p className="text-lg font-medium">No results found</p>
        <p className="text-sm mt-2">Try searching for different items like "pizza", "groceries", or "medicines"</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {results.map((result, index) => (
        <a
          key={`${result.name}-${index}`}
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            isDark ? 'bg-white/10' : 'bg-white'
          } backdrop-blur-md rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] group relative`}
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
              <img
                src={result.logo}
                alt={result.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {result.name}
                </h3>
                <ExternalLink className={`w-4 h-4 ${
                  isDark ? 'text-white/40' : 'text-gray-400'
                } group-hover:opacity-100 opacity-0 transition-opacity`} />
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className={`flex items-center space-x-1 ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{result.rating}</span>
                </div>
                <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  • {result.price}
                </span>
              </div>
              {result.deliveryTime && (
                <div className={`flex items-center space-x-1 mt-1 text-sm ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{result.deliveryTime}</span>
                </div>
              )}
              {result.minOrder && (
                <div className={`flex items-center space-x-1 mt-1 text-sm ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  <Truck className="w-4 h-4" />
                  <span>Min. order {result.minOrder}</span>
                </div>
              )}
            </div>
          </div>
          {result.matchedItems && result.matchedItems.length > 0 && (
            <div className={`mt-3 pt-3 border-t ${
              isDark ? 'border-white/10' : 'border-gray-100'
            }`}>
              <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                Available items:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {result.matchedItems.map((item, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDark 
                        ? 'bg-white/10 text-white/80' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}