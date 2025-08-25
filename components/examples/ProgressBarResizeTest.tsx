"use client";

import React, { useState, useEffect } from 'react';
import SwiperSlider from '@/components/molecules/slider/SwiperSlider';

/**
 * Test component to verify progress bar preservation
 * during screen resize operations
 */
export default function ProgressBarResizeTest() {
  const [testData] = useState([
    { id: 1, title: 'Card 1', color: 'bg-red-500' },
    { id: 2, title: 'Card 2', color: 'bg-blue-500' },
    { id: 3, title: 'Card 3', color: 'bg-green-500' },
    { id: 4, title: 'Card 4', color: 'bg-yellow-500' },
    { id: 5, title: 'Card 5', color: 'bg-purple-500' },
    { id: 6, title: 'Card 6', color: 'bg-pink-500' },
    { id: 7, title: 'Card 7', color: 'bg-indigo-500' },
    { id: 8, title: 'Card 8', color: 'bg-teal-500' },
    { id: 9, title: 'Card 9', color: 'bg-orange-500' },
  ]);

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const [resizeCount, setResizeCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setResizeCount(prev => prev + 1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderTestCard = (item: any, index: number) => (
    <div className={`${item.color} w-full h-32 rounded-lg flex items-center justify-center text-white font-bold`}>
      {item.title}
    </div>
  );

  return (
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Progress Bar Resize Test</h2>
      
      {/* Screen Size Display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Screen Size & Resize Info</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-[#A7B5CA]">Current Width:</p>
            <p className="text-white font-mono">{screenSize.width}px</p>
          </div>
          <div>
            <p className="text-[#A7B5CA]">Current Height:</p>
            <p className="text-white font-mono">{screenSize.height}px</p>
          </div>
          <div>
            <p className="text-[#A7B5CA]">Resize Count:</p>
            <p className="text-white font-mono">{resizeCount}</p>
          </div>
          <div>
            <p className="text-[#A7B5CA]">Last Resize:</p>
            <p className="text-white font-mono">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Test Carousel with Progress Bars */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Test Carousel with Progress Bars</h3>
        <p className="text-sm text-[#A7B5CA] mb-4">
          This carousel has progress bars that should maintain their state when you resize the screen.
          Try resizing your browser window and see if the progress bars for passed slides remain filled.
        </p>
        
        <SwiperSlider
          key="resize-test-carousel"
          data={testData}
          renderSlide={renderTestCard}
          slidesPerView="auto"
          spaceBetween={12}
          slideClassName="!w-[200px]"
          showProgressBars={true}
          customPagination={true}
          autoplay={true}
          autoplayDelay={3000}
        />
      </div>

      {/* Test Instructions */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Test Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>1. Watch the progress bars animate on the current slide</p>
          <p>2. Wait for a few slides to pass (progress bars should fill up)</p>
          <p>3. Resize your browser window (drag the edge to change width)</p>
          <p>4. The progress bars for passed slides should remain filled (blue)</p>
          <p>5. Only the current slide should have an animated progress bar</p>
          <p>6. Future slides should remain empty (gray)</p>
          <p><strong>Expected:</strong> Progress bars should NOT reset when resizing</p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Debug Info:</h4>
        <div className="space-y-1 text-sm text-[#A7B5CA]">
          <p>Screen Width: {screenSize.width}px</p>
          <p>Screen Height: {screenSize.height}px</p>
          <p>Resize Events: {resizeCount}</p>
          <p>Data Length: {testData.length}</p>
          <p>Component Re-renders: {Date.now()}</p>
        </div>
      </div>

      {/* Resize Test Buttons */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Quick Resize Tests:</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              window.resizeTo(800, 600);
              setTimeout(() => window.resizeTo(1200, 800), 1000);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
          >
            Test 800x600 → 1200x800
          </button>
          <button
            onClick={() => {
              window.resizeTo(400, 600);
              setTimeout(() => window.resizeTo(1200, 800), 1000);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
          >
            Test 400x600 → 1200x800
          </button>
          <button
            onClick={() => {
              window.resizeTo(1920, 1080);
              setTimeout(() => window.resizeTo(800, 600), 1000);
            }}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors"
          >
            Test 1920x1080 → 800x600
          </button>
        </div>
        <p className="text-xs text-[#A7B5CA] mt-2">
          Note: These buttons simulate resize events. You can also manually resize your browser window.
        </p>
      </div>
    </div>
  );
}
