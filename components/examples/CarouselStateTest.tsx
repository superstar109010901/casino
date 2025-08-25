"use client";

import React, { useState } from 'react';
import SwiperSlider from '@/components/molecules/slider/SwiperSlider';
import { useSidebar } from '@/components/providers/SidebarProvider';

/**
 * Test component to verify carousel state preservation
 * when switching game categories
 */
export default function CarouselStateTest() {
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
      <h2 className="text-xl font-bold text-white mb-4">Carousel State Test</h2>
      
      {/* Current Category Display */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h3 className="text-lg font-semibold text-[#A7B5CA] mb-2">Current Game Category</h3>
        <p className="text-white font-mono">{activeGameCategory}</p>
      </div>

      {/* Test Carousel */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#A7B5CA]">Test Carousel (Should Not Reset)</h3>
        <p className="text-sm text-[#A7B5CA] mb-4">
          This carousel should maintain its position when you switch game categories in the header.
          Try navigating to different game tabs and see if the carousel position is preserved.
        </p>
        
        <SwiperSlider
          key="test-carousel"
          data={testData}
          renderSlide={renderTestCard}
          slidesPerView="auto"
          spaceBetween={12}
          slideClassName="!w-[200px]"
          showProgressBars={true}
          customPagination={true}
          autoplay={false}
        />
      </div>

      {/* Instructions */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Test Instructions:</h4>
        <div className="space-y-2 text-sm text-[#A7B5CA]">
          <p>1. Navigate to the second or third slide in the carousel above</p>
          <p>2. Switch to a different game category using the header tabs</p>
          <p>3. The carousel should maintain its position (not reset to first slide)</p>
          <p>4. Switch back to the original category</p>
          <p>5. The carousel should still be in the same position</p>
        </div>
      </div>

      {/* Debug Info */}
      <div className="p-4 bg-[#0D131C] rounded-lg">
        <h4 className="text-lg font-semibold text-white mb-2">Debug Info:</h4>
        <div className="space-y-1 text-sm text-[#A7B5CA]">
          <p>Active Category: {activeGameCategory}</p>
          <p>Carousel Key: test-carousel (static)</p>
          <p>Data Length: {testData.length}</p>
          <p>Component Re-renders: {Date.now()}</p>
        </div>
      </div>
    </div>
  );
}
