import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ t, onCTAClick }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          LeierXpert
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/80"
        >
          {t('hero_sub')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button onClick={onCTAClick} className="px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition text-black"
            style={{ background: 'linear-gradient(90deg, #FF8C00, #FFBC00)' }}>
            {t('cta')}
          </button>
          <a href="#features" className="px-6 py-3 rounded-xl font-semibold border border-white/20 text-white/90 hover:bg-white/10 transition">
            {t('learn_more')}
          </a>
        </motion.div>
      </div>

      {/* animated edges */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: '#FFC0CB' }} />
        <div className="absolute -right-24 bottom-1/3 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: '#BFFF00' }} />
      </div>
    </section>
  );
}
