'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Carte de Visite<br />Intelligente<br />
              <span className="text-muted-foreground">innovante</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Votre nouvelle expérience de réseautage
            </p>
            <Link href="/products">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg">
                Obtenir Votre Carte
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://imgur.com/0mOCH1U.png"
              alt="Tapyni Smart Card"
              width={600}
              height={400}
              className="w-full h-auto transform lg:scale-110"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}