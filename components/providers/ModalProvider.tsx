'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import dynamic from 'next/dynamic';
import GamingProviderModal from '@/components/Modal/GameProvider';
import ChooseModal from '@/components/Modal/ChooseModal';
import GameSearchModal from '@/components/Modal/GameSearch';
import { AUTH_CHANGED_EVENT, getIsLoggedIn } from '@/lib/auth';
import { SuccessForm } from "@/components/organisms/auth/SuccessForm";

type SortOption = "view-all" | "new" | "popular" | "a-z" | "z-a";

interface ModalContextType {
  // Game Provider Modal
  isGameProviderModalOpen: boolean;
  openGameProviderModal: () => void;
  closeGameProviderModal: () => void;
  
  // Choose Modal
  isChooseModalOpen: boolean;
  selectedOption: SortOption;
  openChooseModal: () => void;
  closeChooseModal: () => void;
  setSelectedOption: (option: SortOption) => void;

  // Game Search Modal
  isGameSearchModalOpen: boolean;
  openGameSearchModal: () => void;
  closeGameSearchModal: () => void;

  // Notifications Drawer
  openNotifications: () => void;
  closeNotifications: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isGameProviderModalOpen, setIsGameProviderModalOpen] = useState(false);
  const [isChooseModalOpen, setIsChooseModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SortOption>("view-all");
  const [isGameSearchModalOpen, setIsGameSearchModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const openGameProviderModal = () => setIsGameProviderModalOpen(true);
  const closeGameProviderModal = () => setIsGameProviderModalOpen(false);
  
  const openChooseModal = () => setIsChooseModalOpen(true);
  const closeChooseModal = () => setIsChooseModalOpen(false);

  const openGameSearchModal = () => setIsGameSearchModalOpen(true);
  const closeGameSearchModal = () => setIsGameSearchModalOpen(false);

  const openNotifications = () => setIsNotificationsOpen(true);
  const closeNotifications = () => setIsNotificationsOpen(false);

  // Open Success modal when auth state changes to logged-in
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => {
      if (getIsLoggedIn()) {
        setIsSuccessOpen(true);
      }
    };
    window.addEventListener(AUTH_CHANGED_EVENT, handler);
    return () => {
      window.removeEventListener(AUTH_CHANGED_EVENT, handler);
    };
  }, []);

  const value: ModalContextType = {
    isGameProviderModalOpen,
    openGameProviderModal,
    closeGameProviderModal,
    isChooseModalOpen,
    selectedOption,
    openChooseModal,
    closeChooseModal,
    setSelectedOption,
    isGameSearchModalOpen,
    openGameSearchModal,
    closeGameSearchModal,
    openNotifications,
    closeNotifications,
  };

  const NotificationsDrawer = dynamic(() => import('@/components/overlays/NotificationsDrawer'), { ssr: false });

  return (
    <ModalContext.Provider value={value}>
      {children}
      
      {/* Modals rendered at root level */}
      <SuccessForm isOpen={isSuccessOpen} />
      <GamingProviderModal 
        isOpen={isGameProviderModalOpen} 
        onClose={closeGameProviderModal} 
      />
      <ChooseModal
        isOpen={isChooseModalOpen}
        onClose={closeChooseModal}
        selectedOption={selectedOption}
        onOptionChange={setSelectedOption}
      />
      <GameSearchModal
        isOpen={isGameSearchModalOpen}
        onClose={closeGameSearchModal}
      />
      <NotificationsDrawer open={isNotificationsOpen} onClose={closeNotifications} />
    </ModalContext.Provider>
  );
};

