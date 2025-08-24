"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationContextType {
  isNavigating: boolean;
  setIsNavigating: (navigating: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Check if this is the first time loading the app
  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('app-has-loaded');
    
    if (hasLoadedBefore) {
      // App has been loaded before, skip navigation loading
      setIsNavigating(false);
      setIsInitialLoad(false);
    } else {
      // First time loading, show navigation loading
      setIsNavigating(true);
      
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setIsInitialLoad(false);
      }, 1200);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle route changes (but don't show loading for subsequent changes)
  useEffect(() => {
    if (!isInitialLoad) {
      // For subsequent page changes, we don't show loading
      // The page transition will be instant
      setIsNavigating(false);
    }
  }, [pathname, isInitialLoad]);

  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
};
