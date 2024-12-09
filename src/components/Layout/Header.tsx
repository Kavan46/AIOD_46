import React, { useState } from 'react';
import { UserCircle2, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const isDark = theme === 'dark';
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-colors duration-200 ${
      isDark 
        ? 'bg-white/10 backdrop-blur-md border-white/20' 
        : 'bg-white/70 backdrop-blur-md border-gray-200'
    } border-b shadow-lg z-50`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            All in One Delivery
          </h1>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'hover:bg-white/10 text-white' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {user && (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center space-x-2 p-2 rounded-full transition-colors ${
                    isDark 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {user.profilePhoto ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img 
                        src={user.profilePhoto} 
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                      <span className="text-white font-medium text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </button>

                {showDropdown && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden ${
                    isDark 
                      ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <div className={`p-3 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                      <p className={isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}>
                        {user.name}
                      </p>
                      <p className={isDark ? 'text-white/70 text-sm' : 'text-gray-600 text-sm'} style={{ wordBreak: 'break-all' }}>
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={logout}
                      className={`w-full flex items-center space-x-2 px-4 py-2 transition-colors ${
                        isDark 
                          ? 'text-white/70 hover:text-white hover:bg-white/10' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}