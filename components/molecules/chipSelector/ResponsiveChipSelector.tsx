import { useState, useEffect } from "react";
import { ChipSelector } from "./ChipSelector";
import { MobileChipSelector } from "./MobileChipSelector";
import MenuModal from "@/components/Modal/MenuModal";

export function ResponsiveChipSelector() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleMenuClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <MobileChipSelector onMenuClick={handleMenuClick} />
      ) : (
        <ChipSelector />
      )}
      
      {/* Menu Modal - Rendered at higher level to avoid bottom bar conflicts */}
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={handleCloseMenuModal} 
      />
    </>
  );
}
