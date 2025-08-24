"use client";

import { useLoading } from "@/components/providers/LoadingProvider";

/**
 * Development utility component to reset loading state
 * Only shows in development mode
 */
export default function LoadingReset() {
  const { resetLoadingState } = useLoading();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-[9999]">
      <button
        onClick={resetLoadingState}
        className="px-3 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
        title="Reset loading state (dev only)"
      >
        Reset Loading
      </button>
    </div>
  );
}
