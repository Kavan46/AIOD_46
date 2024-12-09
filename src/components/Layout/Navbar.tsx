import React from 'react';
import { Settings, Home, BarChart2, GitCompare, DollarSign } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

type Tab = 'home' | 'compare' | 'analytics' | 'settings';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  searchResults?: Array<{
    name: string;
    price: string;
  }>;
}

export function Navbar({ activeTab, onTabChange, searchResults }: NavbarProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const hasSearchResults = searchResults && searchResults.length > 0;

  return (
    <nav className={`fixed bottom-0 left-0 right-0 transition-colors duration-200 ${
      isDark 
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/70 backdrop-blur-md border-gray-200'
    } border-t shadow-lg z-50`}>
      {hasSearchResults && (
        <div className={`px-4 py-2 ${
          isDark ? 'border-b border-white/10' : 'border-b border-gray-200'
        }`}>
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <div className="flex items-center space-x-2">
              <DollarSign className={`w-4 h-4 ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`} />
              <span className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                Price Range:
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {searchResults.map((result, index) => (
                <span
                  key={index}
                  className={`text-sm px-2 py-1 rounded-full ${
                    isDark 
                      ? 'bg-white/10 text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {result.name}: {result.price}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto px-4 py-2">
        <NavLink
          icon={<Home className="w-6 h-6" />}
          text="Home"
          isActive={activeTab === 'home'}
          onClick={() => onTabChange('home')}
        />
        <NavLink
          icon={<GitCompare className="w-6 h-6" />}
          text="Compare"
          isActive={activeTab === 'compare'}
          onClick={() => onTabChange('compare')}
        />
        <NavLink
          icon={<BarChart2 className="w-6 h-6" />}
          text="Analytics"
          isActive={activeTab === 'analytics'}
          onClick={() => onTabChange('analytics')}
        />
        <NavLink
          icon={<Settings className="w-6 h-6" />}
          text="Settings"
          isActive={activeTab === 'settings'}
          onClick={() => onTabChange('settings')}
        />
      </div>
    </nav>
  );
}

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

function NavLink({ icon, text, isActive = false, onClick }: NavLinkProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
        isDark
          ? isActive 
            ? 'text-white bg-white/10' 
            : 'text-white/70 hover:text-white hover:bg-white/5'
          : isActive
            ? 'text-gray-900 bg-gray-100'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="text-xs mt-1 font-medium">{text}</span>
    </button>
  );
}