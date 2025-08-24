import React, { Suspense } from "react";

export const dynamic = 'force-dynamic';

import AllianceClient from "@/components/alliance/AllianceClient";
import LoadingSpinner from "@/components/molecules/LoadingSpinner";

export default function AlliancePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-[#0D131C]">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <p className="text-white text-lg">Loading Alliance...</p>
        </div>
      </div>
    }>
      <AllianceClient />
    </Suspense>
  );
}
