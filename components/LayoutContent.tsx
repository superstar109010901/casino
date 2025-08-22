"use client";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Sidebar from "@/components/organisms/Sidebar";
import Bottombar from "@/components/organisms/Bottombar";
import AuthModal from "@/components/Modal/AuthModal";
import { useLoading } from "@/components/providers/LoadingProvider";
import { useModal } from "@/components/providers/ModalProvider";
import dynamic from "next/dynamic";

const HashHoverLayer = dynamic(() => import("@/components/overlays/HashHoverLayer"), { ssr: false });

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const { isLoading } = useLoading();
  const { isNotificationsOpen } = useModal();

  if (isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className={`flex lg:pt-[56px] pt-[115px] relative z-10 transition-all duration-300 ${
        isNotificationsOpen ? 'lg:pr-[420px]' : ''
      }`}>
        <Sidebar />
        <div className="main-content">
          {children}
          <Footer />
        </div>
        <HashHoverLayer />
      </main>
      <div className="fixed bg-[radial-gradient(circle_at_50%_322px,_#003A81_100px,_#0D131C_300px)] w-full h-full top-0 left-0 z-0"></div>
      <Bottombar />
      <AuthModal />
    </>
  );
}
