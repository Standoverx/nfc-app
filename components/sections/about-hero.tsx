'use client';

import Image from 'next/image';

export function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-accent/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Notre Vision pour l&apos;Avenir du Networking
            </h1>
            <p className="text-lg text-muted-foreground">
              Chez Tapyni, nous réinventons la façon dont les professionnels se connectent dans l&apos;ère numérique.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://imgur.com/0mOCH1U.png"
              alt="Tapyni Vision"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}