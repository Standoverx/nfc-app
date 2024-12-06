'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  image: string;
  features: string[];
  originalPrice: string;
  price: string;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
}

export function PricingCard({
  title,
  image,
  features,
  originalPrice,
  price,
  buttonText,
  buttonVariant = 'default',
}: PricingCardProps) {
  return (
    <Card className="flex flex-col p-6 bg-background border rounded-2xl hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">{title}</h3>
      <div className="relative mb-6 h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-[#8C3BFF] mt-1 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto text-center">
        <div className="mb-4">
          <span className="text-muted-foreground line-through text-sm">{originalPrice}</span>
          <p className="text-3xl font-bold text-foreground">{price}</p>
        </div>
        <Button 
          variant={buttonVariant}
          className={`w-full rounded-full ${
            buttonVariant === 'outline' 
              ? 'border-2 border-foreground hover:bg-foreground hover:text-background' 
              : 'bg-foreground text-background hover:bg-foreground/90'
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}