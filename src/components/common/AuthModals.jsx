import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL
  : (window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL);

const countryCodes = [
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+52', flag: '🇲🇽', name: 'México' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: '+51', flag: '🇵🇪', name: 'Perú' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+507', flag: '🇵🇦', name: 'Panamá' },
];

export default function AuthModals({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode); // 'login', 'register', 'success', 'forgot'
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    phoneCode: '+57'
  });

  if (!isOpen) return null;

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/auth/request-password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, source: 'web' })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al enviar el correo');

      setSuccessMsg('Si el correo está registrado, recibirás un enlace de recuperación pronto.');
      setMode('success');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register';
      const fullUrl = `${API_URL}${endpoint}`;
      const res = await fetch(fullUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'web' })
      });

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await res.json();
      } else {
        throw new Error('Error en el servidor. Por favor intenta más tarde.');
      }

      if (!res.ok) throw new Error(data.error || 'Ocurrió un error');

      if (mode === 'login') {
        login(data.user, data.token);
        onClose();
      } else {
        setMode('success');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm z-[100] flex justify-center p-4 overflow-y-auto pt-20 md:items-center md:pt-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-[2rem] md:rounded-[2.5rem] w-full max-w-md p-6 md:p-10 shadow-2xl relative overflow-hidden h-fit my-auto"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors z-10">
          <X className="w-6 h-6" />
        </button>

        {mode === 'success' ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              {successMsg ? 'Solicitud Enviada' : '¡Registro Exitoso!'}
            </h2>
            <p className="text-slate-600 mb-8">
              {successMsg || (
                <>Hemos enviado un correo a <b>{formData.email}</b>. Por favor, confirma tu cuenta para poder agendar tu cita.</>
              )}
            </p>
            <button onClick={onClose} className="btn-primary w-full">Entendido</button>
          </div>
        ) : mode === 'forgot' ? (
          <>
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Recuperar Contraseña</h2>
            <p className="text-slate-500 mb-8">Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              {error && <p className="text-red-500 text-sm font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {error}</p>}
              <button type="submit" disabled={loading} className="btn-primary w-full py-4 mt-4">
                {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : 'Enviar Enlace'}
              </button>
            </form>

            <button
              onClick={() => { setMode('login'); setError(''); }}
              className="w-full text-center mt-6 text-accent font-bold hover:underline"
            >
              Volver al inicio de sesión
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">
              {mode === 'login' ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
            </h2>
            <p className="text-slate-500 mb-8">
              {mode === 'login' ? 'Ingresa para gestionar tus citas' : 'Regístrate para agendar tu primera consulta'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="relative w-1/3">
                      <select
                        value={formData.phoneCode}
                        onChange={e => setFormData({ ...formData, phoneCode: e.target.value })}
                        className="w-full pl-4 pr-2 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent appearance-none text-sm"
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setError(''); }}
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 mt-4 relative"
              >
                {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
            </form>

            <p className="text-center mt-6 text-slate-500">
              {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-accent font-bold ml-2 hover:underline"
              >
                {mode === 'login' ? 'Regístrate aquí' : 'Inicia sesión'}
              </button>
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
