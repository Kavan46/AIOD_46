import React from 'react';
import { 
  Smartphone, 
  Download, 
  Shield, 
  HardDrive, 
  Cog, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function AndroidGuide() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const requirements = [
    {
      icon: <Smartphone />,
      title: 'Android Version',
      description: 'Android 8.0 (Oreo) or higher'
    },
    {
      icon: <HardDrive />,
      title: 'Storage Space',
      description: 'Minimum 50MB free space'
    },
    {
      icon: <Shield />,
      title: 'Permissions',
      description: 'Location, Storage, Camera (optional)'
    }
  ];

  const installSteps = [
    'Open Google Play Store on your Android device',
    'Search for "All in One Delivery"',
    'Tap "Install" button',
    'Accept the required permissions',
    'Wait for the download and installation to complete',
    'Open the app and sign in'
  ];

  return (
    <div className={`w-full max-w-md mx-auto space-y-6 px-4 pb-20 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Android Installation Guide</h2>
        <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
          Follow these steps to install the app on your Android device
        </p>
      </div>

      <div className={`${
        isDark ? 'bg-white/10' : 'bg-white'
      } backdrop-blur-md rounded-xl p-4 space-y-4`}>
        <h3 className="font-medium">System Requirements</h3>
        <div className="space-y-3">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-white/10' : 'bg-gray-100'
              }`}>
                <div className={`w-5 h-5 ${
                  isDark ? 'text-white' : 'text-gray-600'
                }`}>
                  {req.icon}
                </div>
              </div>
              <div>
                <p className="font-medium">{req.title}</p>
                <p className={`text-sm ${
                  isDark ? 'text-white/60' : 'text-gray-500'
                }`}>
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${
        isDark ? 'bg-white/10' : 'bg-white'
      } backdrop-blur-md rounded-xl p-4 space-y-4`}>
        <h3 className="font-medium">Installation Steps</h3>
        <div className="space-y-3">
          {installSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                isDark ? 'bg-white/10' : 'bg-gray-100'
              }`}>
                <span className={`text-sm font-medium ${
                  isDark ? 'text-white' : 'text-gray-600'
                }`}>
                  {index + 1}
                </span>
              </div>
              <p className="text-sm pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${
        isDark ? 'bg-white/10' : 'bg-white'
      } backdrop-blur-md rounded-xl p-4 space-y-4`}>
        <h3 className="font-medium">Additional Information</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              isDark ? 'bg-white/10' : 'bg-gray-100'
            }`}>
              <Download className={`w-5 h-5 ${
                isDark ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
            <div>
              <p className="font-medium">Free Download</p>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                The app is free to download and use
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              isDark ? 'bg-white/10' : 'bg-gray-100'
            }`}>
              <Cog className={`w-5 h-5 ${
                isDark ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
            <div>
              <p className="font-medium">Initial Setup</p>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                Sign up with your email or continue with Google account
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              isDark ? 'bg-white/10' : 'bg-gray-100'
            }`}>
              <CheckCircle2 className={`w-5 h-5 ${
                isDark ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
            <div>
              <p className="font-medium">Auto Updates</p>
              <p className={`text-sm ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}>
                The app will automatically update when new versions are available
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center space-x-2 w-full py-3 rounded-lg ${
          isDark 
            ? 'bg-white/10 hover:bg-white/15 text-white' 
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        } transition-colors`}
      >
        <span>Download from Play Store</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}