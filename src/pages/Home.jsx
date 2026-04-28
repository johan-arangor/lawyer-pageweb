import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Scale, Handshake, Briefcase, TrendingUp, Shield, Building2, Gavel, MapPin, Phone, MessageCircle, Smartphone, Bell, BarChart3, Search, Target, Zap, Check } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { contact, services, stats, testimonials, team, workflow, heroContent, benefits } from '../data/content'

// Icons mapping
const iconMap = { Heart, Scale, Handshake, Briefcase, TrendingUp, Shield, Building2, Gavel, Search, Target, Zap, Check }

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_Home.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/80 to-primary-dark/90" />

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
              className="text-xl md:text-2xl text-accent mb-12 text-center md:text-left"
            >
              {heroContent.mainPrincipalText}
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-center md:text-justify"
            >
              En <span className="italic text-accent">ENLACE JURÍDICO</span>, encontrará asesoría especializada
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-12"
            >
              {heroContent.subtitle}
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
                      <p className="text-xs text-accent font-medium mb-2">Nuestra ubicación</p>
                      <p className="text-lg font-serif text-white">{contact.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-accent font-medium mb-2">Línea de atención personalizada</p>
                      <p className="text-lg font-serif text-white">{contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Stats Bar */}
      <section className="relative">
        <div className="container-fluid">
          <div className="p-6 md:p-12 border-b-4 border-accent relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10 relative z-10">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center px-4 group">
                    <motion.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <p className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                        {stat.label}
                      </p>
                      <p className="font-serif text-4xl md:text-5xl text-accent font-bold mb-3 tracking-tighter">
                        <CountUp value={parseInt(stat.number)} suffix={stat.number.match(/[+%]/)?.[0] || ''} />
                      </p>
                    </motion.div>
                    <div className="w-6 h-0.5 bg-white/20 mx-auto mb-4 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
                    <p className="text-primary/70 text-[10px] md:text-sm tracking-[0.2em]">
                      {stat.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Services Section */}
      <section className="bg-slate py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-2">NUESTROS SERVICIOS</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">Áreas de Práctica</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Especialización en cada rama del derecho que impacta tu vida
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon]
              return (
                <ScrollReveal key={service.id} delay={i * 0.05}>
                  <Link to="/areas" className="block h-full">
                    <motion.div
                      className="bg-white p-8 rounded-3xl hover:shadow-2xl transition-all cursor-pointer group min-h-[320px] flex flex-col h-full border border-gray/10"
                      whileHover={{ y: -8 }}
                    >
                      <div className="bg-accent-pale rounded-2xl w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h3 className="font-serif text-2xl text-primary font-bold mb-3 group-hover:text-accent transition-colors">{service.name}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{service.description}</p>
                      <div className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Saber más <ArrowRight size={14} />
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Place Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl w-full max-w-md mx-auto group">
                <img
                  src="/img/Grupal_1.jpeg"
                  alt="Equipo de Enlace Jurídico"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col justify-center h-full">
                <p className="text-accent font-medium mb-2">EXPERIENCIA COMPROBADA</p>
                <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                  HAS LLEGADO AL LUGAR INDICADO
                </h2>
                <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                  En Enlace Jurídico comprendemos que cada caso es único y requiere atención personalizada.
                  Nuestro equipo de abogados especializados trabaja con dedicación para proteger sus intereses.
                </p>

                <div className="space-y-6 mb-12">
                  {benefits.slice(0, 2).map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="font-serif font-bold text-primary mb-1">{benefit.title}</h3>
                        <p className="text-text-secondary">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Scale size={24} className="text-accent" />
                      <h3 className="font-serif font-bold text-primary text-lg">5 Años de experiencia</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>Experiencia comprobada en múltiples áreas del derecho</span>
                      </li>
                      <li className="flex gap-2 text-text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>Atención personalizada en cada caso.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Shield size={24} className="text-accent" />
                      <h3 className="font-serif font-bold text-primary text-lg">Aspectos de éxito</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>Soluciones integrales en un solo lugar</span>
                      </li>
                      <li className="flex gap-2 text-text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>Transparencia y claridad en honorarios</span>
                      </li>
                      <li className="flex gap-2 text-text-secondary text-sm">
                        <span className="text-accent">•</span>
                        <span>Acompañamiento permanente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Edge Section */}
      <section className="bg-primary-dark text-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">Ventaja Tecnológica</p>
                <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                  Control total de tu<br />
                  proceso legal <em className="italic text-accent">24/7</em>
                </h2>
                <p className="text-white/70 text-lg mb-12 leading-relaxed">
                  Nuestro portal exclusivo para clientes transforma la opacidad tradicional del sistema legal
                  en transparencia absoluta. Consulta cada movimiento de tu expediente en tiempo real.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    {
                      title: 'Expediente Digital Completo',
                      desc: 'Accede a todos tus documentos, escritos y notificaciones en un solo lugar, organizados cronológicamente.'
                    },
                    {
                      title: 'Alertas y Notificaciones',
                      desc: 'Recibe actualizaciones instantáneas vía app o correo cada vez que haya un avance en tu caso.'
                    },
                    {
                      title: 'Mensajería Segura Directa',
                      desc: 'Comunícate con tu abogado asignado mediante un canal cifrado de extremo a extremo, disponible siempre.'
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <Shield size={24} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-serif font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/portal" className="btn-primary inline-flex items-center gap-2">
                  Solicitar Acceso al Portal
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {/* Phone Mockup with Floating Badges - Adapted from template */}
              <div className="relative flex justify-center items-center py-20 px-10">
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[100px] rounded-full" aria-hidden="true" />

                {/* Floating Badge 1 - Encriptación */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.5 },
                    x: { duration: 0.5 }
                  }}
                  className="absolute top-[10%] -right-4 md:-right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl z-30 flex items-center gap-3 border border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-accent leading-none mb-1">Encriptación</p>
                    <p className="text-sm font-bold text-primary-dark leading-none">256-bit SSL</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 - Uptime */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    opacity: { duration: 0.5 },
                    x: { duration: 0.5 }
                  }}
                  className="absolute top-[65%] -left-4 md:-left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl z-30 flex items-center gap-3 border border-white/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-accent leading-none mb-1">Uptime</p>
                    <p className="text-sm font-bold text-primary-dark leading-none">99.9% garantizado</p>
                  </div>
                </motion.div>

                {/* Phone Frame */}
                <div className="relative z-20 w-[280px] aspect-[9/18.5] bg-[#1a237e] rounded-[3rem] p-2 shadow-2xl border-4 border-[#0a1140]">
                  {/* Internal Phone Shadow/Bezel */}
                  <div className="absolute inset-0 rounded-[2.8rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-10" />

                  {/* Screen */}
                  <div className="relative h-full w-full bg-white rounded-[2.4rem] overflow-hidden flex flex-col">
                    {/* Phone Header */}
                    <div className="pt-8 pb-4 px-5 flex justify-between items-center" style={{ background: '#1a237e' }}>
                      <div className="text-sm font-serif font-bold text-white">
                        Enlace <span className="text-accent">Jurídico</span>
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md" style={{ background: '#b39b72', color: '#1a237e' }}>
                        JR
                      </div>
                    </div>

                    {/* Phone Body */}
                    <div className="flex-1 px-5 space-y-5">
                      <div className="space-y-0.5">
                        <p className="text-[11px] text-black/70 font-medium">Mi Expediente</p>
                        <p className="text-sm font-serif font-bold text-primary-dark">Caso #EJ-2024-147</p>
                      </div>

                      {/* Case Card */}
                      <div className="rounded-2xl p-4 space-y-3 shadow-lg" style={{ background: '#283593' }}>
                        <div>
                          <p className="text-[9px] font-bold text-accent uppercase tracking-wider mb-1">Próxima Diligencia</p>
                          <p className="text-xs font-serif font-bold text-white leading-tight">Audiencia de Conciliación — Sala B</p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
                            <div className="h-full bg-accent rounded-full" style={{ width: '45%' }} />
                          </div>
                          <p className="text-[9px] text-white/80">45% · Conciliación Civil</p>
                        </div>
                      </div>

                      {/* Docs Section */}
                      <div className="grid grid-cols-1 gap-2.5">
                        <div className="flex items-center gap-3 p-3 rounded-xl border" style={{ background: '#e8f0fe', borderColor: 'rgba(26,35,126,0.15)' }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,35,126,0.1)' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a237e" strokeWidth="2">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                          </div>
                          <div className="overflow-hidden text-left">
                            <p className="text-[11px] font-bold text-primary-dark truncate">Mensaje nuevo</p>
                            <p className="text-[10px] text-black/70">Abog. Torres</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b39b72" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            </svg>
                          </div>
                          <div className="overflow-hidden text-left">
                            <p className="text-[11px] font-bold text-primary-dark truncate">Escrito Réplica</p>
                            <p className="text-[10px] text-black/70">Listo para firma</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nav Bar */}
                    <div className="mt-auto px-6 py-4 flex justify-between items-center border-t border-gray-50 bg-white">
                      {[
                        { label: 'Inicio', active: true },
                        { label: 'Caso', active: false },
                        { label: 'Docs', active: false },
                        { label: 'Agenda', active: false }
                      ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-1">
                          <div className={`w-2.5 h-2.5 rounded-sm ${item.active ? 'bg-[#b39b72]' : 'bg-[#1a237e]'}`} />
                          <span className={`text-[10px] font-medium ${item.active ? 'text-[#b39b72]' : 'text-[#1a237e]'}`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* App Tracking Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-accent font-medium mb-2">INNOVACIÓN LEGAL</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                App de Seguimiento de Casos
              </h2>
              <p className="text-text-secondary text-lg">
                Nuestra app exclusiva te permite monitorear tu caso en tiempo real con actualización constante.
                Recibe notificaciones, accede a documentos y comunícate con tu abogado desde cualquier dispositivo.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: 'App Web', desc: 'Accede a tu portal desde cualquier navegador sin descargar nada.' },
              { icon: Bell, title: 'Notificaciones', desc: 'Alertas instantáneas sobre cada avance o movimiento en tu expediente.' },
              { icon: BarChart3, title: 'Seguimiento', desc: 'Visualiza el progreso de tu caso mediante métricas y reportes claros.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-white p-10 rounded-[2.5rem] text-center border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                  whileHover={{ y: -8 }}
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:rotate-12 transition-all duration-500">
                    <item.icon size={36} className="text-accent group-hover:text-primary-dark transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl text-primary-dark font-bold mb-4">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section - Brand Stepper Design */}
      <section className="bg-primary-dark py-24 md:py-32 text-center relative overflow-hidden" id="proceso">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-24">
              <div className="flex items-center justify-center gap-4 mb-6">
                <p className="text-accent font-medium mb-2">CÓMO TRABAJAMOS</p>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                Un proceso <br />desde el primer día
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Cuatro fases rigurosas que convierten su problemática legal en una solución concreta y documentada.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto">
            {/* Connecting Line - Background */}
            <div className="absolute top-12 left-[12.5%] w-[75%] h-[1px] bg-white/10 hidden lg:block z-0" aria-hidden="true" />

            {/* Connecting Line - Animated Progress based on activeStep */}
            <div className="absolute top-12 left-[12.5%] w-[75%] h-[1px] hidden lg:block z-0" aria-hidden="true">
              <motion.div
                className="h-full bg-accent shadow-[0_0_15px_rgba(179,155,114,0.5)]"
                animate={{ width: `${(activeStep / 3) * 100}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-4 relative z-10">
              {workflow.map((item, i) => {
                const IconComponent = iconMap[item.icon]
                const isActive = activeStep === i

                return (
                  <ScrollReveal key={item.step} delay={i * 0.1}>
                    <div className="flex flex-col items-center group">
                      {/* Circle Indicator */}
                      <div className="relative mb-10">
                        <motion.div
                          className={`w-24 h-24 rounded-full border flex flex-col items-center justify-center transition-all duration-700 bg-primary-dark ${isActive
                            ? 'border-accent shadow-[0_0_30px_rgba(179,155,114,0.2)]'
                            : 'border-white/10 group-hover:border-accent/50'
                            }`}
                          animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                        >
                          <span className={`font-serif text-2xl font-bold mb-1 transition-colors duration-500 ${isActive ? 'text-accent' : 'text-white/20 group-hover:text-accent'}`}>
                            {item.step}
                          </span>
                          <div className={`transition-colors duration-500 ${isActive ? 'text-accent' : 'text-white/20 group-hover:text-accent'}`}>
                            {IconComponent && <IconComponent size={14} strokeWidth={2.5} />}
                          </div>
                        </motion.div>

                        {/* Active Indicator Dot */}
                        {isActive && (
                          <motion.div
                            layoutId="activeDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#b39b72]"
                          />
                        )}
                      </div>

                      <h3 className={`font-serif text-2xl text-white font-bold mb-4 tracking-tight transition-colors duration-500 ${isActive ? 'text-accent' : ''}`}>
                        {item.title}
                      </h3>
                      <p className={`text-white/50 text-sm leading-relaxed max-w-[240px] transition-colors duration-500 ${isActive ? 'text-white/80' : ''}`}>
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Split Layout Design */}
      <section
        className="relative min-h-screen py-24 flex items-center overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Testimonial.jpg)',
        }}
      >
        {/* Deep overlay for text readability */}
        <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]" aria-hidden="true" />

        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Section Header */}
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <p className="text-accent font-medium mb-2">EXPERIENCIAS</p>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
                  La confianza <br />de nuestros <br /><span className="text-accent italic">clientes</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed font-light">
                  Más de una década transformando desafíos legales en casos de éxito documentados. Su tranquilidad es nuestro mayor respaldo.
                </p>

                <div className="mt-12 flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-serif font-bold text-white mb-1">500+</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Casos Ganados</p>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div>
                    <p className="text-3xl font-serif font-bold text-white mb-1">98%</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Satisfacción</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Stacked Testimonials */}
            <div className="flex flex-col gap-6">
              {testimonials.map((testimonial, i) => (
                <ScrollReveal key={testimonial.id} delay={i * 0.2} direction="right">
                  <motion.div
                    whileHover={{ x: -10 }}
                    className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 text-accent flex items-center justify-center font-serif text-xl font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-serif font-bold text-white text-lg leading-none mb-1">{testimonial.name}</p>
                        <p className="text-accent text-sm font-medium tracking-wide uppercase">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed italic font-light">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-dark text-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">¿Necesita asesoramiento legal?</h2>
              <p className="text-xl text-white/80 mb-4">
                <span className="text-accent">Contáctenos hoy</span>
              </p>
              <p className="text-white/70 text-lg mb-12">
                Primera consulta gratuita. Sin compromisos. Nuestro equipo está listo para escucharle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${contact.phoneRaw}`} className="btn-primary">
                  Llamar Ahora
                </a>
                <Link to="/contacto" className="btn-secondary">
                  Formulario de Contacto <ArrowRight className="inline-block ml-2" size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

// CountUp Animation Component
function CountUp({ value, suffix = '' }) {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return `${count}${suffix}`
}

import React from 'react'
