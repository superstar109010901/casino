"use client";

import React from "react";
import CasinoGames from "@/components/molecules/CasinoGames";
import { useSidebar } from "@/components/providers/SidebarProvider";

const HashHoverLayer: React.FC = () => {
	const { isHashHoverOpen, openHashHover, scheduleCloseHashHover, hashHoverTop } = useSidebar();
	if (!isHashHoverOpen) return null;
	return (
		<div
			className="fixed left-[315px] lg:left-[315px] top-0 z-[120]"
			style={{ top: hashHoverTop }}
			onMouseEnter={openHashHover}
			onMouseLeave={scheduleCloseHashHover}
		>
			<CasinoGames />
		</div>
	);
};

export default HashHoverLayer;


