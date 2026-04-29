import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

const API_URL = window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL;

export default function ConfirmarCuenta() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Robust token extraction for HashRouter
  const getToken = () => {
    const fromParams = searchParams.get('token');
    if (fromParams) return fromParams;
    
    // Fallback for some HashRouter edge cases
    const hash = window.location.hash;
    const match = hash.match(/[?&]token=([^&]*)/);
    return match ? match[1] : null;
  };

  const token = getToken();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_URL}/auth/confirm-account`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Error al confirmar cuenta');

      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate flex items-center justify-center p-6 pt-32">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10">
        {!success ? (
          <>
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Activa tu cuenta</h2>
            <p className="text-slate-500 mb-8">Por favor, establece una contraseña segura para terminar de configurar tu cuenta.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Nueva contraseña"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent pr-12"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Confirmar contraseña"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-accent"
              />

              {error && <p className="text-red-500 text-sm font-bold flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {error}</p>}

              <button type="submit" disabled={loading || !token} className="btn-primary w-full py-4 mt-4">
                {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : 'Confirmar y Activar'}
              </button>
              {!token && <p className="text-xs text-red-500 mt-2 font-bold text-center italic">Token de confirmación ausente en la URL.</p>}
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">¡Cuenta Activada!</h2>
            <p className="text-slate-600 mb-8">Tu cuenta ha sido activada correctamente. Ahora puedes iniciar sesión y agendar tus citas.</p>
            <p className="text-xs text-slate-400">Redirigiendo al inicio...</p>
          </div>
        )}
      </div>
    </section>
  );
}
