"use client";

import React, { useState } from "react";
import { BlackButton, Button } from "../../ui/atoms";
import { useSidebar } from "../providers/SidebarProvider";
import Auth from "./auth/Auth";
import AuthButton from "../molecules/AuthButton";
import AuthModal from "../Modal/AuthModal";

// Reusable components to eliminate duplication
const MenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="relative lg:block hidden">
    <BlackButton onClick={onClick}>
      <img
        src="/icons/arrow-to-right-stroke.svg"
        className="px-2.5"
        alt="burger"
      />
    </BlackButton>
  </div>
);

const Logo: React.FC = () => (
  <div className="flex items-center">
    <img src="/images/logo.svg" alt="777 Gaming Logo" />
  </div>
);

const BonusesButton: React.FC = () => (
  <div className="relative sm:block hidden">
    <button
      className=" rounded-lg border border-gray-600 flex items-center gap-2 transition-colors"
      style={{
        background: "linear-gradient(90deg, #0546A7 0%, #0C9898 100%)",
        paddingLeft: "10px",
        paddingRight: "16px",
      }}
    >
      <img src="/images/awards/Chest-box.svg" className="h-8" alt="burger" />
      <span className="text-white font-medium text-xs lg:block hidden">
        Bonuses
      </span>
    </button>
    {/* Notification badge overlapping the button */}
    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded w-5 flex items-center justify-center">
      4
    </div>
  </div>
);

const SearchButton: React.FC = () => (
  <BlackButton className="sm:block hidden">
    <img src="/icons/search.svg" className="px-2.5" alt="burger" />
  </BlackButton>
);

const NotificationBadge: React.FC = () => (
  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded w-5 flex items-center justify-center">
    4
  </div>
);

const LeftSection: React.FC<{ toggleSidebar: () => void }> = ({
  toggleSidebar,
}) => (
  <div className="flex items-center gap-2">
    <MenuButton onClick={toggleSidebar} />
    <Logo />
    <BonusesButton />
    <SearchButton />
  </div>
);

const AuthSection: React.FC<{ toggleAuthModal: () => void }> = ({
  toggleAuthModal,
}) => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <BlackButton onClick={toggleAuthModal}>
        <span className="text-white px-4 font-medium text-xs">Log in</span>
      </BlackButton>
    </div>
    <Button variant="red" onClick={toggleAuthModal}>
      <span className="text-[12px]">Register</span>
    </Button>
  </div>
);

const UtilitySection: React.FC = () => (
  <div className="flex items-center gap-2">
    <BlackButton className="lg:block hidden">
      <img src="/icons/flag-icon/cn.svg" className="px-2.5 h-4" alt="burger" />
    </BlackButton>
    <BlackButton className="lg:block hidden">
      <img src="/icons/chat.svg" className="px-2.5" alt="burger" />
    </BlackButton>
  </div>
);

const WalletSection: React.FC = () => (
  <div className="flex items-center gap-2 bg-gray-700 pl-2 rounded-lg">
    <div className="flex items-center gap-2">
      <img
        src="/icons/coin-icon/USDT.svg"
        alt="notification"
        className="w-6 h-6"
      />
      <p className="text-white text-[14px] font-bold">0.15</p>
    </div>
    <Button variant="Wallet">
      <p>Wallet</p>
    </Button>
  </div>
);

const NotificationButton: React.FC = () => (
  <div className="relative">
    <BlackButton className="lg:block hidden">
      <img src="/icons/notification.svg" className="px-2.5" alt="burger" />
    </BlackButton>
    <NotificationBadge />
  </div>
);

const ProfileButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="relative">
    <BlackButton onClick={onClick}>
      <img
        src="/images/frame.png"
        className="w-[35px] h-[30px] px-0.5"
        alt="frame"
      />
    </BlackButton>
    <NotificationBadge />
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar, toggleAuthModal } = useSidebar();
  const [showModal, setShowModal] = useState(true);

  const LoginForm = () => {
    return <AuthModal />;
  };

  const toggleNotification = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
    const notificationPanel = document.getElementById("notification-panel");
    if (notificationPanel) {
      notificationPanel.style.display = isOpen ? "block" : "none";
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 h-14 flex flex-col justify-center px-4 py-2.5 mx-auto">
        <div className="flex items-center justify-between gap-2 ">
          {/* Left side */}
          <LeftSection toggleSidebar={toggleSidebar} />

          {/* Center - empty space */}
          <div className="flex-1"></div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <AuthSection toggleAuthModal={toggleAuthModal} />
            <UtilitySection />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 hidden">
          {/* Left side */}
          <LeftSection toggleSidebar={toggleSidebar} />

          {/* Center - empty space */}
          <div className="flex-1"></div>

          <WalletSection />

          {/* Right side */}
          <div className="flex items-center gap-2">
            <BlackButton>
              <img
                src="/icons/flag-icon/cn.svg"
                className="px-2.5 h-4"
                alt="burger"
              />
            </BlackButton>
            <NotificationButton />
            <BlackButton>
              <img src="/icons/chat.svg" className="px-2.5" alt="burger" />
            </BlackButton>
            <ProfileButton onClick={toggleNotification} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
