import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { faqs, contact } from '../data/content'
import { ChevronDown, MapPin, Phone, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react'

export default function FAQ() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      {/* Hero Section - Matching Home Style */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_FAQ.jpg)',
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
              Resolviendo sus dudas
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            >
              Preguntas <span className="italic text-accent">Frecuentes.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Encuentre respuestas claras a las inquietudes más comunes sobre nuestros procesos y servicios legales.
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

      {/* FAQ Content */}
      <section className="bg-slate py-24 md:py-40">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <HelpCircle size={48} className="text-accent mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-4">Portal de Ayuda</h2>
                <p className="text-text-secondary text-lg">Haga clic en una pregunta para ver la respuesta detallada.</p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.id} delay={i * 0.05}>
                  <motion.div
                    className={`rounded-3xl overflow-hidden transition-all duration-300 ${expanded === faq.id
                      ? 'bg-white shadow-2xl scale-[1.02] border border-accent/20'
                      : 'bg-white/50 border border-transparent hover:border-gray shadow-sm'
                      }`}
                  >
                    <button
                      onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                      className="w-full px-8 py-8 flex items-center justify-between group transition-colors text-left"
                    >
                      <div className="flex gap-6 items-start">
                        <span className={`font-serif text-2xl font-bold transition-colors ${expanded === faq.id ? 'text-accent' : 'text-primary/20'
                          }`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`font-serif font-bold text-xl md:text-2xl transition-colors ${expanded === faq.id ? 'text-primary' : 'text-primary/80'
                          }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${expanded === faq.id ? 'bg-accent text-primary-dark' : 'bg-primary/5 text-accent group-hover:bg-accent group-hover:text-primary-dark'
                          }`}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expanded === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-8 md:px-24 pb-10">
                            <div className="h-[1px] w-full bg-gray/30 mb-8" />
                            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                              {faq.answer}
                            </p>
                            <div className="mt-8 flex items-center gap-4 text-accent text-sm font-bold uppercase tracking-widest">
                              <MessageCircle size={16} />
                              ¿Aún tiene dudas? Llámenos hoy
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Matching Home Style */}
      <section className="bg-primary-dark text-white py-24 md:py-40">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">¿Aún tiene dudas sin resolver?</h2>
              <p className="text-xl text-white/80 mb-6">
                <span className="text-accent">Nuestro equipo está listo para escucharle</span>
              </p>
              <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
                Si su inquietud no aparece en nuestro portal de ayuda, no dude en contactarnos para una consulta personalizada de diagnóstico sin costo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={`tel:${contact.phoneRaw}`} className="btn-primary px-10 py-4 text-lg">
                  Llamar Ahora
                </a>
                <Link to="/contacto" className="btn-secondary px-10 py-4 text-lg border-white/20 hover:bg-white/10 group">
                  Contactar Soporte <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
