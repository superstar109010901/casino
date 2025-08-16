import React, { useState } from "react";

// Types
interface MenuItemProps {
  icon: string;
  label: string;
  badge?: number;
  onClick?: () => void;
}

interface ProfileSectionProps {
  children: React.ReactNode;
  className?: string;
}

// Menu configuration
const MENU_ITEMS: MenuItemProps[] = [
  { icon: "wallet", label: "Wallet" },
  { icon: "notifications", label: "Notifications", badge: 4 },
  { icon: "trophy", label: "Game records" },
  { icon: "chart", label: "Data Statistics" },
  { icon: "settings", label: "Settings" },
  { icon: "logout", label: "Log out" },
] as const;

// Icon mapping
const ICON_MAP: Record<string, React.ReactNode> = {
  wallet: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h9zm-9-2h10V8H12v8z" />
    </svg>
  ),
  notifications: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5V7C21 8.66 19.66 10 18 10H6C4.34 10 3 8.66 3 7V5C3 4.45 3.45 4 4 4H7ZM9 3V4H15V3H9ZM5 7V8H6C7.1 8 8 7.1 8 6V5H16V6C16 7.1 16.9 8 18 8H19V7H5Z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M17 7l-1.41 1.39L22.17 13H8v2h14.17l-6.58 6.61L17 23l9-9zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
    </svg>
  ),
};

// Reusable components
const ProfileSection: React.FC<ProfileSectionProps> = ({
  children,
  className = "",
}) => <div className={`mb-6 ${className}`}>{children}</div>;

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, onClick }) => (
  <button
    className="w-full flex items-center gap-3 px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors group"
    onClick={onClick}
  >
    <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
      {ICON_MAP[icon]}
    </div>
    <span className="text-sm font-medium">{label}</span>
    {badge && (
      <div className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">{badge}</span>
      </div>
    )}
  </button>
);

const Profile: React.FC = () => {
  const [bonusCode, setBonusCode] = useState("");

  const handleBonusCodeSubmit = () => {
    if (bonusCode.trim()) {
      // Handle bonus code submission
      console.log("Bonus code submitted:", bonusCode);
      setBonusCode("");
    }
  };

  return (
    <div
      className="w-[280px] bg-[#1119238A] fixed right-4 top-14 z-50 rounded-lg p-4 border border-white/10 backdrop-blur-[16px] hidden transition-all duration-300"
      id="notification-panel"
    >
      {/* User Profile Section */}
      <ProfileSection>
        <div className="flex flex-col items-center">
          {/* Avatar with VIP Badge */}
          <div className="relative mb-3">
            <img
              src="/images/Frame.png"
              className="w-16 h-16 rounded-4"
              alt="User Avatar"
            />
            <div className="absolute -bottom-2 right-2 w-11 px-1 h-5 bg-[#1BB83D] flex items-center justify-center border-2 border-[#111923] rounded-[8px]">
              <span className="text-white text-[10px] font-bold">VIP 1</span>
            </div>
          </div>

          {/* Username with Edit Icon */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white font-semibold text-sm">
              User8527681
            </span>
            <button className="w-4 h-4 text-gray-400 hover:text-white transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </button>
          </div>

          {/* VIP Progress Bar */}
          <div className="w-full mb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white text-xs font-medium">VIP 1</span>
              <div className="flex items-center gap-1">
                <span className="text-white text-xs font-medium">VIP 1</span>
                <div className="w-4 h-4 text-orange-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-white text-xs font-medium">50%</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </ProfileSection>

      {/* Bonus Code Section */}
      <ProfileSection>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-4 h-4 text-gray-400">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
            </svg>
          </div>
          <span className="text-white font-medium text-sm">Bonus code</span>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter bonus code"
            value={bonusCode}
            onChange={(e) => setBonusCode(e.target.value)}
            className="flex-1 px-4 py-1 bg-[#FFFFFF0A] border border-gray-600 rounded-lg text-white text-sm placeholder-[#55657E] focus:outline-none focus:border-blue-500 transition-colors w-[150px] h-[40px]"
          />
          <button
            onClick={handleBonusCodeSubmit}
            className="mt-1 bg-[#2283F6] hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors ml-[-71px] w-[60px] h-[32px]"
          >
            Send
          </button>
        </div>
      </ProfileSection>

      {/* Menu Options */}
      <div className="space-y-3">
        {MENU_ITEMS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
