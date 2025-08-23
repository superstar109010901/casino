"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Header from './Header';
import { MobileHeader } from './MobileHeader';

interface ResponsiveHeaderProps {
  onHeaderTypeChange?: (isMobile: boolean) => void;
}

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({ onHeaderTypeChange }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Check if current page should use mobile header
  const shouldUseMobileHeader = () => {
    // Don't use mobile header on homepage (/) and hashgame pages (/hashgames/*)
    if (pathname === '/' || pathname.startsWith('/hashgames')) {
      return false;
    }
    return isMobile;
  };



  // Check if back button should be shown
  const shouldShowBackButton = () => {
    // Don't show back button on pages where it doesn't make sense
    // You can add more conditions here as needed
    return true;
  };

  // Handle client-side detection
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle mobile detection
  useEffect(() => {
    if (!isClient) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isClient]);

  // Handle back navigation for mobile header
  const handleBackClick = () => {
    router.back();
  };

  // Handle support click for mobile header
  const handleSupportClick = () => {
    // You can implement support functionality here
    console.log('Support clicked');
  };

  // Get title based on current path
  const getPageTitle = () => {
    if (pathname.startsWith('/alliance')) {
      return 'Alliance';
    }
    if (pathname.startsWith('/profile')) {
      return 'Profile';
    }
    if (pathname.startsWith('/settings')) {
      return 'Settings';
    }
    if (pathname.startsWith('/support')) {
      return 'Support';
    }
    if (pathname.startsWith('/legal')) {
      return 'Legal';
    }
    if (pathname.startsWith('/terms')) {
      return 'Terms & Conditions';
    }
    if (pathname.startsWith('/privacy')) {
      return 'Privacy Policy';
    }
    if (pathname.startsWith('/about')) {
      return 'About Us';
    }
    if (pathname.startsWith('/contact')) {
      return 'Contact Us';
    }
    // Add more path-based titles as needed
    return 'Support/Legal support';
  };

  // Notify parent about header type change
  useEffect(() => {
    if (onHeaderTypeChange) {
      onHeaderTypeChange(shouldUseMobileHeader());
    }
  }, [pathname, isMobile, onHeaderTypeChange]);

  if (shouldUseMobileHeader()) {
    return (
      <MobileHeader
        title={getPageTitle()}
        onBackClick={handleBackClick}
        onSupportClick={handleSupportClick}
        showBackButton={shouldShowBackButton()}
      />
    );
  }

  return <Header />;
};

export default ResponsiveHeader;
