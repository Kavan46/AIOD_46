import React from 'react';
import { Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { TimeFilterType } from './types';

interface TimeFilterProps {
  currentFilter: TimeFilterType;
  onFilterChange: (filter: TimeFilterType) => void;
}

export function TimeFilter({ currentFilter, onFilterChange }: TimeFilterProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filters: { value: TimeFilterType; label: string }[] = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
  ];

  return (
    <div className={`flex items-center space-x-2 p-1 rounded-lg ${
      isDark ? 'bg-white/10' : 'bg-gray-100'
    }`}>
      <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`} />
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            currentFilter === filter.value
              ? isDark
                ? 'bg-white/20 text-white'
                : 'bg-white text-gray-900 shadow-sm'
              : isDark
                ? 'text-white/60 hover:bg-white/10'
                : 'text-gray-600 hover:bg-white hover:shadow-sm'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}