'use client';

import { ContactCards } from '@/components/sections/contact-cards';
import { ContactQuickActions } from '@/components/sections/contact-quick-actions';
import { FAQSection } from '@/components/sections/faq-section';

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact / Support</h1>
            <p className="text-lg text-muted-foreground">
              Nous sommes là pour vous aider. 24/7 - 365 jours par an.
            </p>
          </div>

          <ContactCards />
          <ContactQuickActions />
          <FAQSection />
        </div>
      </section>
    </div>
  );
}