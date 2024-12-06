'use client';

import { Card } from '@/components/ui/card';
import { Leaf, Shield, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "Engagement Écologique",
    description: "Notre solution digitale réduit considérablement l'utilisation de papier, contribuant à la préservation de l'environnement."
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Sécurité des Données",
    description: "Protection maximale des informations personnelles avec des protocoles de sécurité avancés et conformité RGPD."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-purple-600" />,
    title: "Innovation Continue",
    description: "Développement constant de nouvelles fonctionnalités pour améliorer l'expérience utilisateur."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    title: "Communauté Engagée",
    description: "Une communauté grandissante de professionnels qui transforment leur façon de networker."
  }
];

export function AboutValues() {
  return (
    <div className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Nos Valeurs Fondamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-card hover:bg-accent/50 transition-colors">
              <div className="rounded-full bg-accent p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{value.title}</h3>
              <p className="text-muted-foreground text-center">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}