"use client";

import React, { useState } from 'react';
import { useVirtualKeyboard } from '@/hooks/useVirtualKeyboard';
import VirtualKeyboardHandler from '@/components/molecules/VirtualKeyboardHandler';

/**
 * Example component showing how to handle virtual keyboard behavior
 * with input forms on mobile devices
 */
export default function VirtualKeyboardExample() {
  const { isVirtualKeyboardOpen } = useVirtualKeyboard();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Virtual Keyboard Handling Example</h2>
      
      {/* Status indicator */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Keyboard Status</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isVirtualKeyboardOpen ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          <span className="text-[#A7B5CA]">
            Virtual keyboard is {isVirtualKeyboardOpen ? 'open' : 'closed'}
          </span>
        </div>
      </div>

      {/* Form with virtual keyboard handling */}
            <VirtualKeyboardHandler
        className="space-y-4"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A7B5CA]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-[#0D131C] border border-white/8 rounded-lg text-white placeholder-[#A7B5CA] focus:border-[#2283F6] focus:outline-none transition-colors"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A7B5CA]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-[#0D131C] border border-white/8 rounded-lg text-white placeholder-[#A7B5CA] focus:border-[#2283F6] focus:outline-none transition-colors"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A7B5CA]">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 bg-[#0D131C] border border-white/8 rounded-lg text-white placeholder-[#A7B5CA] focus:border-[#2283F6] focus:outline-none transition-colors resize-none"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="button"
          className="w-full px-4 py-2 bg-[#2283F6] text-white rounded-lg font-medium hover:bg-[#1a6fd8] transition-colors"
        >
          Submit Form
        </button>
      </VirtualKeyboardHandler>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">How it works:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>• <strong>Bottom bar hiding:</strong> When virtual keyboard opens, the bottom bar automatically hides</p>
          <p>• <strong>Viewport detection:</strong> Uses visualViewport API to detect keyboard state</p>
          <p>• <strong>Fallback support:</strong> Works on browsers without visualViewport API</p>
          <p>• <strong>Smooth transitions:</strong> Bottom bar slides out smoothly when keyboard opens</p>
          <p>• <strong>Body scroll prevention:</strong> Prevents unwanted scrolling when keyboard is active</p>
        </div>
      </div>

      {/* Form data display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Form Data:</h4>
        <pre className="text-sm text-[#A7B5CA] whitespace-pre-wrap">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
