import React, { useState } from 'react';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const { login } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow letters and spaces
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
      setNameError('');
    } else {
      setNameError('Please use only alphabets and spaces');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameError && name.trim()) {
      login(name, email, password);
    }
  };

  return (
    <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl transition-colors duration-200 ${
      isDark 
        ? 'bg-white/10 backdrop-blur-lg border border-white/20' 
        : 'bg-white/70 backdrop-blur-lg border border-gray-200'
    }`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Welcome
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
            Name
          </label>
          <div className="relative">
            <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isDark ? 'text-white/60' : 'text-gray-400'
            }`} />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className={`w-full pl-10 pr-4 py-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                  : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              } ${nameError ? 'border-red-500' : ''}`}
              placeholder="Enter your name"
              required
            />
          </div>
          {nameError && (
            <div className={`flex items-center space-x-1 text-sm ${
              isDark ? 'text-red-400' : 'text-red-500'
            }`}>
              <AlertCircle className="w-4 h-4" />
              <span>{nameError}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
            Email
          </label>
          <div className="relative">
            <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isDark ? 'text-white/60' : 'text-gray-400'
            }`} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                  : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              }`}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-700'}`}>
            Password
          </label>
          <div className="relative">
            <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isDark ? 'text-white/60' : 'text-gray-400'
            }`} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent' 
                  : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              }`}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors duration-200 ${
            nameError ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!!nameError}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}