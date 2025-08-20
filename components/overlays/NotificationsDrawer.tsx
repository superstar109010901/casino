"use client";

import React, { useEffect } from 'react';
import NotificationsPanel from "@/components/molecules/notification/Panel";

interface Props {
  open: boolean;
  onClose: () => void;
}

const NotificationsDrawer: React.FC<Props> = ({ open, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;
  return (
    <div className="fixed  inset-0 z-[110]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute top-0 right-0 h-full w-full max-w-[420px] translate-x-0 bg-[#111923] rounded-[30px] transition-transform duration-200">
        <NotificationsPanel />
      </div>
    </div>
  );
};

export default NotificationsDrawer;


