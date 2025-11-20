export default function CTA({ t, onClick }) {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{t('cta_title')}</h3>
        <p className="mt-3 text-white/80">{t('cta_desc')}</p>
        <button onClick={onClick} className="mt-8 px-6 py-3 rounded-xl font-semibold text-black" style={{ background: 'linear-gradient(90deg, #FF8C00, #FFBC00)' }}>
          {t('cta')}
        </button>
      </div>
    </section>
  );
}
