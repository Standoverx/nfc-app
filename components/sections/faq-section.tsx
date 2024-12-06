'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Comment fonctionne la carte Tapyni ?',
    answer: 'La carte Tapyni utilise la technologie NFC pour partager instantanément vos informations professionnelles. Il suffit de rapprocher la carte d\'un smartphone compatible NFC pour accéder à votre profil digital complet.',
  },
  {
    question: 'Dois-je installer une application pour utiliser Tapyni ?',
    answer: 'Non, aucune application n\'est nécessaire ! Les utilisateurs peuvent accéder à vos informations directement via leur navigateur web après avoir scanné votre carte.',
  },
  {
    question: 'Puis-je personnaliser ma carte Tapyni ?',
    answer: 'Oui, nous proposons plusieurs options de personnalisation. Vous pouvez choisir parmi différentes couleurs et designs, et même ajouter votre logo pour la version personnalisée.',
  },
  {
    question: 'Combien de temps dure la batterie ?',
    answer: 'La carte Tapyni ne nécessite pas de batterie ! Elle utilise la technologie NFC passive, ce qui signifie qu\'elle fonctionne indéfiniment sans avoir besoin d\'être rechargée.',
  },
  {
    question: 'Comment mettre à jour mes informations ?',
    answer: 'Vous pouvez facilement mettre à jour vos informations à tout moment via votre tableau de bord en ligne. Les modifications sont instantanément reflétées sur votre profil digital.',
  },
];

export function FAQSection() {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Questions fréquentes sur les services Tapyni
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}