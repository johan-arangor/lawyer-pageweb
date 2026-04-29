import { useState, useEffect } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Briefcase, Phone, Mail, Check, AlertCircle, Clock, ChevronRight, ChevronLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const API_URL = window.ENV?.VITE_API_URL || import.meta.env.VITE_API_URL

export default function AgendarCita() {
  const { user } = useAuth()
  const [step, setStep] = useState(user ? 2 : 1)
  const [services, setServices] = useState([])
  const [lawyers, setLawyers] = useState([])
  const [availability, setAvailability] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    clientName: user?.name || '',
    clientLastName: '',
    clientEmail: user?.email || '',
    confirmEmail: user?.email || '',
    clientPhone: user?.phone || '',
    clientPhoneCode: '+57',
    serviceId: '',
    lawyerId: '',
    scheduledAt: '',
    notes: '',
  })

  useEffect(() => {
    fetchInitialData()
  }, [])

  const fetchInitialData = async () => {
    try {
      const [sRes, lRes] = await Promise.all([
        fetch(`${API_URL}/services/public`),
        fetch(`${API_URL}/public/lawyers`)
      ])
      setServices(await sRes.json())
      setLawyers(await lRes.json())
    } catch (err) {
      console.error('Error fetching data')
    }
  }

  const checkAvailability = async (date) => {
    setLoading(true)
    try {
      const query = new URLSearchParams({
        date: date,
        lawyerId: formData.lawyerId || ''
      })
      const res = await fetch(`${API_URL}/availability/public?${query}`)
      const data = await res.json()
      setAvailability(data)
    } catch (err) {
      console.error('Error checking availability')
    } finally {
      setLoading(false)
    }
  }

  const handleNext = () => {
    if (step === 1) {
      if (formData.clientEmail !== formData.confirmEmail) {
        alert('Los correos electrónicos no coinciden')
        return
      }
    }
    setStep(step + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/appointments/public/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setSuccess(true)
      } else {
        alert('Error al agendar cita. Intente de nuevo.')
      }
    } catch (err) {
      alert('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Información Personal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nombres" required value={formData.clientName} onChange={e => setFormData({ ...formData, clientName: e.target.value })} className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" />
              <input type="text" placeholder="Apellidos" required value={formData.clientLastName} onChange={e => setFormData({ ...formData, clientLastName: e.target.value })} className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email" required value={formData.clientEmail} onChange={e => setFormData({ ...formData, clientEmail: e.target.value })} className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" />
              <input type="email" placeholder="Confirmar Email" required value={formData.confirmEmail} onChange={e => setFormData({ ...formData, confirmEmail: e.target.value })} className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <div className="flex gap-4">
              <select value={formData.clientPhoneCode} onChange={e => setFormData({ ...formData, clientPhoneCode: e.target.value })} className="w-32 px-4 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent bg-white">
                <option value="+57">🇨🇴 +57</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+52">🇲🇽 +52</option>
              </select>
              <input type="tel" placeholder="Teléfono Celular" required value={formData.clientPhone} onChange={e => setFormData({ ...formData, clientPhone: e.target.value })} className="flex-1 px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <button onClick={handleNext} disabled={!formData.clientName || !formData.clientEmail || !formData.clientPhone} className="btn-primary w-full flex items-center justify-center gap-2">Continuar <ChevronRight className="w-4 h-4" /></button>
          </motion.div>
        )
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Detalles de la Cita</h3>
            <div>
              <label className="text-xs font-bold uppercase text-text-light mb-2 block">Servicio Legal</label>
              <div className="grid grid-cols-1 gap-3">
                {services.map(s => (
                  <button 
                    key={s.id} 
                    onClick={() => {
                      const isLawyerValid = s.lawyers?.some(l => l.id === formData.lawyerId);
                      setFormData({ 
                        ...formData, 
                        serviceId: s.id,
                        lawyerId: (isLawyerValid || !formData.lawyerId) ? formData.lawyerId : ''
                      });
                    }} 
                    className={`text-left p-4 rounded-2xl border-2 transition-all ${formData.serviceId === s.id ? 'border-accent bg-accent-pale' : 'border-gray hover:border-accent/30'}`}
                  >
                    <p className="font-bold text-primary">{s.name}</p>
                    <p className="text-xs text-text-light flex items-center gap-1"><Clock className="w-3 h-3" /> {s.durationMinutes} min</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-text-light mb-2 block">Seleccionar Abogado (Opcional)</label>
              <select value={formData.lawyerId} onChange={e => setFormData({ ...formData, lawyerId: e.target.value })} className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent bg-white">
                <option value="">Cualquier abogado (Asignación automática)</option>
                {(() => {
                  const selectedService = services.find(s => s.id === formData.serviceId);
                  const displayLawyers = selectedService?.lawyers?.length > 0 
                    ? selectedService.lawyers 
                    : lawyers;
                  
                  return displayLawyers.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ));
                })()}
              </select>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="px-6 py-3 text-primary font-bold hover:bg-slate p-2 rounded-2xl">Volver</button>
              <button onClick={handleNext} disabled={!formData.serviceId} className="btn-primary flex-1">Seleccionar Horario</button>
            </div>
          </motion.div>
        )
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Fecha y Hora</h3>
            <input 
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => checkAvailability(e.target.value)} 
              className="w-full px-6 py-3 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent" 
            />
            
            {loading && <div className="text-center py-10"><div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto" /></div>}
            
            {availability && (
              <div className="space-y-4">
                <p className="text-sm font-bold text-text-light uppercase">Horas Disponibles:</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {/* Mock generation of slots based on availability info */}
                  {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map(time => (
                    <button 
                      key={time} 
                      onClick={() => setFormData({ ...formData, scheduledAt: `${new Date(availability.date || Date.now()).toISOString().split('T')[0]}T${time}:00` })} 
                      className={`py-2 rounded-xl border font-bold text-sm transition-all ${formData.scheduledAt.includes(time) ? 'bg-accent text-white border-accent shadow-lg' : 'bg-white border-gray hover:border-accent'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea placeholder="Notas adicionales (Opcional)" value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} className="w-full px-6 py-4 border border-gray rounded-2xl outline-none focus:ring-2 focus:ring-accent resize-none h-24" />

            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="px-6 py-3 text-primary font-bold">Volver</button>
              <button onClick={handleSubmit} disabled={!formData.scheduledAt || loading} className="btn-primary flex-1">Finalizar Agendamiento</button>
            </div>
          </motion.div>
        )
    }
  }

  if (success) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-white py-20">
        <div className="container-fluid text-center max-w-lg">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">¡Cita Solicitada!</h2>
          <p className="text-text-secondary text-lg mb-8">
            Hemos enviado un correo a <b>{formData.clientEmail}</b> con los detalles de tu solicitud. 
            Pronto un abogado confirmará tu cita y recibirás los enlaces para tu calendario.
          </p>
          <button onClick={() => window.location.href = '/'} className="btn-primary">Volver al Inicio</button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-slate py-20 md:py-32 min-h-screen">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          {/* Left Panel: Progress */}
          <div className="md:w-1/3 bg-primary-dark p-12 text-white flex flex-col justify-between">
            <div>
              <div className="inline-block bg-accent p-3 rounded-2xl mb-8">
                <Calendar className="text-primary-dark w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-10">Agenda tu Consulta</h2>
              <div className="space-y-8">
                {[1, 2, 3].map(s => (
                  <div key={s} className={`flex items-center gap-4 transition-all ${step >= s ? 'opacity-100' : 'opacity-30'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step === s ? 'bg-accent text-primary-dark' : step > s ? 'bg-emerald-500 text-white' : 'border border-white/30 text-white/50'}`}>
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">{s === 1 ? 'Perfil' : s === 2 ? 'Servicio' : 'Horario'}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs text-white/40 font-medium">
              © 2026 Enlace Jurídico | Firma de Abogados
            </div>
          </div>

          {/* Right Panel: Content */}
          <div className="flex-1 p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
