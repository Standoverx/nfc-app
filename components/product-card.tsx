'use client';

import { Card } from '@/components/ui/card';
import { ImageSlider } from '@/components/ui/image-slider';

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card
      className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
      onClick={onClick}
    >
      <ImageSlider 
        images={product.images} 
        alt={product.name}
        showDiscount
        originalPrice={product.originalPrice}
        price={product.price}
        enableDrag={false}
        autoTransition={true}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice}
            </span>
          )}
          <p className="text-2xl font-bold text-foreground">
            {product.price}
          </p>
        </div>
      </div>
    </Card>
  );
}