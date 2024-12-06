'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  alt: string;
  showDiscount?: boolean;
  originalPrice?: string;
  price?: string;
  enableDrag?: boolean;
  autoTransition?: boolean;
}

export function ImageSlider({
  images,
  alt,
  showDiscount,
  originalPrice,
  price,
  enableDrag = false,
  autoTransition = false,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoTransition && !isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoTransition, isDragging]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableDrag) return;
    setIsDragging(true);
    setStartX(e.pageX - translateX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !enableDrag) return;
    const currentX = e.pageX - startX;
    setTranslateX(currentX);
  };

  const handleMouseUp = () => {
    if (!enableDrag) return;
    setIsDragging(false);
    const threshold = 100;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrevImage({ stopPropagation: () => {} } as React.MouseEvent);
      } else {
        handleNextImage({ stopPropagation: () => {} } as React.MouseEvent);
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableDrag) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - translateX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !enableDrag) return;
    const currentX = e.touches[0].pageX - startX;
    setTranslateX(currentX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const calculateDiscount = () => {
    if (!originalPrice || !price) return 0;
    const original = parseInt(originalPrice.replace(/[^0-9]/g, ''));
    const current = parseInt(price.replace(/[^0-9]/g, ''));
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {showDiscount && originalPrice && price && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            -{calculateDiscount()}%
          </span>
        </div>
      )}
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      {enableDrag && (
        <>
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}