"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
  resetLoadingState: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Check if this is the first time loading the app
  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('app-has-loaded');
    
    if (hasLoadedBefore) {
      // App has been loaded before, skip loading screen
      setIsLoading(false);
      setIsInitialLoad(false);
    } else {
      // First time loading, show loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
        // Mark that app has been loaded
        localStorage.setItem('app-has-loaded', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent loading from showing again after initial load
  useEffect(() => {
    if (!isInitialLoad) {
      setIsLoading(false);
    }
  }, [isInitialLoad]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  const resetLoadingState = () => {
    localStorage.removeItem('app-has-loaded');
    setIsLoading(true);
    setIsInitialLoad(true);
  };

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setIsLoading, 
      startLoading, 
      stopLoading,
      resetLoadingState
    }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
