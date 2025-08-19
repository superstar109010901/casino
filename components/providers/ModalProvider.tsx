'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import GamingProviderModal from '@/components/Modal/GameProvider';
import ChooseModal from '@/components/Modal/ChooseModal';
import GameSearchModal from '@/components/Modal/GameSearch';

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

  const openGameProviderModal = () => setIsGameProviderModalOpen(true);
  const closeGameProviderModal = () => setIsGameProviderModalOpen(false);
  
  const openChooseModal = () => setIsChooseModalOpen(true);
  const closeChooseModal = () => setIsChooseModalOpen(false);

  const openGameSearchModal = () => setIsGameSearchModalOpen(true);
  const closeGameSearchModal = () => setIsGameSearchModalOpen(false);

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
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      
      {/* Modals rendered at root level */}
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
    </ModalContext.Provider>
  );
};

