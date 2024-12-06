'use client';

import { 
  Truck, 
  Shield, 
  Clock, 
  Award,
  CreditCard,
  ThumbsUp
} from 'lucide-react';

export const productFeatures = [
  {
    icon: <Truck className="h-5 w-5 text-blue-500" />,
    title: "Livraison Rapide",
    description: "Expédition sous 24-48h"
  },
  {
    icon: <Shield className="h-5 w-5 text-green-500" />,
    title: "Garantie Qualité",
    description: "Produits certifiés et testés"
  },
  {
    icon: <Clock className="h-5 w-5 text-purple-500" />,
    title: "Support 24/7",
    description: "Assistance technique disponible"
  },
  {
    icon: <Award className="h-5 w-5 text-yellow-500" />,
    title: "Satisfaction Garantie",
    description: "30 jours satisfait ou remboursé"
  },
  {
    icon: <CreditCard className="h-5 w-5 text-indigo-500" />,
    title: "Paiement Sécurisé",
    description: "Transactions 100% sécurisées"
  },
  {
    icon: <ThumbsUp className="h-5 w-5 text-pink-500" />,
    title: "Service Premium",
    description: "Configuration gratuite incluse"
  }
];

export function ProductFeatures() {
  return (
    <div className="mt-8 pt-8 border-t">
      <h4 className="text-lg font-semibold mb-6 text-center">
        Pourquoi choisir ce produit ?
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50 hover:bg-accent/50 transition-colors"
          >
            <div className="mb-3 p-3 rounded-full bg-accent">
              {feature.icon}
            </div>
            <h5 className="font-medium text-sm mb-1">{feature.title}</h5>
            <p className="text-xs text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}