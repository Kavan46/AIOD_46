import React, { useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SearchBarProps } from './types';
import { debounce } from '../../utils/debounce';

export function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 300),
    [onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
          isDark ? 'text-white/60' : 'text-gray-400'
        }`} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder || "Search for food, groceries, medicines, travel, movies..."}
          className={`w-full pl-12 pr-10 py-3 rounded-lg transition-colors ${
            isDark 
              ? 'bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
              : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full ${
              isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
          >
            <X className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-400'}`} />
          </button>
        )}
      </div>
    </form>
  );
}