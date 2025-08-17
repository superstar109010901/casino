"use client";

import React, { useEffect, useRef, useState } from "react";
import mainContentData from "../../main-content-data.json";
import { useSidebar } from "../providers/SidebarProvider";
import { Swiper as SwiperType } from "swiper";
import CasinoCard from "../molecules/cards/CasinoCard";
import RewardCard from "../molecules/cards/RewardCard";
import HashCard from "../molecules/cards/HashCard";
import FutureCard from "../molecules/cards/FutureCard";
import GameCard from "../molecules/cards/GameCard";
import { Button } from "../../ui/atoms";
import { Icon } from "@iconify/react";
import Auth from "./auth/Auth";
import { SuccessForm } from "./auth/SuccessForm";
import Profile from "../molecules/notification/Profile";
import SwiperSlider from "../molecules/slider/SwiperSlider";
import { Autoplay } from "swiper/modules";
// Extract data from JSON
const {
  card1,
  card2,
  card3,
  cryptoCards,
  card4,
  card5,
  card6,
  card7,
  card9,
  brand,
  latestBets,
  gameManufacturers,
  footerContent,
} = mainContentData;

const bannerCards = [
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[29.45px] lg:text-[40.56px]">
          REFER &
        </span>
        <span className="text-900 block text-[20.08px] lg:text-[30.42px]">
          REWARDS
        </span>
      </>
    ),
    button: "CLAIM NOW",
    image: "/images/banner/Banner12.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          COMPLETE TASKS &
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          GET DAILY REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner10.jpg",
    link: "#",
  },
  {
    title: (
      <>
        <span className="text-900 block text-[18.4px] lg:text-[25.35px]">
          CHECK-IN
        </span>
        <span className="text-900 block text-[16.56px] lg:text-[22.82px]">
          REWARDS!
        </span>
      </>
    ),
    button: "JOIN NOW",
    image: "/images/banner/Banner09.png",
    link: "#",
  },
] as const;

// Section header component
const SectionHeader: React.FC<{ icon: string; title: string; alt: string }> = ({
  icon,
  title,
  alt,
}) => (
  <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
    <img className="grayscale" src={icon} alt={alt} />
    {title}
  </h2>
);

// Latest bets table component
const LatestBetsTable: React.FC = () => (
  <>
    <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
      Latest Bets
    </h2>
    <div className="grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] gap-[6px] lg:px-8 px-[6px]">
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Game
      </div>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Player
      </div>
      <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 text-white">
        Time
      </div>
      <div className="text-left text-[12px] hidden md:lg:block font-bold py-2 truncate text-white">
        Bet Amount
      </div>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Multiplier
      </div>
      <div className="text-left text-[12px] font-bold py-2 text-white">
        Payout
      </div>
    </div>
    <div className="w-full relative h-[462px] mb-[64px]">
      <SwiperSlider
        data={latestBets}
        renderSlide={(bet, index) => (
          <div className="bg-[#1C2532] lg:px-8 gap-[6px] px-[6px] w-full grid lg:md:grid-cols-[15%_15%_20%_15%_25%_10%] grid-cols-[20%_20%_20%_40%] rounded-[16px] h-[48px] overflow-hidden mb-[6px]">
            <div className="text-white flex text-[12px] font-bold truncate items-center gap-2">
              <img src="/images/gameLogo.png" alt="game" className="w-6 h-6" />
              {bet.game}
            </div>
            <div className="text-gray-300 text-[12px] font-bold truncate flex items-center gap-2">
              <img
                src="/images/avatar(1).png"
                alt="avatar"
                className="w-6 h-6 hidden md:lg:block"
              />
              {bet.player}
            </div>
            <div className="text-gray-300 text-[12px] hidden md:lg:flex items-center font-bold truncate items-center">
              {bet.time}
            </div>
            <div className="text-gray-300 text-[12px] hidden md:lg:flex font-bold truncate items-center gap-2">
              <img
                src="/icons/coin-icon/BTC.svg"
                alt="coin"
                className="w-6 h-6"
              />
              {bet.bet}
            </div>
            <div className="text-[#2283F6] text-[12px] font-bold truncate flex items-center">
              {bet.multiplier}
            </div>
            <div className="text-green-400 text-[12px] font-bold truncate flex items-center gap-2">
              {bet.payout}
              <div className="rounded-[8px] overflow-hidden !w-6 !h-6">
                <img
                  src="/icons/coin-icon/BTC.svg"
                  alt="coin"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
        direction="vertical"
        slidesPerView={9.1}
        spaceBetween={6}
        autoplayDelay={1000}
        className="h-full"
      />
      <div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-30 from-transparent to-[#111923] pointer-events-none"></div>
    </div>
  </>
);

// Game manufacturers section component
const GameManufacturersSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          Game Manufacturers
        </h2>
        <div className="flex justify-end gap-2 mb-4">
          <div
            className="bg-gray-700 hover:bg-gray-600 px-2 py-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Icon
              icon="mdi:chevron-left"
              className="text-white text-[24px] hover:text-[#2A3546]"
            />
          </div>
          <div
            className="bg-gray-700 hover:bg-gray-600 px-2 py-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Icon
              icon="mdi:chevron-right"
              className="text-white text-[24px] hover:text-[#2A3546]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        <SwiperSlider
          data={gameManufacturers}
          renderSlide={(manufacturer, index) => (
            <GameCard {...manufacturer} gameCount={manufacturer.gamesCount} />
          )}
          slidesPerView={4.4}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            375: { slidesPerView: 1.4 },
            425: { slidesPerView: 1.8 },
            768: { slidesPerView: 3.6 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1440: { slidesPerView: 4.8 },
          }}
          navigationRef={swiperRef}
        />
      </div>
    </div>
  );
};

// MAGIC88 content component
const Magic88Content: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <div className="bg-transparent rounded-lg relative p-6 text-left mb-6">
    <div className="background-linear-to-b from-[#0D131C00] to-[#0D131C]">
      <h3 className="text-2xl font-bold text-white mb-4">
        Best crypto casino - Welcome to MAGIC88
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Discover the ultimate destination for crypto gaming, where every
        transaction is transparent, and every game is provably fair. MAGIC88
        Casino combines cutting-edge technology with a wide array of gaming
        options to provide a secure and engaging environment for all players.
      </p>
      <h4 className="text-lg font-bold text-gray-400 mb-3">
        Web3 Transaction Hash Games
      </h4>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Experience the thrill of transaction hash games, where every result
        guarantees fairness and transparency. No account is required, simply
        send a transaction to the betting address and your winnings are sent
        back to your wallet. The outcome of every bet can be verified directly
        on the blockchain.
      </p>
    </div>
    {!isExpanded && (<div className="absolute bottom-0 left-0 w-full h-[254px] bg-gradient-to-b z-30 from-[#11192300] to-[#111923] pointer-events-none" />)}
    

    {/* Expanded Content */}
    <div
      className={`overflow-hidden transition-all duration-700 ease-in-out ${
        isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="space-y-4 mb-4">
        <h5 className="text-md font-semibold text-gray-300">
          Advanced Features
        </h5>
        <p className="text-gray-400 leading-relaxed">
          Our platform offers advanced features including real-time odds
          calculation, instant payouts, and comprehensive game history. All
          transactions are recorded on the blockchain for complete transparency
          and auditability.
        </p>
        <h5 className="text-md font-semibold text-gray-300">
          Security & Fairness
        </h5>
        <p className="text-gray-400 leading-relaxed">
          Every game result is generated using cryptographically secure random
          number generation. The house edge is clearly displayed, and all
          winning conditions are publicly verifiable on the blockchain.
        </p>
        <h5 className="text-md font-semibold text-gray-300">
          Supported Cryptocurrencies
        </h5>
        <p className="text-gray-400 leading-relaxed">
          We support major cryptocurrencies including Bitcoin (BTC), Ethereum
          (ETH), USDT, and many others. All deposits and withdrawals are
          processed automatically with minimal fees and maximum security.
        </p>
      </div>
    </div>
  </div>
);

const MainContent: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => setIsExpanded(!isExpanded);

  const toggleSuccessForm = () => {
    setIsOpen(!isOpen);
    let successForm = document.getElementById("success-form");
    if (successForm) {
      successForm.style.display = isOpen ? "block" : "none";
    }
  };

  return (
    <div
      className={`lg:px-6 px-1 py-12 w-full max-w-[1920px] mx-auto overflow-x-hidden margin auto ${
        isCollapsed
          ? "lg:w-[calc(100vw-80px)] xl:w-[calc(100vw-80px)]"
          : "xl:w-[calc(100vw-315px)] lg:w-[calc(100vw-315px)] 2xl:w-[calc(100vw-315px)]"
      }`}
      style={{ margin: "auto" }}
    >
      <SuccessForm isOpen={isOpen} />
      <Profile />

      {/* Main Banner Section */}
      <div className="mb-12">
        <SwiperSlider
          data={bannerCards}
          renderSlide={(card, index) => <RewardCard {...card} />}
          slidesPerView="auto"
          spaceBetween={20}
          slideClassName="lg:!w-[486.76px] !w-[353.35px]"
          showProgressBars={true}
          customPagination={true}
        />
      </div>

      {/* New Launches Section */}
      <div className="mb-8">
        <SectionHeader icon="/icons/Home.svg" title="New Launches" alt="home" />
        <SwiperSlider
          autoplayDelay={1000000}
          data={card1}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 3 },
            375: { slidesPerView: 3.1 },
            425: { slidesPerView: 3.4 },
            768: { slidesPerView: 4.3 },
            1024: { slidesPerView: 5 },
            1440: { slidesPerView: 7 },
          }}
          showProgressBars={true}
        />
      </div>

      {/* Live Casino Section */}
      <div className="mb-8">
        <SectionHeader
          icon="/icons/Casino1.svg"
          title="Live Casino"
          alt="home"
        />
        <SwiperSlider
          data={card2}
          autoplayDelay={1000000}
          grid={{ rows: 2, fill: "row" }}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            375: { slidesPerView: 3.1, grid: { rows: 2, fill: "row" } },
            425: { slidesPerView: 3.4, grid: { rows: 2, fill: "row" } },
            768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
            1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
            1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
          }}
        />
        
      </div>

      {/* Hash Section */}
      <div className="mb-8">
        <SectionHeader icon="/icons/Hash.svg" title="Hash" alt="hash" />
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={card9}
            autoplay={false}
            renderSlide={(card, index) => <HashCard {...card} />}
            spaceBetween={10}
            slidesPerView="auto"
            showProgressBars={true}
            customPagination={true}
            slideClassName="!w-[320px]"
          />
        </div>
      </div>

      {/* Slots Section */}
      <div className="mb-8">
        <SectionHeader icon="/icons/Slots.svg" title="Slots" alt="slots" />
        <SwiperSlider
          data={card3}
          autoplayDelay={1000000}
          grid={{ rows: 2, fill: "row" }}
          renderSlide={(card, index) => <CasinoCard {...card} />}
          slidesPerView={7}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            375: { slidesPerView: 3.1, grid: { rows: 2, fill: "row" } },
            425: { slidesPerView: 3.4, grid: { rows: 2, fill: "row" } },
            768: { slidesPerView: 4.3, grid: { rows: 2, fill: "row" } },
            1024: { slidesPerView: 5, spaceBetween: 20, grid: { rows: 2, fill: "row" } },
            1440: { slidesPerView: 7, grid: { rows: 2, fill: "row" } },
          }}
        />
        
      </div>

      {/* P/F Futures Section */}
      <div className="mb-8">
        <SectionHeader
          icon="/icons/Futures1.svg"
          title="P/F Futures"
          alt="future"
        />
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={cryptoCards}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <FutureCard {...card} />}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 2.5 },
              375: { slidesPerView: 2.3 },
              425: { slidesPerView: 3.2 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 5 },
            }}
            showProgressBars={true}
            customPagination={true}
          />
        </div>
      </div>

      {/* Cryptogra Section */}
      <div className="mb-8">
        <SectionHeader
          icon="/icons/Cryptogra1.svg"
          title="Cryptogra"
          alt="cryptogra"
        />
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={card4}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 3 },
              375: { slidesPerView: 3.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 7 },
            }}
            showProgressBars={true}
            customPagination={true}
          />
        </div>
      </div>

      {/* Sport Section */}
      <div className="mb-8">
        <SectionHeader icon="/icons/Sport.svg" title="Sport" alt="Sport" />
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={card5}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 3 },
              375: { slidesPerView: 3.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 7 },
            }}
            showProgressBars={true}
            customPagination={true}
          />
        </div>
      </div>

      {/* Chess and cards Section */}
      <div className="mb-8">
        <SectionHeader
          icon="/icons/tablegame.svg"
          title="Chess and cards"
          alt="tablegame"
        />
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={card6}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 3 },
              375: { slidesPerView: 3.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 7 },
            }}
            showProgressBars={true}
            customPagination={true}
          />
        </div>
      </div>

      {/* Latest Bets Section */}
      <LatestBetsTable />

      {/* Game Manufacturers Section */}
      <GameManufacturersSection />

      {/* Latest earnings Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 relative top-1">
          Latest earnings
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <SwiperSlider
            data={card7}
            autoplayDelay={1000000}
            renderSlide={(card, index) => <CasinoCard {...card} />}
            slidesPerView={7}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 3 },
              375: { slidesPerView: 3.1 },
              425: { slidesPerView: 3.4 },
              768: { slidesPerView: 4.3 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 7 },
            }}
            showProgressBars={true}
            customPagination={true}
          />
        </div>
      </div>

      {/* MAGIC88 Style Content */}
      <Magic88Content isExpanded={isExpanded} />

      <div className="text-center">
        <button
          onClick={toggleContent}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-auto"
          style={{ color: "#A7B5CA", fontWeight: "700" }}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
