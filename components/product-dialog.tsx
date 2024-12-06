'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { ProductFeatures } from '@/components/product-features';
import { ProductDetails } from '@/components/product-details';
import { ImageSlider } from '@/components/ui/image-slider';
import { useState } from 'react';

interface ProductDialogProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  categoryId: string;
}

export function ProductDialog({ product, isOpen, onClose, categoryId }: ProductDialogProps) {
  const [customValue, setCustomValue] = useState('');

  const handleSaveAndBuy = () => {
    const whatsappLink = `https://wa.me/212666040315?text=${encodeURIComponent(
      `Je souhaite commander ${product.name}.\n` +
      (product.type === 'custom' ? 'Je vais vous envoyer mon design.' : `${product.customLabel} : ${customValue}`)
    )}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-[85vw] lg:max-w-[1200px] max-h-[90vh] overflow-y-auto p-0 md:p-6">
        <DialogHeader className="p-6 md:p-0">
          <DialogTitle className="text-2xl font-bold mb-4">
            {product.name}
          </DialogTitle>
          <DialogDescription>
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 p-6 md:p-0">
          <ImageSlider 
            images={product.images} 
            alt={product.name}
            showDiscount
            originalPrice={product.originalPrice}
            price={product.price}
            enableDrag={true}
            autoTransition={false}
          />

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Personnalisation du produit
              </h4>
              {product.type !== 'custom' && (
                <Input
                  placeholder="Votre message ici"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  className="mb-4"
                />
              )}
              <p className="text-sm text-muted-foreground mb-6">
                {product.customLabel}
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>Prix</span>
                <div className="text-right">
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through mr-2">
                      {product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-bold text-foreground">
                    {product.price}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleSaveAndBuy}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg"
              >
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Commander via WhatsApp
              </Button>
            </div>

            <ProductDetails product={product} categoryId={categoryId} />

            <div className="mt-8 pt-8 border-t">
              <ProductFeatures />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}