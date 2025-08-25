"use client";

import React, { useState } from 'react';
import { useVirtualKeyboard } from '@/hooks/useVirtualKeyboard';

/**
 * Test component to verify virtual keyboard detection
 * and bottom bar hiding functionality
 */
export default function VirtualKeyboardTest() {
  const { isVirtualKeyboardOpen, getBottomBarClass } = useVirtualKeyboard();
  const [testInput, setTestInput] = useState('');

  return (
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Virtual Keyboard Test</h2>
      
      {/* Status Display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Virtual Keyboard Status</h3>
        <div className="space-y-2 text-sm">
          <p className="text-white">
            <span className="font-semibold">Keyboard Open:</span> 
            <span className={`ml-2 px-2 py-1 rounded text-xs ${isVirtualKeyboardOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {isVirtualKeyboardOpen ? 'YES' : 'NO'}
            </span>
          </p>
          <p className="text-white">
            <span className="font-semibold">Body Class:</span> 
            <span className="ml-2 px-2 py-1 rounded text-xs bg-blue-500 text-white">
              {isVirtualKeyboardOpen ? 'keyboard-open' : 'none'}
            </span>
          </p>
        </div>
      </div>

      {/* Test Input */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Test Input Fields</h3>
        <p className="text-sm text-[#A7B5CA] mb-4">
          Focus on these input fields to trigger virtual keyboard detection.
          The bottom bar should hide when the keyboard opens.
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Text Input
            </label>
            <input
              type="text"
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              placeholder="Tap here to open keyboard"
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Email Input
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#A7B5CA] mb-2">
              Password Input
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-[#0D131C] border border-[#374151] rounded-lg text-white placeholder-[#9CA3AF] focus:border-[#2283F6] focus:outline-none focus:ring-2 focus:ring-[#2283F6]/20"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Test Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>1. Focus on any input field above</p>
          <p>2. The virtual keyboard should open</p>
          <p>3. The bottom bar should completely hide (not just move)</p>
          <p>4. Check the status display above to see the detection</p>
          <p>5. Blur the input to close the keyboard</p>
          <p>6. The bottom bar should reappear</p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Debug Info:</h4>
        <div className="space-y-1 text-sm text-[#A7B5CA]">
          <p>Virtual Keyboard Open: {isVirtualKeyboardOpen.toString()}</p>
          <p>Body Class Applied: {isVirtualKeyboardOpen ? 'keyboard-open' : 'none'}</p>
          <p>Test Input Value: {testInput}</p>
          <p>Component Re-renders: {Date.now()}</p>
        </div>
      </div>

      {/* CSS Classes Test */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">CSS Classes Test:</h4>
        <div className="space-y-2">
          <div className={`p-3 rounded ${getBottomBarClass('bg-blue-500 text-white')}`}>
            This div shows the bottom bar classes: {getBottomBarClass('base-class')}
          </div>
          <div className={`p-3 rounded ${isVirtualKeyboardOpen ? 'keyboard-open bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
            This div shows keyboard-open class: {isVirtualKeyboardOpen ? 'keyboard-open applied' : 'no keyboard-open class'}
          </div>
        </div>
      </div>
    </div>
  );
}
