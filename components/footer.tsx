'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, systemTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState('https://imgur.com/glv5op1.png');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const currentTheme = theme === 'system' ? systemTheme : theme;
      setLogoSrc(currentTheme === 'dark' ? 'https://imgur.com/VGUeIyg.png' : 'https://imgur.com/glv5op1.png');
    }
  }, [theme, systemTheme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and About Section */}
            <div className="space-y-6">
              <Image
                src={logoSrc}
                alt="Tapyni Logo"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
              <p className="text-sm text-muted-foreground">
                Révolutionnant le réseautage avec des cartes digitales NFC durables. 
                Connectez-vous plus intelligemment, réseautez mieux.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Produits', href: '/products' },
                  { name: 'À propos', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Assistance', href: '/assistance' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>Rabat, Maroc</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+212 666 040 315</span>
                </li>
                <li className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>contact@tapyni.co</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Inscrivez-vous pour recevoir nos dernières actualités et offres spéciales.
                </p>
                <div className="space-y-2">
                  <Input 
                    placeholder="Entrez votre email" 
                    type="email"
                    className="bg-background"
                  />
                  <Button className="w-full">S&apos;abonner</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tapyni. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}