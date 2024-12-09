import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface StatisticsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: 'purple' | 'green' | 'blue';
}

const colorMap = {
  purple: {
    light: { bg: 'bg-purple-100', text: 'text-purple-600' },
    dark: { bg: 'bg-white/10', text: 'text-white' }
  },
  green: {
    light: { bg: 'bg-green-100', text: 'text-green-600' },
    dark: { bg: 'bg-white/10', text: 'text-white' }
  },
  blue: {
    light: { bg: 'bg-blue-100', text: 'text-blue-600' },
    dark: { bg: 'bg-white/10', text: 'text-white' }
  }
};

export function StatisticsCard({ icon, label, value, color }: StatisticsCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorStyle = colorMap[color][isDark ? 'dark' : 'light'];

  return (
    <div className={`${
      isDark ? 'bg-white/10' : 'bg-white'
    } backdrop-blur-md rounded-xl p-4 transition-all duration-200 hover:scale-[1.02]`}>
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${colorStyle.bg}`}>
          <div className={`w-5 h-5 ${colorStyle.text}`}>{icon}</div>
        </div>
        <div>
          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
            {label}
          </p>
          <p className={`text-xl font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}