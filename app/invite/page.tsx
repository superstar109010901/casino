"use client"

import React, { useState } from "react";

export default function InviteFriend() {
  const [activeTab, setActiveTab] = useState("Invite Friends");
  const [expandedFAQ, setExpandedFAQ] = useState(
    "Why do I need to activate the wallet address?"
  );

  const navigationItems = [
    { name: "Invite Friends", icon: "/icons/user-plus.svg" },
    { name: "Management", icon: "/icons/group.svg" },
    { name: "Performance", icon: "/icons/chart-network.svg" },
    { name: "Report", icon: "/icons/file-report.svg" },
    { name: "Introduction", icon: "/icons/form.png" },
  ];

  const faqs = [
    {
      question: "How to activate a wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
      isExpanded: false,
    },
    {
      question: "Why do I need to activate the wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
      isExpanded: true,
    },
    {
      question: "Will not activating the wallet address affect withdrawals?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
      isExpanded: false,
    },
  ];

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(expandedFAQ === question ? "" : question);
  };

  return (
    <div className="flex w-[75%] pt-8 [@media(max-width:1500px)]:w-[100%] mx-auto">
      {/* Left Sidebar */}
      <div className="bg-[#FFFFFF0A] p-3 rounded-lg h-full [@media(max-width:660px)]:hidden">
        <div className="space-y-3 pm-3">
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

      {/* Main Content Area */}
      <div className="flex-1 p-8 [@media(max-width:660px)]:p-0">
        {/* Header Section */}
        <div className="mb-8 [@media(max-width:660px)]:hidden">
          <h1 className="text-[18px] font-bold text-white mb-6">
            Invite Friends
          </h1>
          <div className="bg-[url('/images/banner/Banner12.jpg')] bg-cover bg-center bg-no-repeat rounded-lg p-10  text-left relative overflow-hidden">
            <span className="text-white text-[18px] font-bold relative z-10">
              Invite friends
            </span>{" "}
          </div>
        </div>

        {/* Referral Section */}
        <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
          <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
            <label className="block text-white text-[14px] font-bold mb-3 ">
              Referral link
            </label>
            <div className="flex items-center gap-3">
              <p className="flex-1 bg-[#FFFFFF14] flex justify-between text-white px-4 py-3 rounded-lg border-none text-bold outline-none">
                <span className="text-[14px] font-bold">
                  https://ok777.casino/?Agent...
                </span>
                <img src="/icons/copy.svg" alt="copy" />
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
            <label className="block text-white text-sm font-medium mb-3">
              Referral code
            </label>
            <div className="flex items-center gap-3">
              <p className="flex-1 bg-[#FFFFFF14] flex justify-between text-white px-4 py-3 rounded-lg border-none outline-none">
                <span className="text-[14px] font-bold">330395</span>
                <img src="/icons/copy.svg" alt="copy" />
              </p>
            </div>
          </div>
        </div>

        {/* Share via Social Media and Statistics Section */}
        <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
          {/* Left Card: Share via Social Media */}
          <div className="bg-[#2a3546] rounded-lg p-5 border border-[rgba(255,255,255,0.08)] [@media(max-width:375px)]:p-2">
            <h3 className="text-gray-300 text-[14px] font-bold mb-4">
              Share via social media
            </h3>
            <div className="grid grid-cols-6 gap-2 [@media(max-width:660px)]:grid-cols-7">
              {/* First Row */}
              <button className=" w-10 h-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/telegram.svg"
                  alt="telegram"
                  className="w-4 h-4"
                />
              </button>
              <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/facebook.svg"
                  alt="facebook"
                  className="w-4 h-4"
                />
              </button>
              <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/x.svg"
                  alt="X"
                  className="w-4 h-4"
                />
              </button>
              <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/instagram.svg"
                  alt="instagram"
                  className="w-4 h-4"
                />
              </button>
              <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/youtube.svg"
                  alt="youtube"
                  className="w-4 h-4"
                />
              </button>
              <button className=" w-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)]">
                <img
                  src="/icons/social-icon/discord.svg"
                  alt="discord"
                  className="w-4 h-4"
                />
              </button>
              {/* Second Row - TikTok */}
              <button className=" w-10 h-10 bg-[#FFFFFF29] rounded-lg flex items-center justify-center text-white hover:bg-[#3a4556] transition-colors border border-[rgba(255,255,255,0.08)] border-t border-[#FFFFFF0A]">
                <img
                  src="/icons/social-icon/tiktok.svg"
                  alt="tiktok"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>

          {/* Right Card: Statistics */}
          <div className="bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left */}
              <div className="text-center">
                <div className="text-[14px] font-bold text-white mb-1">0</div>
                <div className="text-gray-300 text-[10px]">
                  New direct
                  <br /> subordinates
                </div>
              </div>
              {/* Top Right */}
              <div className="text-center">
                <div className="text-[14px] font-bold text-white mb-1">0</div>
                <div className="text-gray-300 text-[10px]">
                  Direct
                  <br /> subordinates
                </div>
              </div>
              {/* Bottom Left */}
              <div className="text-center">
                <div className="text-[14px] font-bold text-[#0C60FF] mb-1">
                  0
                </div>
                <div className="text-gray-300 text-[10px]">New team member</div>
              </div>
              {/* Bottom Right */}
              <div className="text-center">
                <div className="text-[14px] font-bold text-[#0C60FF] mb-1">
                  0
                </div>
                <div className="text-gray-300 text-[10px]">
                  Total team member
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Rewards Section */}
        <div className="mb-8 bg-[#FFFFFF0A] rounded-lg p-5 border border-[rgba(255,255,255,0.08)]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[14px] font-bold text-white">
              Commission Rewards
            </h3>
            <a
              href="#"
              className="text-[#2283F6] hover:underline font-bold text-[14px]"
            >
              Details
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex justify-between w-full bg-[#FFFFFF14] rounded-lg p-2 pr-4 pl-4 border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-3">
                <img src="/icons/coin-icon/USDT.svg" alt="coin w-6 h-6" />
                <span className="text-[12px] text-[#2283F6] font-bold">0</span>
              </div>
              <div className="relative">
                {/* Button Border/Shadow Layer */}
                <div className="absolute inset-0 bg-[#0a4fd8] rounded-lg transform translate-y-1"></div>
                {/* Button Face Layer */}
                <button className="relative px-6 py-3 bg-[#2283F6] text-white font-bold rounded-lg transition-all duration-200 text-[12px] transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-xl">
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">FAQs</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 ease-in-out transform ${
                  expandedFAQ === faq.question
                    ? "bg-[#3a4556]  shadow-lg"
                    : "bg-[#2a3546]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.question)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-[#3a4556] transition-all duration-200 ease-in-out"
                >
                  <span className="text-white font-bold text-sm transition-all duration-200">
                    {faq.question}
                  </span>
                  <span
                    className={`text-white text-sm transition-transform duration-300 ease-in-out ${
                      expandedFAQ === faq.question ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <img
                      src="/icons/arrow-up.svg"
                      alt="arrow-down"
                      className="w-4 h-4"
                    />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.question
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
