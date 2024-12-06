'use client';

import { Card } from '@/components/ui/card';
import { Info, Phone, Mail, User } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

const contactInfo = {
  whatsapp: '+212666040315',
  emailSupport: 'support@tapyni.co',
  emailContact: 'contact@tapyni.co',
  phone: '+212666040315',
};

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <Card className="p-6 text-center bg-card hover:bg-accent/50 transition-colors">
        <div className="rounded-full bg-accent p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <User className="h-8 w-8 text-foreground" />
        </div>
        <h3 className="font-semibold mb-2 text-foreground">Espace client</h3>
        <p className="text-sm text-muted-foreground mb-2">Se connecter</p>
        <p className="text-sm text-muted-foreground">My Tapyni</p>
      </Card>

      <Card className="p-6 text-center bg-card hover:bg-accent/50 transition-colors">
        <div className="rounded-full bg-[#DCFCE7] dark:bg-[#003314] p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <WhatsappIcon className="h-8 w-8 text-[#25D366]" />
        </div>
        <h3 className="font-semibold mb-2 text-foreground">Whatsapp</h3>
        <p className="text-sm text-muted-foreground mb-2">{contactInfo.whatsapp}</p>
        <p className="text-sm text-muted-foreground">Discussion instantanée</p>
      </Card>

      <Card className="p-6 text-center bg-card hover:bg-accent/50 transition-colors">
        <div className="rounded-full bg-blue-100 dark:bg-blue-950 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="font-semibold mb-2 text-foreground">E-mail</h3>
        <p className="text-sm text-muted-foreground mb-2">{contactInfo.emailSupport}</p>
        <p className="text-sm text-muted-foreground">{contactInfo.emailContact}</p>
      </Card>

      <Card className="p-6 text-center bg-card hover:bg-accent/50 transition-colors">
        <div className="rounded-full bg-purple-100 dark:bg-purple-950 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Phone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="font-semibold mb-2 text-foreground">Téléphone</h3>
        <p className="text-sm text-muted-foreground mb-2">{contactInfo.phone}</p>
        <p className="text-sm text-muted-foreground">&nbsp;</p>
      </Card>
    </div>
  );
}