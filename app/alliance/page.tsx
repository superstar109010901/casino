import React, { Suspense } from "react";

export const dynamic = 'force-dynamic';

import AllianceClient from "@/components/alliance/AllianceClient";

export default function AlliancePage() {
  return (
    <Suspense fallback={<div className="text-[#A7B5CA] p-4">Loading...</div>}>
      <AllianceClient />
    </Suspense>
  );
}
