import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Anna, Elternteil', text: 'LeierXpert hat die Mathe-Noten unseres Sohnes in 6 Wochen spürbar verbessert.' },
  { name: 'Marc, Tutor', text: 'Die Plattform ist fair, modern und die Boosts helfen wirklich bei der Sichtbarkeit.' },
  { name: 'Admin', text: 'Die Freigabeprozesse sind klar und sicher – genau so muss es sein.' },
];

export default function Testimonials({ t }) {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t('testimonials')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur text-white">
              <p className="text-white/90">“{item.text}”</p>
              <div className="mt-4 text-white/60 text-sm">— {item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
