"use client";

import React from "react";
import { useSidebar } from "../providers/SidebarProvider";
const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div >
      <aside
      className={`sidebar close lg:sticky fixed h-14 bg-gray-800  lg:md:block transition-all duration-300 z-40 overflow-y-auto ${
        isCollapsed ? "close" : "open"
      }`}
      style={{
        background: "#1a2332",
        borderRight: "1px solid #2d3748",
        height: "calc(100vh - 56px)",
        top: "56px",
      }}
    >
      <div className="flex flex-col h-full">
        {/* Top Section - Casino/Sport buttons */}
        <div className={`p-4 ${isCollapsed ? "px-2" : ""}`}>
          <div className={`flex gap-2 ${isCollapsed ? "flex-col" : ""}`}>
            <button
              className={`${
                isCollapsed ? "w-full mb-2" : "flex-1"
              } w-12 bg-gray-700 rounded-lg p-3 flex items-center gap-2 justify-center text-white font-medium transition-colors hover:bg-gray-500`}
              style={{ background: "#374151" }}
            >
              <img src={"/icons/spade.svg"} className="w-5 h-5" alt="spade" />
              {!isCollapsed && <span className="text-sm font-bold">Casino</span>}
            </button>
            <button
              className={`${
                isCollapsed ? "w-full" : "flex-1"
              } w-12 bg-transparent rounded-lg p-3 flex items-center gap-2 justify-center text-gray-400 font-medium transition-colors hover:bg-gray-700`}
            >
              <img
                src={"/icons/football.svg"}
                className="w-5 h-5"
                alt="football"
              />
              {!isCollapsed && <span className="text-sm font-bold">Sport</span>}
            </button>
          </div>
          <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)] mt-5"></div>
        </div>

        {/* Navigation Section */}
        <div className={`p-4 ${isCollapsed ? "px-2" : ""} space-y-1 `}>
          <div
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img src={"/icons/search.svg"} className="w-5 h-5" alt="search" />
            {!isCollapsed && <span className="text-sm font-bold">Search</span>}
          </div>
          <div
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img src={"/icons/heart.svg"} className="w-5 h-5" alt="heart" />
            {!isCollapsed && <span className="text-sm font-bold">Favorites</span>}
          </div>
          <div
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img src={"/icons/history.svg"} className="w-5 h-5" alt="history" />
            {!isCollapsed && <span className="text-sm font-bold">Recent</span>}
          </div>
          <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
        </div>

        {/* Game Categories */}
        <div className={`p-4 ${isCollapsed ? "px-2" : ""} space-y-1 flex-1`}>
          <div className="pb-[16px]">
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <div
                className={`flex items-center gap-3 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/bitcoin.svg"}
                  className="w-5 h-5"
                  alt="bitcoin"
                />
                {!isCollapsed && <span className="text-sm font-bold">Hash Games</span>}
              </div>
              {!isCollapsed && (
                <svg
                  className="w-3 h-3 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/dice.svg"} className="w-5 h-5" alt="dice" />
              {!isCollapsed && <span className="text-sm font-bold">Slots</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/casino.svg"} className="w-5 h-5" alt="casino" />
              {!isCollapsed && <span className="text-sm font-bold">Live Casino</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/Futures.svg"}
                className="w-5 h-5"
                alt="Futures"
              />
              {!isCollapsed && <span className="text-sm font-bold">Futures</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/Cryptogra.svg"}
                className="w-5 h-5"
                alt="Cryptogra"
              />
              {!isCollapsed && <span className="text-sm font-bold">Crypto Games</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/football.svg"}
                className="w-5 h-5"
                alt="football"
              />
              {!isCollapsed && <span className="text-sm font-bold">Sport</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/game.svg"} className="w-5 h-5" alt="game" />
              {!isCollapsed && <span className="text-sm font-bold">Table Games</span>}
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
          </div>
          <div className="py-[16px]">
            {/* Membership & Plan */}
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/thumbsup.svg"}
                className="w-5 h-5"
                alt="thumbsup"
              />
              {!isCollapsed && <span className="text-sm font-bold">Alliance Plan</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/king1.svg"} className="w-5 h-5" alt="king1" />
              {!isCollapsed && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">VIP Club</span>
                  <span className="text-xs text-yellow-400 font-medium">
                    VIP
                  </span>
                </div>
              )}
            </div>

            {/* Information & Support */}
            <div
              className={`flex items-center gap-3 p-3 bg-gray-700 rounded-lg cursor-pointer text-white transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/game.svg"} className="w-5 h-5" alt="game" />
              {!isCollapsed && <span className="text-sm font-bold">Game Providers</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/gift.svg"} className="w-5 h-5" alt="gift" />
              {!isCollapsed && <span className="text-sm font-bold">Promotions</span>}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/info-circle.svg"}
                className="w-5 h-5"
                alt="info-circle"
              />
              {!isCollapsed && <span className="text-sm font-bold">Help center</span>}
            </div>
            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
          </div>
          <div className="py-[16px]">
            {/* Tutorials */}
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/tutorial.svg"}
                className="w-5 h-5"
                alt="tutorial"
              />
              {!isCollapsed && (
                <span className="text-sm font-bold">Beginner&apos;s Tutorial</span>
              )}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/cart.svg"} className="w-5 h-5" alt="cart" />
              {!isCollapsed && (
                <span className="text-sm font-bold">Currency Purchase Tutorial</span>
              )}
            </div>
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img src={"/icons/vpn.svg"} className="w-5 h-5" alt="vpn" />
              {!isCollapsed && (
                <span className="text-sm font-bold">VPN recommendation</span>
              )}
            </div>
          </div>
          <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
          <div className="py-[16px]">
            {/* Service */}
            <div
              className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={"/icons/headset.svg"}
                className="w-5 h-5"
                alt="headset"
              />
              {!isCollapsed && <span className="text-sm font-bold">Online service</span>}
            </div>
          </div>
          <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
          {isCollapsed && (
            <div className="py-[16px]">
              {/* Service */}
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/archive-arrow-down.svg"}
                  className="w-5 h-5"
                  alt="Download"
                />
              </div>
              <div
                className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <img
                  src={"/icons/wallet.svg"}
                  className="w-5 h-5"
                  alt="wallet"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section - Payment Methods */}
        {!isCollapsed && (
          <div className="p-4 mt-auto">
            {/* Payment Methods */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <img src={"/icons/gpay.svg"} className="h-5" alt="gpay" />
                </div>
                <div className="flex items-center gap-1">
                  <img src={"/icons/apay.svg"} className="h-5" alt="apay" />
                </div>
                <div className="flex items-center gap-1">
                  <img src={"/icons/pay.svg"} className="h-5" alt="pay" />
                </div>
                <div className="flex items-center gap-1">
                  <img src={"/icons/visa.svg"} className="h-5" alt="visa" />
                </div>
              </div>
              <button className="w-full bg-gray-700 text-white text-sm py-2 px-3 rounded hover:bg-gray-500 transition-colors">
                By Crypto
              </button>
            </div>

            <div className=" w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
            {/* App Download */}
            <div className="flex items-center justify-between">
              <span className="text-white text-sm">Ok777 App</span>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <img
                    src={"/icons/apple.svg"}
                    className="w-4 h-4"
                    alt="apple"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={"/icons/windows.svg"}
                    className="w-4 h-4"
                    alt="windows"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src={"/icons/android.svg"}
                    className="w-4 h-4"
                    alt="android"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
    {!isCollapsed && (<div className="lg:hidden z-2 absolute w-full h-full block bg-[#00000080]" onClick={toggleSidebar}/>)}
    
    </div>
  );
};

export default Sidebar;
