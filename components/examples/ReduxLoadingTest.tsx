'use client';

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setLoading, setInitialLoadComplete, resetLoadingState } from '@/store/slices/loadingSlice';

export default function ReduxLoadingTest() {
  const dispatch = useAppDispatch();
  const { isLoading, isInitialLoad } = useAppSelector((state) => state.loading);

  const handleStartLoading = () => {
    dispatch(setLoading(true));
  };

  const handleStopLoading = () => {
    dispatch(setLoading(false));
  };

  const handleCompleteInitialLoad = () => {
    dispatch(setInitialLoadComplete());
  };

  const handleReset = () => {
    dispatch(resetLoadingState());
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Redux Loading State Test</h2>
      
      <div className="space-y-4">
        <div className="p-3 bg-gray-100 rounded">
          <p><strong>Current State:</strong></p>
          <p>isLoading: <span className={isLoading ? 'text-red-600' : 'text-green-600'}>{isLoading.toString()}</span></p>
          <p>isInitialLoad: <span className={isInitialLoad ? 'text-red-600' : 'text-green-600'}>{isInitialLoad.toString()}</span></p>
        </div>

        <div className="space-y-2">
          <button
            onClick={handleStartLoading}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Start Loading
          </button>
          
          <button
            onClick={handleStopLoading}
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Stop Loading
          </button>
          
          <button
            onClick={handleCompleteInitialLoad}
            className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Complete Initial Load
          </button>
          
          <button
            onClick={handleReset}
            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset State
          </button>
        </div>

        <div className="p-3 bg-yellow-100 rounded text-sm">
          <p><strong>How it works:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>On page refresh (F5): State resets, loading shows</li>
            <li>On page navigation: State persists, no loading</li>
            <li>Initial load: Shows loading for 1.5 seconds</li>
            <li>Subsequent loads: Instant transitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
