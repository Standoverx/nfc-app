'use client';

import { PricingCard } from '@/components/pricing-card';

const pricingCards = [
  {
    title: 'Carte classique',
    image: 'https://imgur.com/OmfJGRF.png',
    features: [
      'Carte simple, disponible en noir et blanc.',
      'Expédition rapide sous 2 à 3 jours ouvrables.',
    ],
    originalPrice: '299 Dhs',
    price: '199 Dhs',
    buttonText: 'Choisir',
  },
  {
    title: 'Carte classique+',
    image: 'https://imgur.com/XcBqGMR.png',
    features: [
      'Plusieurs couleurs disponibles.',
      'Possibilité d\'ajouter votre nom ou un libellé de votre choix.',
    ],
    originalPrice: '399 Dhs',
    price: '299 Dhs',
    buttonText: 'Choisir',
  },
  {
    title: 'Carte personnalisée',
    image: 'https://imgur.com/c3YcTIQ.png',
    features: [
      'Plus d\'options de personnalisation.',
      'Une carte achetée, un arbre planté.',
    ],
    originalPrice: '599 Dhs',
    price: '499 Dhs',
    buttonText: 'Personnaliser',
    buttonVariant: 'outline',
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Obtenez Votre Carte
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choisissez la carte parfaite qui correspond à vos besoins de réseautage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}