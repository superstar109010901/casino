"use client";

// this is the game card

import React from "react";
import { Copy, Info, ArrowLeftRight } from "lucide-react";
import { Button } from "../../../ui/atoms";
export interface TypeTwoProps {
  title: string;
  chances: string;
  bettingAddress: string;
  leftButtonText: string;
  rightButtonText: string;
}

const HashCard: React.FC<TypeTwoProps> = ({
  title,
  chances,
  bettingAddress,
  leftButtonText,
  rightButtonText,
}) => {
  const handleCopy = () => navigator.clipboard.writeText(bettingAddress);

  return (
    <div
      style={{
        background:
          "url('/images/games/6850b36f2bd45516f6329cf19663fc91b6440882.png') center/cover",
      }}
      className="relative rounded-[14px] w-[320px] h-[173px] p-[8px_10px_12px_10px] text-white overflow-hidden border border-gray-700/50 shadow-xl"
    >
      <div className="absolute w-full h-[173px] bg-gray-800 opacity-[80%] top-0 left-0" />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <h1 className="text-[14px] font-bold">{title}</h1>
            <button className="w-5 h-5 rounded-full bg-gray-600/50 flex items-center justify-center">
              <Info className="w-3 h-3 text-gray-300" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-[14px]">Chances:</span>
            <span className="text-red-400 text-[14px] font-semibold">
              {chances}
            </span>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-[12px] font-medium">
              Betting Address
            </span>
            <span className="text-gray-400 text-[12px]">
              Use a Decentralized Wallet
            </span>
          </div>
          <div className="relative">
            <div className="bg-gray-800/60 rounded-lg w-[300px] h-[36px] border border-gray-600/50">
              <span className="text-gray-300 ml-[8px] text-[10px] font-mono">
                {bettingAddress}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-gray-700/50 flex items-center justify-center"
            >
              <Copy className="w-3 h-3 text-gray-300" />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="green">
            <ArrowLeftRight className="w-3 h-3" />
            <span className="text-[12px]">{leftButtonText}</span>
          </Button>
          <Button variant="blue">
            <span className="text-[12px]">{rightButtonText}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HashCard;
