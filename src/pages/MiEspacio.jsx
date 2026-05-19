import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, Calendar, Shield, MapPin, Phone, Mail, ChevronRight, Lock, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const API_URL = import.meta.env.DEV 
  ? import.meta.env.VITE_API_URL 
  : (window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL);

export default function MiEspacio() {
  const { user, token, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'appointments', 'cases'
  const [appointments, setAppointments] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState('');
  const notesPerPage = 5;

  useEffect(() => {
    if (user && token) {
      fetchAppointments();
      fetchCases();
    }
  }, [user, token]);

  const handleChangePassword = async () => {
    setPasswordLoading(true);
    setPasswordStatus('');
    try {
      const res = await fetch(`${API_URL}/auth/request-password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, source: 'web' })
      });
      if (!res.ok) throw new Error('Error al enviar el correo');
      setPasswordStatus('success');
    } catch (err) {
      setPasswordStatus('error');
    } finally {
      setPasswordLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await fetch(`${API_URL}/appointments/my`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error('Error fetching appointments');
    }
  };

  const fetchCases = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/cases`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setCases(data);
    } catch (err) {
      console.error('Error fetching cases');
    } finally {
      setLoading(false);
    }
  };

  const openCaseDetails = async (caseId) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/cases/${caseId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setSelectedCase(data);
      setIsModalOpen(true);
      setCurrentPage(1);
    } catch (err) {
      console.error('Error fetching case details');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-slate-400 font-bold">Inicia sesión para acceder a tu espacio.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate min-h-screen pt-24 pb-20">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-1/4 space-y-4">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-center">
                <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-serif">
                  {user.name?.[0].toUpperCase() + user.name?.split(' ')[1]?.slice(0, 1)?.toUpperCase()}
                </div>
                <h2 className="text-xl font-serif font-bold text-primary">{user.name.replace(/\b\w/g, l => l.toUpperCase())}</h2>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Cliente</p>

                <button onClick={logout} className="mt-8 text-red-500 font-bold text-sm hover:underline">Cerrar Sesión</button>
              </div>

              <nav className="bg-white rounded-[2.5rem] shadow-lg p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'profile' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:bg-slate-50'}`}
                >
                  <User className="w-5 h-5" /> Perfil
                </button>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'appointments' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:bg-slate-50'}`}
                >
                  <Calendar className="w-5 h-5" /> Mis Citas
                </button>
                <button
                  onClick={() => setActiveTab('cases')}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'cases' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:bg-slate-50'}`}
                >
                  <Shield className="w-5 h-5" /> Seguimiento Legal
                </button>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <div className="bg-white rounded-[2.5rem] shadow-xl p-10 min-h-[600px]">
                {activeTab === 'profile' && (
                  <motion.div 
                    key="profile-tab"
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="space-y-8"
                  >
                    <h3 className="text-3xl font-serif font-bold text-primary">Información Personal</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nombre Completo</label>
                        <p className="font-bold text-primary flex items-center gap-2"><User className="w-4 h-4 text-accent" /> {user.name}</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Correo Electrónico</label>
                        <p className="font-bold text-primary flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> {user.email}</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Teléfono de Contacto</label>
                        <p className="font-bold text-primary flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {user.phone || 'No registrado'}</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dirección</label>
                        <p className="font-bold text-primary flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {user.address || 'No registrada'}</p>
                      </div>
                    </div>

                    {/* Sección de Seguridad */}
                    <div className="mt-12 pt-8 border-t border-slate-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
                          <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary">Seguridad de la Cuenta</h3>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="space-y-1">
                          <p className="font-bold text-primary">Contraseña del Sistema</p>
                          <p className="text-sm text-slate-500 max-w-md">Para cambiar tu contraseña te enviaremos un enlace de acceso seguro a tu correo electrónico registrado.</p>
                        </div>
                        
                        <div className="shrink-0">
                          {passwordStatus === 'success' ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-600 rounded-xl font-bold">
                                <CheckCircle className="w-5 h-5" /> ¡Correo Enviado!
                              </div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Revisa tu correo</p>
                            </div>
                          ) : (
                            <button 
                              onClick={handleChangePassword}
                              disabled={passwordLoading}
                              className="group px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all flex items-center gap-3"
                            >
                              {passwordLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              ) : (
                                <><Lock className="w-4 h-4" /> Cambiar Contraseña</>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      {passwordStatus === 'error' && (
                        <p className="text-red-500 text-xs mt-3 flex items-center gap-2 font-bold px-2">
                          <AlertCircle className="w-4 h-4" /> Error al enviar el correo. Reintenta más tarde.
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'appointments' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                    <h3 className="text-3xl font-serif font-bold text-primary">Mis Citas</h3>
                    <div className="space-y-4">
                      {appointments.length === 0 ? (
                        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                          <p className="text-slate-400 font-bold">Aún no tienes citas agendadas.</p>
                          <a href="/#/agendar" className="text-accent font-black uppercase text-xs mt-4 inline-block hover:underline">Agendar ahora</a>
                        </div>
                      ) : (
                        appointments.map(a => (
                          <div key={a.id} className="p-6 bg-slate-50 rounded-3xl flex items-center justify-between border border-slate-100">
                            <div className="flex items-center gap-6">
                              <div className="bg-white p-4 rounded-2xl text-center min-w-[70px] shadow-sm">
                                <span className="block text-[10px] font-black text-slate-400 uppercase">{new Date(a.scheduledAt).toLocaleDateString('es-CO', { month: 'short' })}</span>
                                <span className="text-2xl font-black text-primary">{new Date(a.scheduledAt).getDate()}</span>
                              </div>
                              <div>
                                <p className="font-black text-primary text-lg">{a.service.name}</p>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(a.scheduledAt).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })}</span>
                                  <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase border ${a.status === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                                    {a.status === 'CONFIRMED' ? 'Confirmada' : 'Pendiente'}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="p-3 text-slate-400 hover:text-accent transition-all"><ChevronRight className="w-6 h-6" /></button>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'cases' && (
                  <>
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-3xl font-serif font-bold text-primary">Seguimiento Legal</h3>
                      <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase tracking-widest">
                        {cases.length} Expedientes encontrados
                      </span>
                    </div>
                    <div className="space-y-4">
                      {cases.length === 0 ? (
                        <div className="p-10 border-2 border-dashed border-slate-200 rounded-[2rem] text-center">
                          <p className="text-slate-400 font-bold">No se encontraron expedientes vinculados.</p>
                        </div>
                      ) : (
                        <div className="grid gap-6">
                          {cases.map((c) => (
                            <div
                              key={c.id}
                              className="w-full min-h-[120px] p-8 bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                              <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-[#1a237e] text-white rounded-2xl flex items-center justify-center shrink-0">
                                  <Shield size={28} />
                                </div>
                                <div>
                                  <p className="text-[10px] font-black text-[#b39b72] uppercase tracking-widest mb-1">{c.caseNumber}</p>
                                  <h4 className="text-xl font-bold text-[#1a1a1a]">{c.title}</h4>
                                  <div className="flex items-center gap-3 mt-2">
                                    <span className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-slate-600 uppercase border border-slate-200">
                                      {c.status}
                                    </span>
                                    <span className="text-xs font-bold text-slate-400">Abogado: {c.lawyer?.name || 'Asignando...'}</span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => openCaseDetails(c.id)}
                                className="px-6 py-3 bg-[#b39b72] text-white rounded-xl font-bold text-sm shadow-lg shadow-gold-500/20 hover:bg-[#9d8560] transition-all"
                              >
                                Ver Expediente
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </main>
          </div>
        </div>

        {/* Modal de Bitácora */}
        {isModalOpen && selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">Bitácora de Seguimiento</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Expediente: {selectedCase.caseNumber}</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all shadow-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 max-h-[60vh] overflow-y-auto">
                {!selectedCase.followUpNotes || selectedCase.followUpNotes.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-slate-400 font-bold italic">No hay registros públicos en la bitácora aún.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {selectedCase.followUpNotes
                      .slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage)
                      .map((note) => (
                        <div key={note.id} className="relative pl-8 border-l-2 border-slate-100 pb-2">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-accent shadow-sm" />
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-primary">{note.title || 'Actualización de Proceso'}</h4>
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md uppercase">
                              {new Date(note.createdAt).toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                            {note.content}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {selectedCase.followUpNotes?.length > notesPerPage && (
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className="px-4 py-2 text-xs font-bold text-primary disabled:opacity-30 flex items-center gap-2 hover:bg-white rounded-xl transition-all"
                  >
                    ← Anterior
                  </button>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Página {currentPage} de {Math.ceil(selectedCase.followUpNotes.length / notesPerPage)}
                  </span>
                  <button
                    disabled={currentPage === Math.ceil(selectedCase.followUpNotes.length / notesPerPage)}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className="px-4 py-2 text-xs font-bold text-primary disabled:opacity-30 flex items-center gap-2 hover:bg-white rounded-xl transition-all"
                  >
                    Siguiente →
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}