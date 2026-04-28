import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { contact } from '../data/content'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const location = useLocation()
  const formRef = useRef(null)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const area = params.get('area')
    if (area) {
      setFormData(prev => ({
        ...prev,
        subject: `Consulta especializada: ${area}`,
        message: `Cordial saludo,\n\nEstoy interesado(a) en recibir asesoría legal detallada en el área de ${area}. Me gustaría agendar una cita para discutir mi caso.\n\nQuedo atento(a) a su respuesta.`
      }))

      // Scroll to form if area is present
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [location])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Hero Section - Matching Home Style */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_Contact.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative container-fluid py-20 px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title Principal Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-accent font-bold tracking-[0.3em] uppercase mb-8"
            >
              Atención Personalizada
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            >
              Estamos a un <br />
              <span className="italic text-accent">Mensaje de Distancia.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Inicie su proceso legal hoy mismo. Nuestro equipo de especialistas está listo para brindarle la seguridad jurídica que su caso merece.
            </motion.p>

            {/* Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-7xl mx-auto mb-12"
            >
              <div className="border-t border-white/20 pt-12 pb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-4">
                  <div className="flex gap-4">
                    <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-accent font-medium mb-2 uppercase tracking-widest text-left">Sede Central</p>
                      <p className="text-lg font-serif text-white">{contact.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-accent font-medium mb-2 uppercase tracking-widest text-left">Línea de atención</p>
                      <p className="text-lg font-serif text-white">{contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-slate py-24 md:py-40">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">Canales Directos</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Elija el medio de su preferencia. Estamos comprometidos con una respuesta ágil y profesional en menos de 24 horas hábiles.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                      <MapPin className="text-accent group-hover:text-primary-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-2">Dirección Física</h3>
                      <p className="text-text-secondary text-lg leading-snug">{contact.address}</p>
                      <p className="text-text-secondary text-lg">{contact.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                      <Phone className="text-accent group-hover:text-primary-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-2">Central Telefónica</h3>
                      <a href={`tel:${contact.phoneRaw}`} className="text-accent text-lg hover:underline font-medium">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                      <Mail className="text-accent group-hover:text-primary-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-2">Correo Electrónico</h3>
                      <a href={`mailto:${contact.email}`} className="text-accent text-lg hover:underline font-medium">
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                      <Clock className="text-accent group-hover:text-primary-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-primary mb-2">Horario de Oficina</h3>
                      <p className="text-text-secondary text-lg">{contact.hours}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div ref={formRef} className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray/10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-1 bg-accent rounded-full" />
                    <h3 className="font-serif text-2xl text-primary font-bold">Formulario de Diagnóstico Inicial</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Nombre Completo</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Ej. Juan Pérez"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Correo Electrónico</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="juan@ejemplo.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Teléfono de Contacto</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+57 300 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-slate border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Asunto</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Ej. Consulta por Sucesión"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-2">Su Caso o Inquietud</label>
                      <textarea
                        name="message"
                        placeholder="Describa brevemente su situación..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-6 py-4 bg-slate border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 group">
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Enviar Solicitud de Consulta
                    </button>

                    <p className="text-center text-sm text-text-secondary italic">
                      * Al enviar este formulario, usted acepta nuestra política de tratamiento de datos personales.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="h-[500px] relative overflow-hidden group">
        <iframe
          title="Ubicación de Enlace Jurídico - Calle 32 #45-64 Oficina 105 Edificio Thunapa, Medellín"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0652898505496!2d-75.57067!3d6.225621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442d96e3f8d6ed%3A0xf5d96c8d0123456!2sCalle%2032%20%2345-64%20Oficina%20105%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000"
          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Location Info Overlay - Bottom Right */}
        <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-xs z-10">
          <div className="flex items-start gap-3">
            <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-serif font-bold text-primary mb-2">Nuestra Oficina</p>
              <p className="text-sm text-text-secondary mb-3">
                Calle 32 #45-64 Oficina 105<br />
                Edificio Thunapa<br />
                Medellín - Antioquia
              </p>
              <a
                href="https://maps.google.com/?q=Calle+32+45-64+Oficina+105+Edificio+Thunapa+Medellin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:text-primary transition-colors text-sm flex items-center gap-1"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

