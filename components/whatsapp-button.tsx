'use client';

import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import Link from 'next/link';

export function WhatsappButton() {
  const whatsappNumber = '+212666040315';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-200 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon className="h-6 w-6" />
    </Link>
  );
}