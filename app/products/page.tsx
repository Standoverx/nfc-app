'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/constants/products';
import { ProductCard } from '@/components/product-card';
import { ProductDialog } from '@/components/product-dialog';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('cartes-nfc');

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Nos Produits</h1>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.find(c => c.id === activeCategory)?.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        {selectedProduct && (
          <ProductDialog
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            categoryId={activeCategory}
          />
        )}
      </div>
    </div>
  );
}