import React, { useRef, useState } from 'react';
import { User, Mail, Calendar, LogOut, Camera, Trash2, ChevronRight, Smartphone } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { formatDate } from '../../utils/dateUtils';
import { AndroidGuide } from './AndroidGuide';

function SettingsSection() {
  const { user, logout, updateProfilePhoto } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');
  const [showAndroidGuide, setShowAndroidGuide] = useState(false);

  if (!user) return null;

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }

      setError('');
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateProfilePhoto(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    updateProfilePhoto('');
  };

  const joinDate = new Date(user.joinDate || Date.now());

  if (showAndroidGuide) {
    return (
      <div>
        <button
          onClick={() => setShowAndroidGuide(false)}
          className={`mb-6 flex items-center space-x-2 px-4 py-2 rounded-lg ${
            isDark 
              ? 'text-white hover:bg-white/10' 
              : 'text-gray-900 hover:bg-gray-100'
          }`}
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to Settings</span>
        </button>
        <AndroidGuide />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 px-4 pb-20">
      <h1 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Account Settings
      </h1>

      {/* Profile Section */}
      <div className={`${
        isDark ? 'bg-white/10' : 'bg-white'
      } backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-200`}>
        {/* Previous profile photo section remains the same */}
        <div className="p-6 flex flex-col items-center relative">
          <div className="relative group mb-2">
            <div 
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ${
                isDark ? 'bg-white/10' : 'bg-gray-100'
              } flex items-center justify-center cursor-pointer transition-transform hover:scale-105`}
              onClick={handlePhotoClick}
            >
              {user.profilePhoto ? (
                <img 
                  src={user.profilePhoto} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${
                  isDark ? 'bg-white/5' : 'bg-gray-50'
                }`}>
                  <User className={`w-10 h-10 ${
                    isDark ? 'text-white/60' : 'text-gray-400'
                  }`} />
                </div>
              )}
            </div>
            <button
              onClick={handlePhotoClick}
              className={`absolute bottom-0 right-0 p-2 rounded-full shadow-lg ${
                isDark 
                  ? 'bg-white/20 hover:bg-white/30 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {user.profilePhoto && (
            <button
              onClick={removePhoto}
              className={`mt-2 flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs ${
                isDark 
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300' 
                  : 'bg-red-50 hover:bg-red-100 text-red-600'
              }`}
            >
              <Trash2 className="w-3 h-3" />
              <span>Remove Photo</span>
            </button>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            accept="image/*"
            className="hidden"
          />
          
          {error && (
            <p className={`mt-2 text-xs ${
              isDark ? 'text-red-400' : 'text-red-500'
            }`}>
              {error}
            </p>
          )}
        </div>

        {/* Account Details Section */}
        <div className={`${isDark ? 'border-t border-white/10' : 'border-t border-gray-100'}`}>
          <div className={`p-4 flex items-center space-x-3 ${
            isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
          } transition-colors`}>
            <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <User className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <div className="flex-1">
              <label className={`text-xs font-medium ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                Name
              </label>
              <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {user.name}
              </p>
            </div>
            <ChevronRight className={`w-5 h-5 ${
              isDark ? 'text-white/40' : 'text-gray-400'
            }`} />
          </div>

          <div className={`p-4 flex items-center space-x-3 ${
            isDark ? 'hover:bg-white/5 border-t border-white/10' : 'hover:bg-gray-50 border-t border-gray-100'
          } transition-colors`}>
            <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <Mail className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <label className={`text-xs font-medium ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                Email
              </label>
              <p className={`text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {user.email}
              </p>
            </div>
            <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
              isDark ? 'text-white/40' : 'text-gray-400'
            }`} />
          </div>

          <div className={`p-4 flex items-center space-x-3 ${
            isDark ? 'hover:bg-white/5 border-t border-white/10' : 'hover:bg-gray-50 border-t border-gray-100'
          } transition-colors`}>
            <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <Calendar className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <div className="flex-1">
              <label className={`text-xs font-medium ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                Member Since
              </label>
              <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {formatDate(joinDate)}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAndroidGuide(true)}
            className={`w-full p-4 flex items-center space-x-3 ${
              isDark ? 'hover:bg-white/5 border-t border-white/10' : 'hover:bg-gray-50 border-t border-gray-100'
            } transition-colors`}
          >
            <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <Smartphone className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-600'}`} />
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Install Android App
              </p>
              <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                Get the native Android experience
              </p>
            </div>
            <ChevronRight className={`w-5 h-5 ${
              isDark ? 'text-white/40' : 'text-gray-400'
            }`} />
          </button>
        </div>

        {/* Sign Out Button */}
        <div className={`p-4 ${
          isDark ? 'border-t border-white/10' : 'border-t border-gray-100'
        }`}>
          <button
            onClick={logout}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg ${
              isDark 
                ? 'bg-white/10 hover:bg-white/15 text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            } transition-colors`}
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsSection;