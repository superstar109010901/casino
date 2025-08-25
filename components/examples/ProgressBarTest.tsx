"use client";

import React, { useState } from 'react';
import SwiperSlider from '@/components/molecules/slider/SwiperSlider';
import { useSidebar } from '@/components/providers/SidebarProvider';

/**
 * Test component to verify progress bar preservation
 * when switching game categories
 */
export default function ProgressBarTest() {
  const { activeGameCategory } = useSidebar();
  const [testData] = useState([
    { id: 1, title: 'Card 1', color: 'bg-red-500' },
    { id: 2, title: 'Card 2', color: 'bg-blue-500' },
    { id: 3, title: 'Card 3', color: 'bg-green-500' },
    { id: 4, title: 'Card 4', color: 'bg-yellow-500' },
    { id: 5, title: 'Card 5', color: 'bg-purple-500' },
    { id: 6, title: 'Card 6', color: 'bg-pink-500' },
  ]);

  const renderTestCard = (item: any, index: number) => (
    <div className={`${item.color} w-full h-32 rounded-lg flex items-center justify-center text-white font-bold`}>
      {item.title}
    </div>
  );

  return (
    <div className="p-6 space-y-6 bg-[#111923] rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Progress Bar Test</h2>
      
      {/* Current Category Display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Current Game Category</h3>
        <p className="text-white font-mono">{activeGameCategory}</p>
      </div>

      {/* Test Carousel with Progress Bars */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Test Carousel with Progress Bars</h3>
        <p className="text-sm text-[#A7B5CA] mb-4">
          This carousel has progress bars that should NOT reset when you switch game categories.
          Try navigating to different game tabs and see if the progress bars maintain their state.
        </p>
        
        <SwiperSlider
          key="progress-test-carousel"
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

      {/* Instructions */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Test Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>1. Watch the progress bars animate on the current slide</p>
          <p>2. Switch to a different game category using the header tabs</p>
          <p>3. The progress bars should continue from where they left off</p>
          <p>4. Switch back to the original category</p>
          <p>5. The progress bars should still be in the correct state</p>
          <p><strong>Note:</strong> Progress bars should NOT reset to 0% when switching categories</p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Debug Info:</h4>
        <div className="space-y-1 text-sm text-[#A7B5CA]">
          <p>Active Category: {activeGameCategory}</p>
          <p>Carousel Key: progress-test-carousel (static)</p>
          <p>Progress Bars: Enabled with custom pagination</p>
          <p>Autoplay: 3 seconds per slide</p>
          <p>Component Re-renders: {Date.now()}</p>
        </div>
      </div>
    </div>
  );
}
