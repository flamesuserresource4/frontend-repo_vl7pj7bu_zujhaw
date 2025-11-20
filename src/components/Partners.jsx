export default function Partners({ t }) {
  const logos = ['A', 'B', 'C', 'D', 'E', 'F'];
  return (
    <section id="partners" className="py-14 bg-black/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-white/70 text-sm mb-6">{t('partners')}</div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-70">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50">{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
