'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export function ContactQuickActions() {
  const whatsappNumber = '+212666040315';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-accent rounded-3xl p-12">
      <Link href="/contact">
        <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4 bg-card cursor-pointer">
          <div className="rounded-full bg-[#FFF5D1] dark:bg-[#3F3000] p-4">
            <Info className="h-8 w-8 text-[#FFB800]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1 text-foreground">Au centre d&apos;assistance →</h3>
            <p className="text-muted-foreground">Au centre d&apos;assistance</p>
          </div>
        </Card>
      </Link>
      
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4 bg-card cursor-pointer">
          <div className="rounded-full bg-[#DCFCE7] dark:bg-[#003314] p-4">
            <WhatsappIcon className="h-8 w-8 text-[#25D366]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1 text-foreground">Discussion instantanée →</h3>
            <p className="text-muted-foreground">À la discussion</p>
          </div>
        </Card>
      </Link>
    </div>
  );
}