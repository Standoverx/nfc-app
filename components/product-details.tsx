'use client';

import { Badge } from '@/components/ui/badge';
import { categoryDetails, volumeDiscounts } from '@/lib/constants/products';

interface ProductDetailsProps {
  product: any;
  categoryId: string;
}

export function ProductDetails({ product, categoryId }: ProductDetailsProps) {
  const size = categoryDetails[categoryId]?.size;

  return (
    <div className="space-y-6">
      {/* Product Size */}
      {size && (
        <div className="bg-accent/50 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Dimensions du produit</h4>
          <p className="text-lg font-semibold">{size}</p>
        </div>
      )}

      {/* Volume Discounts */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-accent/50 p-4">
          <h4 className="font-medium">Remises par volume</h4>
          <p className="text-sm text-muted-foreground">Plus vous achetez, plus vous économisez</p>
        </div>
        <div className="divide-y">
          {volumeDiscounts.map((tier, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div>
                <span className="font-medium">{tier.quantity} unités</span>
                <Badge variant="secondary" className="ml-2">-{tier.discount}%</Badge>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">Économisez</span>
                <p className="font-medium">{tier.savingsDhs} Dhs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}