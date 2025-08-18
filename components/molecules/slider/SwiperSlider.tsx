"use client";

import React, { useRef, useEffect } from "react";
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
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressRefs = useRef<HTMLDivElement[]>([]);

  // Update bullet progress
  const updateProgress = (swiper: SwiperType) => {
    const activeIndex = swiper.realIndex ?? swiper.activeIndex;
    progressRefs.current.forEach((bar, index) => {
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
  };

  // Determine if grid has multiple rows. Loop mode is incompatible with multi-row Grid in Swiper.
  const isMultiRowGrid = Boolean((grid as any)?.rows && (grid as any).rows > 1);
  const effectiveLoop = isMultiRowGrid ? false : loop;

  // Swiper initialization
  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    if (navigationRef) navigationRef.current = swiper;

    if (showProgressBars) updateProgress(swiper);

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
      <span class="${className} relative w-8 h-1.5 bg-gray-300 rounded overflow-hidden">
        <span class="progress-bar absolute left-0 top-0 h-full w-0 bg-blue-500"></span>
      </span>
    `;
  };

  // Attach progress refs after mount
  useEffect(() => {
    if (!customPagination || !swiperRef.current) return;

    const bullets =
      swiperRef.current.pagination.el.querySelectorAll<HTMLSpanElement>(
        ".swiper-pagination-bullet .progress-bar"
      );
    progressRefs.current = Array.from(bullets) as HTMLDivElement[];
    updateProgress(swiperRef.current);
  }, [data, customPagination]);

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
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      breakpoints={breakpoints}
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
