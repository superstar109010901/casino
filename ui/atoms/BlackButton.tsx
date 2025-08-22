"use client";

import React from "react";

interface BlackButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  children,
  onClick,
  className = "",
  style,
}) => {
  return (
    <button
      className={
        "h-9 rounded-lg bg-[rgba(255, 255, 255, 0.04)] border-b-[1px] border-[#2a3536] border-t-[3px] border-[#FFFFFF29] flex items-center justify-center transition-colors hover:bg-[rgba(255, 255, 255, 0.08)] cursor-pointer " +
        className
      }
      onClick={onClick}
      style={style || { borderTop: "1px solid #9b9292bd" }}
    >
      {children}
    </button>
  );
};

export default BlackButton;
