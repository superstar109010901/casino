import { useState } from "react";
import { X } from "lucide-react";

interface AnnouncementModalProps {
  isOpen: boolean;
}

export function SuccessForm({ isOpen }: AnnouncementModalProps) {
  const [currentSlide, setCurrentSlide] = useState(4); // 5th slide active (0-indexed)
  const totalSlides = 10;
  const [isOpenSuccess, setIsOpenSuccess] = useState(isOpen);
  const toggleSuccessForm = () => {
    setIsOpenSuccess(!isOpenSuccess);
    const successForm = document.getElementById("success-form");
    if (successForm) {
      successForm.style.display = isOpenSuccess ? "block" : "none";
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" id="success-form">
      <div className="w-[402px] h-[533px] flex flex-col items-end gap-4 p-6 rounded-[14px] bg-[rgba(17,25,35,0.54)] border border-[rgba(255,255,255,0.16)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px]">
        {/* Close Button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.16)] bg-white/4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16)] backdrop-blur-[32px] transition-opacity hover:opacity-80"
          onClick={toggleSuccessForm}
        >
          <X className="h-4 w-4 text-[#A7B5CA]" />
        </button>

        {/* Main Content Area */}
        <div className="flex flex-1 flex-col items-center justify-end gap-4 self-stretch pt-16 rounded-[12px] bg-gradient-to-b from-transparent to-[rgba(17,25,35,0.54)] relative overflow-hidden">
          {/* Background Image - 3D Character */}
          <div className="absolute inset-0 bg-[url('/images/auth/aee6e6923b28ad6cc9367ce71b7cf722f6a987d3.png')] bg-contain bg-center bg-no-repeat" />

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-start gap-2.5 self-stretch p-4 rounded-[12px] bg-[#1119238A]">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <h2 className="self-stretch text-white font-montserrat text-lg font-bold leading-normal">
                Official announcement
              </h2>
              <p className="self-stretch text-white font-montserrat text-sm font-medium leading-normal">
                Live Baccarat - The Journey of the Brave A grand debut! Real
                games, strategic duels, embark on your own journey of the brave!
                <br />
                🎲 🏆
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 self-stretch">
          {/* Carousel Indicators */}
          <div className="flex items-center justify-center gap-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#ED1D49]" : "bg-[#A7B5CA]"
                }`}
              />
            ))}
          </div>

          {/* I SEE Button */}
          <button
            onClick={toggleSuccessForm}
            className="flex h-11 items-center justify-center gap-2 self-stretch rounded-[12px] border border-[rgba(255,255,255,0.13)] bg-gradient-to-b from-[#2C9FFA] to-[#0C60FF] px-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.13),0_5px_0_-2px_rgba(34,131,246,0.50)] transition-all duration-100 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.13),0_7px_0_-2px_rgba(34,131,246,0.50)] hover:translate-y-[-2px] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.13),0_1px_0_-2px_rgba(34,131,246,0.50)] active:translate-y-[4px]"
          >
            <span className="text-[#EDEDED] font-montserrat text-sm font-bold leading-normal">
              I SEE
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
