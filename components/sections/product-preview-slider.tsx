'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const productImages = [
  'https://imgur.com/66IAVU9.png',
  'https://imgur.com/gukRKbr.png',
  'https://imgur.com/rm7Ejcs.png',
  'https://imgur.com/VKOzM2D.png',
  'https://imgur.com/X5zzZS9.png',
  'https://imgur.com/Bilu96u.png',
  'https://imgur.com/e2cduUq.png',
  'https://imgur.com/S0AuY3D.png',
  'https://imgur.com/a5Z50gM.png',
  'https://imgur.com/Rngm90z.png',
  'https://imgur.com/utWSx7t.png',
  'https://imgur.com/7nSAOFp.png',
  'https://imgur.com/dkVJWOJ.png',
  'https://imgur.com/5p7nPK1.png',
  'https://imgur.com/sJto07P.png',
  'https://imgur.com/jY3NcFr.png',
  'https://imgur.com/oP6KlzO.png',
  'https://imgur.com/FwBIT1S.png',
  'https://imgur.com/NGgg9aJ.png',
  // Duplicate the first few images to ensure smooth looping
  'https://imgur.com/66IAVU9.png',
  'https://imgur.com/Bilu96u.png',
  'https://imgur.com/rm7Ejcs.png',
];

export function ProductPreviewSlider() {
  const { theme } = useTheme();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !autoScrollEnabled) return;

    const scroll = () => {
      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [autoScrollEnabled]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
        <p className="text-muted-foreground text-lg">Découvrez nos cartes de visite digitales personnalisées</p>
      </div>
      <div className="relative">
        <div 
          className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10`}
        />
        <div 
          className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10`}
        />
        <div 
          ref={sliderRef}
          className={`flex gap-8 overflow-hidden whitespace-nowrap px-8 cursor-${isDragging ? 'grabbing' : 'grab'}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {productImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-none w-[500px] h-[300px] transform transition-all duration-500 hover:scale-105"
              style={{ userSelect: 'none' }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={image}
                  alt={`Carte de visite digitale ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 4}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  quality={90}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}