'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight,
} from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { categories } from '@/lib/constants/products';
import { ProductCard } from '@/components/product-card';
import { ProductDialog } from '@/components/product-dialog';

export function TrendingProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleProductClick = (product: any, categoryId: string) => {
    setSelectedProduct(product);
    setSelectedCategory(categoryId);
  };

  const trendingProducts = categories
    .flatMap(category => category.products.slice(0, 3).map(product => ({
      ...product,
      categoryId: category.id
    })))
    .filter(product => product);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Produits Tendance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez nos produits les plus populaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => handleProductClick(product, product.categoryId)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/products">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg">
              Découvrir plus de produits
            </Button>
          </Link>
        </div>

        {selectedProduct && (
          <ProductDialog
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            categoryId={selectedCategory}
          />
        )}
      </div>
    </section>
  );
}