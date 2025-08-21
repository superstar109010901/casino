'use client';

import React, { useState } from "react";
import InviteFriends from "@/components/alliance/InviteFriends";
import Management from "@/components/alliance/Management";
import Performance from "@/components/alliance/Performance";
import Report from "@/components/alliance/Report";
import Introduction from "@/components/alliance/Introduction";

export default function AlliancePage() {
  const [activeTab, setActiveTab] = useState("Invite Friends");

  const navigationItems = [
    { name: "Invite Friends", icon: "/icons/user-plus.svg" },
    { name: "Management", icon: "/icons/group.svg" },
    { name: "Performance", icon: "/icons/chart-network.svg" },
    { name: "Report", icon: "/icons/file-report.svg" },
    { name: "Introduction", icon: "/icons/form.png" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Invite Friends":
        return <InviteFriends />;
      case "Management":
        return <Management />;
      case "Performance":
        return <Performance />;
      case "Report":
        return <Report />;
      case "Introduction":
        return <Introduction />;
      default:
        return <InviteFriends />;
    }
  };

  return (
    <div className="flex w-[70%] [@media(max-width:1500px)]:w-[100%] gap-16 py-8 mx-auto justify-between">
      {/* Left Sidebar Navigation */}
      <div className="bg-[#FFFFFF0A] p-3 rounded-lg h-full [@media(max-width:660px)]:hidden w-[28%]">
        <div className="space-y-3">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 pr-20 rounded-lg transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-[#FFFFFF14] text-white shadow-lg"
                  : "text-gray-300 hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              <img src={item.icon} alt={item.name} />
              <span className="font-bold text-[14px]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-white/4 rounded-[12px]">
        {renderContent()}
      </div>
    </div>
  );
}
