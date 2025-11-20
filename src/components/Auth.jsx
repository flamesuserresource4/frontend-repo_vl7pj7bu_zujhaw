import { useState } from 'react';

const strings = {
  de: {
    title: 'Registrieren / Anmelden',
    name: 'Name',
    email: 'E-Mail',
    password: 'Passwort',
    role: 'Rolle',
    parent: 'Eltern',
    tutorA: 'Tutor A',
    tutorB: 'Tutor B',
    tutorC: 'Tutor C',
    admin: 'Admin',
    register: 'Registrieren',
    login: 'Anmelden',
    optional_ai: 'KI-Check (optional) – Dokumente werden automatisch geprüft.'
  },
  fr: {
    title: 'Inscription / Connexion', name: 'Nom', email: 'E-mail', password: 'Mot de passe', role: 'Rôle', parent: 'Parent', tutorA: 'Tuteur A', tutorB: 'Tuteur B', tutorC: 'Tuteur C', admin: 'Admin', register: "S'inscrire", login: 'Se connecter', optional_ai: 'Vérification IA (optionnelle) – documents contrôlés automatiquement.'
  },
  en: {
    title: 'Sign up / Log in', name: 'Name', email: 'Email', password: 'Password', role: 'Role', parent: 'Parent', tutorA: 'Tutor A', tutorB: 'Tutor B', tutorC: 'Tutor C', admin: 'Admin', register: 'Register', login: 'Login', optional_ai: 'AI check (optional) – documents are automatically verified.'
  }
};

export default function Auth({ lang, onClose }) {
  const t = (k) => strings[lang][k] || k;
  const [mode, setMode] = useState('register');
  const [form, setForm] = useState({ role: 'parent' });
  const [message, setMessage] = useState('');

  const api = import.meta.env.VITE_BACKEND_URL || '';

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'register') {
        const res = await fetch(`${api}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Fehler');
        setMessage('Registrierung erfolgreich. Bitte ggf. Freigabe abwarten.');
      } else {
        const res = await fetch(`${api}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || 'Fehler');
        localStorage.setItem('token', data.token);
        setMessage('Erfolgreich eingeloggt.');
      }
    } catch (e) {
      setMessage(e.message);
    }
  };

  const tutorFields = () => {
    if (!form.role?.startsWith('tutor')) return null;
    const cat = form.role.slice(-1).toUpperCase();
    return (
      <div className="grid gap-2 text-sm text-white/80">
        <div className="text-white/60">{t('optional_ai')}</div>
        {cat === 'A' && (
          <>
            <input placeholder="Profilfoto URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, photo: e.target.value }})} />
            <input placeholder="Ausweis URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, id: e.target.value }})} />
            <input placeholder="Zeugnis URL (optional)" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, certificate: e.target.value }})} />
          </>
        )}
        {cat === 'B' && (
          <>
            <input placeholder="Profilfoto URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, photo: e.target.value }})} />
            <input placeholder="Ausweis URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, id: e.target.value }})} />
            <input placeholder="Schulabschluss URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, graduation: e.target.value }})} />
            <input placeholder="Motivationsschreiben URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, motivation: e.target.value }})} />
            <input placeholder="Zertifikate (optional)" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, certificates: e.target.value }})} />
          </>
        )}
        {cat === 'C' && (
          <>
            <input placeholder="Profilfoto URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, photo: e.target.value }})} />
            <input placeholder="Ausweis URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, id: e.target.value }})} />
            <input placeholder="Hochschulabschluss URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, degree: e.target.value }})} />
            <input placeholder="Berufsnachweis URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, employment: e.target.value }})} />
            <input placeholder="Führungszeugnis URL" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, police: e.target.value }})} />
            <input placeholder="Zertifikate/Lebenslauf (optional)" className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, documents: { ...form.documents, extras: e.target.value }})} />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-black p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold">{t('title')}</div>
          <button onClick={onClose} className="text-white/60">✕</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode('register')} className={`px-3 py-2 rounded-lg ${mode==='register'?'bg-white text-black':'bg-white/10 text-white'}`}>{t('register')}</button>
          <button onClick={()=>setMode('login')} className={`px-3 py-2 rounded-lg ${mode==='login'?'bg-white text-black':'bg-white/10 text-white'}`}>{t('login')}</button>
        </div>
        <form onSubmit={submit} className="grid gap-3">
          <input placeholder={t('name')} className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, name: e.target.value })} required={mode==='register'} />
          <input type="email" placeholder={t('email')} className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, email: e.target.value })} required />
          <input type="password" placeholder={t('password')} className="bg-white/10 border border-white/10 rounded-xl p-3 text-white placeholder-white/50" onChange={(e)=>setForm({ ...form, password: e.target.value })} required />
          {mode==='register' && (
            <>
              <label className="text-sm text-white/70">{t('role')}</label>
              <select className="bg-white/10 border border-white/10 rounded-xl p-3 text-white" onChange={(e)=>setForm({ ...form, role: e.target.value })} defaultValue="parent">
                <option value="parent">{t('parent')}</option>
                <option value="tutorA">{t('tutorA')}</option>
                <option value="tutorB">{t('tutorB')}</option>
                <option value="tutorC">{t('tutorC')}</option>
                <option value="admin">{t('admin')}</option>
              </select>
              {tutorFields()}
            </>
          )}
          <button className="mt-2 px-4 py-3 rounded-xl font-semibold text-black" style={{ background: 'linear-gradient(90deg, #FF8C00, #FFBC00)' }}>
            {mode==='register'? t('register'): t('login')}
          </button>
          {!!message && <div className="text-sm text-white/70">{message}</div>}
        </form>
      </div>
    </div>
  );
}
