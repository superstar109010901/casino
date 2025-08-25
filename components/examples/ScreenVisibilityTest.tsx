"use client";

import React, { useState } from 'react';
import { useVirtualKeyboard } from '@/hooks/useVirtualKeyboard';

/**
 * Test component to verify screen visibility when clicking input fields
 * on mobile devices
 */
export default function ScreenVisibilityTest() {
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
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg min-h-screen">
      <h2 className="text-xl font-bold text-white mb-4">Screen Visibility Test</h2>
      
      {/* Status Display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Virtual Keyboard Status</h3>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isVirtualKeyboardOpen ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          <span className="text-[#A7B5CA]">
            Virtual keyboard is {isVirtualKeyboardOpen ? 'open' : 'closed'}
          </span>
        </div>
      </div>

      {/* Test Content */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Test Content</h3>
        <p className="text-white text-sm">
          This content should remain visible when you click on input fields below.
          The screen should NOT disappear or become black.
        </p>
      </div>

      {/* Test Form */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Test Input Fields</h3>
        <p className="text-sm text-[#A7B5CA] mb-4">
          Click on these input fields. The screen should remain visible and functional.
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Name Input
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20"
              placeholder="Tap here to test visibility"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Email Input
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20"
              placeholder="email@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Message Input
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20 resize-none"
              placeholder="Type a message here to test"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Test Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>1. On mobile, tap on any input field above</p>
          <p>2. The screen should remain visible (no black screen)</p>
          <p>3. The virtual keyboard should open normally</p>
          <p>4. All content should remain accessible</p>
          <p>5. The bottom bar should hide when keyboard opens</p>
          <p>6. When keyboard closes, everything should return to normal</p>
          <p><strong>Expected:</strong> Screen stays visible, only bottom bar hides</p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Debug Info:</h4>
        <div className="space-y-1 text-sm text-[#A7B5CA]">
          <p>Virtual Keyboard Open: {isVirtualKeyboardOpen.toString()}</p>
          <p>Body Classes: {typeof document !== 'undefined' ? document.body.className : 'N/A'}</p>
          <p>Form Data: {JSON.stringify(formData)}</p>
          <p>Component Re-renders: {Date.now()}</p>
        </div>
      </div>

      {/* Additional Test Content */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Additional Test Content</h3>
        <p className="text-white text-sm">
          This is additional content to ensure the page has enough height and content.
          It should remain visible when interacting with the form above.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-500 rounded text-white text-center">Test Box 1</div>
          <div className="p-3 bg-green-500 rounded text-white text-center">Test Box 2</div>
          <div className="p-3 bg-purple-500 rounded text-white text-center">Test Box 3</div>
          <div className="p-3 bg-orange-500 rounded text-white text-center">Test Box 4</div>
        </div>
      </div>
    </div>
  );
}
