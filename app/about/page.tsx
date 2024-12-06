'use client';

import { AboutHero } from '@/components/sections/about-hero';
import { AboutValues } from '@/components/sections/about-values';
import { AboutMission } from '@/components/sections/about-mission';

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Fondée avec la vision de moderniser le networking professionnel, Tapyni est née de la conviction que les échanges professionnels peuvent être à la fois efficaces et écologiques. Notre équipe d&apos;experts en technologie et en développement durable travaille sans relâche pour créer des solutions innovantes qui répondent aux besoins des professionnels d&apos;aujourd&apos;hui.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nous sommes fiers de notre engagement envers l&apos;innovation et la durabilité. Chaque produit Tapyni est conçu avec soin, alliant technologie de pointe et respect de l&apos;environnement. Notre solution permet non seulement de simplifier les échanges professionnels, mais aussi de réduire significativement l&apos;utilisation de papier.
              </p>
              <p className="text-lg text-muted-foreground">
                Aujourd&apos;hui, Tapyni est devenu un acteur majeur dans la transformation digitale du networking professionnel au Maroc, avec une vision d&apos;expansion internationale. Notre communauté grandissante de professionnels témoigne de l&apos;efficacité et de la pertinence de nos solutions dans le monde professionnel moderne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}