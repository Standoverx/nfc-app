import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CircuitBoard, Leaf, Palette, Share2 } from 'lucide-react';
import Image from 'next/image';
import { PricingCard } from '@/components/pricing-card';
import { HeroSection } from '@/components/sections/hero-section';
import { ProductPreviewSlider } from '@/components/sections/product-preview-slider';
import { DigitalCardSection } from '@/components/sections/digital-card-section';
import { QuickInfoSection } from '@/components/sections/quick-info-section';
import { AssistanceSection } from '@/components/sections/assistance-section';
import { TrendingProducts } from '@/components/sections/trending-products';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductPreviewSlider />
      <TrendingProducts />
      <DigitalCardSection />
      <section className="py-24 bg-background/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuickInfoSection />
          <AssistanceSection />
        </div>
      </section>
    </>
  );
}