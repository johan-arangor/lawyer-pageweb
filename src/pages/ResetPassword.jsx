import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

const API_URL = import.meta.env.DEV 
  ? import.meta.env.VITE_API_URL 
  : (window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL);

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle', 'success', 'error'
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('ResetPassword Token:', token);
    if (!token) {
      console.error('No token found in URL');
      setStatus('error');
      setError('Token de recuperación no válido o ausente.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al restablecer la contraseña');

      setStatus('success');
      setTimeout(() => navigate('/'), 5000);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24 md:pt-32">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-primary/5 border border-slate-100 text-center"
        >
          {status === 'success' ? (
            <div className="py-4">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-primary mb-4">Contraseña Actualizada</h1>
              <p className="text-slate-600 mb-8">
                Tu contraseña ha sido restablecida con éxito. Ya puedes iniciar sesión con tus nuevas credenciales.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Ir al Inicio <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-slate-400 text-sm mt-6">Redirigiendo automáticamente en unos segundos...</p>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-primary mb-2">Nueva Contraseña</h1>
              <p className="text-slate-500 mb-8">Crea una nueva contraseña segura para tu cuenta de Enlace Jurídico.</p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Nueva contraseña"
                    required
                    minLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    required
                    minLength={6}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || status === 'error' && !token}
                  className="btn-primary w-full py-4 mt-4"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    'Restablecer Contraseña'
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
