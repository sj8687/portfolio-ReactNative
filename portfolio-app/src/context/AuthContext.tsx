import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as loginRequest, LoginPayload } from '../api/authApi';
import { apiClient } from '../api/client';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  username: string | null;
  error: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const USER_KEY = 'portfolio_app_user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  useEffect(() => {
    (async () => {
      try {
        const storedUser = await AsyncStorage.getItem(USER_KEY);

        if (storedUser) {
          setUsername(storedUser);
          setIsAuthenticated(true);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);



  const login = async (payload: LoginPayload) => {
    setError(null);
    setIsLoading(true);

    try {
      const { user } = await loginRequest(payload);

      await AsyncStorage.setItem(USER_KEY, user.username);

      setUsername(user.username);
      setIsAuthenticated(true);

    } catch (err) {
      setError("Invalid username or password.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };


  
  const logout = async () => {
    try {
      // Call backend to clear HTTP-only cookie
      await apiClient.post("/auth/logout");
    } finally {
      // Clear local user data
      await AsyncStorage.removeItem(USER_KEY);

      setUsername(null);
      setIsAuthenticated(false);
    }
  };


  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      username,
      error,
      login,
      logout,
    }),
    [
      isAuthenticated,
      isLoading,
      username,
      error,
    ]
  );




  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
