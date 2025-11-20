import { useState } from 'react';

export default function Contact({ t }) {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('contact')}</h2>
        {!sent ? (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" placeholder={t('your_name')} required />
            <input className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" placeholder="Email" type="email" required />
            <textarea className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" placeholder={t('your_message')} rows={5} required />
            <button className="px-6 py-3 rounded-xl font-semibold bg-white text-black hover:opacity-90 w-fit">{t('send')}</button>
          </form>
        ) : (
          <div className="text-white/80">{t('thanks')}</div>
        )}
      </div>
    </section>
  );
}
