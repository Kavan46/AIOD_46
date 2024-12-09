import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  name: string;
  profilePhoto?: string;
  joinDate?: number;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfilePhoto: (photoUrl: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const loadUserFromStorage = (): User | null => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => loadUserFromStorage());

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (name: string, email: string, password: string) => {
    const newUser = { 
      email, 
      name,
      joinDate: Date.now()
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfilePhoto = (photoUrl: string) => {
    if (user) {
      setUser({ ...user, profilePhoto: photoUrl });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfilePhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}