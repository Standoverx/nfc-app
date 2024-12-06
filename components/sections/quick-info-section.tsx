'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function QuickInfoSection() {
  return (
    <div className="-mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://imgur.com/OtrzVPi.png"
            alt="Quick Info Emoji"
            width={150}
            height={150}
            className="mx-auto mb-4"
            priority
          />
          <h2 className="text-4xl font-bold mb-4 text-center lg:text-left text-foreground">
            Un Tap, Infos Vite et sans<br />
            application nécessaire !
          </h2>
          <p className="text-xl text-muted-foreground text-center lg:text-left mb-8">
            Les gens n&apos;ont pas besoin d&apos;installer les applications pour recevoir vos informations.
          </p>
          <div className="text-center lg:text-left">
            <Link href="/products">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg">
                Get Your Card
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full rounded-2xl shadow-xl"
            style={{ pointerEvents: 'none' }}
          >
            <source src="https://imgur.com/cQf6cbz.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}