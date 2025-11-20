import { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

export default function Nav({ t, lang, setLang, onStart }) {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(supportsTouch);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-extrabold text-xl">LeierXpert</div>
        <div className="flex items-center gap-3">
          <select aria-label="Sprache" value={lang} onChange={(e) => setLang(e.target.value)} className="bg-white/10 text-white rounded-lg px-3 py-2 border border-white/10">
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
          <button onClick={onStart} className="px-4 py-2 rounded-lg font-semibold text-black" style={{ background: 'linear-gradient(90deg, #FF8C00, #FFBC00)' }}>
            {t('cta')}
          </button>
        </div>
      </div>
    </header>
  );
}
