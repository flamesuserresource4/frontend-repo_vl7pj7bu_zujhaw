import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Nav from './components/Nav';
import { motion } from 'framer-motion';

const dict = {
  de: {
    hero_sub: 'Die exklusive, augenschonende Nachhilfeplattform. Chat, Buchungen, WebRTC, Reports und Gamification – alles in einer modernen Oberfläche.',
    cta: "Los geht's",
    learn_more: 'Mehr erfahren',
    features: 'Funktionen',
    pricing: 'Preise',
    testimonials: 'Stimmen',
    contact: 'Kontakt',
    your_name: 'Dein Name',
    your_message: 'Deine Nachricht',
    send: 'Senden',
    thanks: 'Vielen Dank! Wir melden uns in Kürze.',
    partners: 'Vertraut von Partnern',
    cta_title: 'Bereit für bessere Noten?',
    cta_desc: 'Erstelle deinen Account in weniger als 1 Minute und sichere dir die ersten Coins.',
  },
  fr: {
    hero_sub: "La plateforme de tutorat exclusive et douce pour les yeux. Chat, réservations, WebRTC, rapports et gamification dans une interface moderne.",
    cta: "C'est parti",
    learn_more: 'En savoir plus',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    testimonials: 'Témoignages',
    contact: 'Contact',
    your_name: 'Votre nom',
    your_message: 'Votre message',
    send: 'Envoyer',
    thanks: 'Merci ! Nous vous contacterons bientôt.',
    partners: 'De confiance par les partenaires',
    cta_title: 'Prêt pour de meilleures notes ?',
    cta_desc: 'Créez votre compte en moins d’une minute et obtenez vos premiers coins.',
  },
  en: {
    hero_sub: 'The premium, eye-friendly tutoring platform. Chat, bookings, WebRTC, reports, and gamification in a modern interface.',
    cta: "Get started",
    learn_more: 'Learn more',
    features: 'Features',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    contact: 'Contact',
    your_name: 'Your name',
    your_message: 'Your message',
    send: 'Send',
    thanks: 'Thanks! We will be in touch shortly.',
    partners: 'Trusted by partners',
    cta_title: 'Ready for better grades?',
    cta_desc: 'Create your account in under a minute and claim your first coins.',
  }
};

export default function App() {
  const [lang, setLang] = useState('de');
  const t = useMemo(() => (k) => dict[lang][k] || k, [lang]);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Set theme colors
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', '#0B0B0B');
  }, []);

  const handleStart = () => setShowAuth(true);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav t={t} lang={lang} setLang={setLang} onStart={handleStart} />
      <main>
        <Hero t={t} onCTAClick={handleStart} />
        <Features t={t} />
        <Pricing t={t} />
        <section id="benefits" className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {[{c:'#FF8C00',t:'Augenschonend'},{c:'#FFBC00',t:'Exklusiv'},{c:'#BFFF00',t:'KI-Empfehlungen'}].map((b,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                <div className="text-2xl font-bold" style={{color:b.c}}>{b.t}</div>
                <p className="mt-2 text-white/80">Individuelle Betreuung mit Fokus auf Ergebnisse.</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="partners-anchor"><div className="sr-only">anchor</div></section>
        <Testimonials t={t} />
        <Contact t={t} />
        <CTA t={t} onClick={handleStart} />
      </main>

      <footer className="py-10 text-center text-white/60 bg-black">© {new Date().getFullYear()} LeierXpert</footer>

      {showAuth && (
        <div className="fixed inset-0 z-50">
          {import('./components/Auth').then(({ default: Auth }) => {
            const container = document.getElementById('auth-root');
            return <Auth lang={lang} onClose={()=>setShowAuth(false)} />
          })}
          <div id="auth-root"></div>
        </div>
      )}
    </div>
  );
}
