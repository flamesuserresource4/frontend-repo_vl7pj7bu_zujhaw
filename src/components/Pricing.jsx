import { motion } from 'framer-motion';

const tiers = [
  { name: 'Starter', price: '0€', perks: ['Registrierung', 'Tutor-Suche', 'Chat (limitiert)'], color: '#FFBC00' },
  { name: 'Flex', price: '19€', perks: ['Buchungen', 'Reports', 'Shop & Coins'], color: '#FF8C00' },
  { name: 'Pro', price: '39€', perks: ['WebRTC-Calls', 'Boosts', 'Erweiterte Filter'], color: '#008000' },
];

export default function Pricing({ t }) {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t('pricing')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur">
              <div className="text-2xl font-bold" style={{ color: tier.color }}>{tier.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-white">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-white/80">
                {tier.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
              <button className="mt-6 w-full py-3 rounded-xl font-semibold bg-white text-black hover:opacity-90">{t('cta')}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
