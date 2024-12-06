'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function DigitalCardSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Votre carte de<br />visite Digitale
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Connectez vos réseaux sociaux, site Web, magasin, vidéos,
              musique, podcast, événements et plus encore. Tout est réuni
              dans votre nouvelle carte digitale unique. Fini les cartes de
              visite papiers.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <span className="inline-flex items-center text-sm">
                ✓ iPhone
              </span>
              <span className="inline-flex items-center text-sm">
                ✓ Android
              </span>
              <span className="inline-flex items-center text-sm">
                ✓ Huawei
              </span>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <img
                src="https://imgur.com/2nxKkXF.png"
                alt="CNDP Conforme"
                className="h-12 w-auto object-contain"
              />
              <img
                src="https://imgur.com/9wbyzYK.png"
                alt="Écologique"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full rounded-3xl shadow-xl"
              style={{ pointerEvents: 'none' }}
            >
              <source src="https://imgur.com/0FWFh9x.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <Link href="/products">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg">
            Get Your Card
          </Button>
        </Link>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Rejoignez des milliers de professionnels qui ont déjà adopté Tapyni pour leur networking digital. Commandez votre carte maintenant et transformez votre façon de réseauter.
        </p>
      </div>
    </section>
  );
}