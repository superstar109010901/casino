"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

// Types
interface SwiperSliderProps {
  data: readonly any[] | any[];
  renderSlide: (item: any, index: number) => React.ReactNode;
  grid?: {};  
  slidesPerView?: number | "auto";
  allowTouchMove?: boolean;
  spaceBetween?: number;
  autoplayDelay?: number;
  loop?: boolean;
  centeredSlides?: boolean;
  direction?: "horizontal" | "vertical";
  breakpoints?: {
    [key: number]: { slidesPerView: number; spaceBetween?: number, grid?: {} };
  };
  className?: string;
  slideClassName?: string;
  showProgressBars?: boolean;
  customPagination?: boolean;
  paginationRenderBullet?: (index: number, className: string) => string;
  navigationRef?: React.MutableRefObject<SwiperType | null>;
  onSlideChange?: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
  autoplay?: boolean;
  freeMode?: boolean;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  data,
  renderSlide,
  grid = {},
  allowTouchMove = true,
  slidesPerView = 3.2,
  spaceBetween = 20,
  autoplayDelay = 3000,
  loop = true,
  centeredSlides = false,
  direction = "horizontal",
  breakpoints,
  className = "",
  slideClassName = "",
  showProgressBars = false,
  customPagination = false,
  paginationRenderBullet,
  navigationRef,
  onSlideChange,
  onSwiper,
  autoplay = true,
  freeMode = false,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressRefs = useRef<HTMLDivElement[]>([]);
  const progressInitialized = useRef(false);
  
  // Memoize the updateProgress function to prevent unnecessary re-renders
  const updateProgress = useCallback((swiper: SwiperType) => {
    if (!swiper || !swiper.pagination || !swiper.pagination.el) return;
    
    const activeIndex = swiper.realIndex ?? swiper.activeIndex;
    
    // Only update if we have progress refs and they're valid
    if (progressRefs.current.length === 0) {
      // Try to re-attach progress refs if they're missing
      const bullets = swiper.pagination.el.querySelectorAll<HTMLSpanElement>(
        ".swiper-pagination-bullet .progress-bar"
      );
      progressRefs.current = Array.from(bullets) as HTMLDivElement[];
    }
    
    progressRefs.current.forEach((bar, index) => {
      if (!bar || !bar.style) return;
      
      if (index < activeIndex) {
        bar.style.transition = "none";
        bar.style.width = "100%"; // past slides full blue
      } else if (index === activeIndex) {
        bar.style.transition = `width ${autoplayDelay}ms linear`;
        bar.style.width = "100%"; // animate current
      } else {
        bar.style.transition = "none";
        bar.style.width = "0%"; // future slides empty
      }
    });
  }, [autoplayDelay]);



  // Determine if grid has multiple rows. Loop mode is incompatible with multi-row Grid in Swiper.
  const isMultiRowGrid = Boolean((grid as any)?.rows && (grid as any).rows > 1);
  const effectiveLoop = isMultiRowGrid ? false : loop;

  // Swiper initialization
  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (navigationRef) navigationRef.current = swiper;

    // Initialize progress bars after a short delay to ensure DOM is ready
    if (showProgressBars && customPagination) {
      setTimeout(() => {
        updateProgress(swiper);
      }, 100);
    }

    if (onSwiper) onSwiper(swiper);
  };

  // Slide change
  const handleSlideChange = (swiper: SwiperType) => {
    if (showProgressBars) updateProgress(swiper);
    if (onSlideChange) onSlideChange(swiper);
  };

  // Default pagination render bullet
  const defaultPaginationRenderBullet = (index: number, className: string) => {
    return `
      <span class="${className} relative w-12 h-1.5 bg-gray-300 rounded overflow-hidden">
        <span class="progress-bar absolute left-0 top-0 h-full w-0 bg-blue-500"></span>
      </span>
    `;
  };

  // Attach progress refs after mount - only run once when component mounts
  useEffect(() => {
    if (!customPagination || !swiperRef.current || progressInitialized.current) return;

    const bullets =
      swiperRef.current.pagination.el.querySelectorAll<HTMLSpanElement>(
        ".swiper-pagination-bullet .progress-bar"
      );
    progressRefs.current = Array.from(bullets) as HTMLDivElement[];
    progressInitialized.current = true;
    updateProgress(swiperRef.current);
    
    // Cleanup function to reset progress initialization
    return () => {
      progressInitialized.current = false;
    };
  }, [customPagination]); // Remove 'data' dependency to prevent progress reset

  return (
    <Swiper
      modules={[Autoplay, Pagination, Grid]}
      direction={direction}
      grid={grid}
      allowTouchMove={allowTouchMove}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={effectiveLoop}
      centeredSlides={centeredSlides}
      autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
      breakpoints={breakpoints}
      freeMode={freeMode}
      watchSlidesProgress={true}
      watchOverflow={true}
      pagination={
        customPagination
          ? {
              clickable: true,
              renderBullet:
                paginationRenderBullet || defaultPaginationRenderBullet,
            }
          : false
      }
      onSwiper={handleSwiper}
      onSlideChange={handleSlideChange}
      className={className}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
