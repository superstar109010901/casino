'use client';

import React from 'react';
import { useModal } from '../providers/ModalProvider';

// Example component showing how to use the modal hooks
export const ModalUsageExample: React.FC = () => {
  const {
    openGameProviderModal,
    openChooseModal,
    closeGameProviderModal,
    closeChooseModal,
    isGameProviderModalOpen,
    isChooseModalOpen,
    selectedOption,
    setSelectedOption
  } = useModal();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-white">Modal Hook Usage Examples</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-300">Game Provider Modal</h3>
        <div className="flex gap-2">
          <button
            onClick={openGameProviderModal}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open Game Provider Modal
          </button>
          <button
            onClick={closeGameProviderModal}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close Game Provider Modal
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Modal is {isGameProviderModalOpen ? 'open' : 'closed'}
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-300">Choose Modal</h3>
        <div className="flex gap-2">
          <button
            onClick={openChooseModal}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Open Choose Modal
          </button>
          <button
            onClick={closeChooseModal}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close Choose Modal
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Modal is {isChooseModalOpen ? 'open' : 'closed'}
        </p>
        <p className="text-sm text-gray-400">
          Selected option: {selectedOption}
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-300">Change Selected Option</h3>
        <div className="flex gap-2 flex-wrap">
          {['view-all', 'new', 'popular', 'a-z', 'z-a'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option as any)}
              className={`px-3 py-1 rounded text-sm ${
                selectedOption === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

