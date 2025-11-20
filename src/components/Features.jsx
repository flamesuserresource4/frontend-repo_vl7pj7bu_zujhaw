import { motion } from 'framer-motion';
import { Star, ShieldCheck, MessageSquare, Video } from 'lucide-react';

const features = [
  { icon: Star, title: 'Premium Nachhilfe', desc: 'Exklusive Tutor:innen mit geprüften Unterlagen und Admin-Freigabe.' },
  { icon: ShieldCheck, title: 'Sicher & DSGVO', desc: 'Rollen, Freigaben, Notfall-Management und Moderation.' },
  { icon: MessageSquare, title: 'Chat & Reports', desc: 'Sofort-Chat, Session-Reports, Upload/Download.' },
  { icon: Video, title: 'WebRTC-Calls', desc: 'Direkt im Browser mit Touch-Fallback auf Mobile.' },
];

export default function Features({ t }) {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t('features')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur">
              <f.icon className="w-8 h-8 text-white" />
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
