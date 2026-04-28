import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { contact, teamExtended } from '../data/content'
import { MessageCircle, Linkedin, ArrowRight, MapPin, Phone } from 'lucide-react'

export default function Equipo() {
  return (
    <>
      {/* Hero Section - Matching Home Style */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_OurTeam.jpg)',
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
              Elite Legal Team
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            >
              Liderazgo Técnico, <br />
              <span className="italic text-accent">Resultados Reales.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Conozca al equipo detrás de cada victoria jurídica. Abogados senior comprometidos con la excelencia y la seguridad de su patrimonio.
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

      {/* Info Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <p className="text-accent font-medium mb-2">NUESTRO EQUIPO</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">
              Especialistas que <span className="italic text-accent">trabajan para usted</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              En Enlace Jurídico, la excelencia no es opcional. Hemos reunido a un equipo multidisciplinario donde cada profesional aporta una visión profunda y resolutiva, asegurando que su situación sea gestionada con la precisión técnica y la agilidad estratégica que los desafíos legales modernos exigen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Cards */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          {teamExtended.map((member, idx) => {
            const isSecond = idx === 1

            return (
              <ScrollReveal key={member.id} delay={idx * 0.1}>
                <motion.article
                  className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-20 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray/10 max-w-7xl mx-auto"
                  whileHover={{ y: -10 }}
                >
                  {/* Photo Column - Fixed Aspect Ratio */}
                  <div
                    className={`relative bg-primary-dark overflow-hidden group aspect-[4/5] md:aspect-auto ${isSecond ? 'md:order-last order-first' : 'order-first'
                      }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-60" />

                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-primary-dark/90 backdrop-blur-md rounded-full px-4 py-2 border border-accent/40 shadow-lg">
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest">{member.specialization}</p>
                    </div>

                    {/* Decorative Number */}
                    <div className="absolute bottom-8 left-8 font-serif text-8xl font-bold text-accent/10 leading-none pointer-events-none">
                      {String(member.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center order-last ${isSecond ? 'bg-primary-dark text-white' : 'bg-white text-primary'
                      }`}
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-3xl md:text-4xl font-bold mb-1 leading-tight">{member.name}</h3>
                      <p className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
                        {member.role}
                      </p>
                    </div>

                    {/* Hook Statement */}
                    <blockquote className={`font-serif text-base md:text-lg italic mb-6 pb-4 border-l-4 border-accent pl-4 leading-relaxed ${isSecond ? 'text-white/80' : 'text-primary'
                      }`}>
                      "{member.hook}"
                    </blockquote>

                    {/* Bio */}
                    <p className={`mb-6 text-sm md:text-base leading-relaxed ${isSecond ? 'text-white/70' : 'text-text-secondary'
                      }`}>
                      {member.bio}
                    </p>

                    {/* Areas */}
                    <div className="mb-8">
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-3 opacity-70">
                        Áreas de Dominio
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.areas.map((area) => (
                          <span
                            key={area}
                            className={`text-[11px] px-3 py-1.5 rounded-full border transition-all duration-300 ${isSecond
                              ? 'bg-white/5 border-white/10 text-white/80 hover:bg-accent/20 hover:border-accent/40 hover:text-accent'
                              : 'bg-slate border-gray/50 text-text-secondary hover:border-accent/40 hover:text-accent'
                              }`}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Approach Box */}
                    <div className={`p-5 md:p-6 rounded-2xl mb-8 border-l-4 border-accent ${isSecond ? 'bg-white/5' : 'bg-slate'
                      }`}>
                      <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">
                        Visión Estratégica
                      </p>
                      <p className={`text-sm leading-relaxed italic ${isSecond ? 'text-white/80' : 'text-primary'
                        }`}>
                        "{member.approach}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 flex-wrap mt-auto">
                      <a href={`tel:${contact.phoneRaw}`} className="btn-primary px-6 py-3 flex items-center gap-2 text-sm">
                        <MessageCircle size={18} />
                        Consultar Caso
                      </a>
                      <a href="#" className={`px-6 py-3 rounded-xl font-bold text-xs transition-all flex items-center gap-2 border ${isSecond
                        ? 'border-white/20 text-white hover:bg-white hover:text-primary-dark'
                        : 'border-primary/10 text-primary hover:bg-primary-dark hover:text-white'
                        }`}>
                        <Linkedin size={18} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-2">POR QUÉ ELEGIRNOS</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                Los valores que guían cada <span className="italic">decisión jurídica</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'integrity', title: 'Integridad Absoluta', desc: 'Cada consejo libre de conflictos de interés. La honestidad es no negociable.' },
              { id: 'excellence', title: 'Excelencia Técnica', desc: 'Formación continua y actualización permanente en cada área de práctica.' },
              { id: 'attention', title: 'Atención Personalizada', desc: 'Cada cliente tiene un abogado asignado que lo acompaña de principio a fin.' },
              { id: 'transparency', title: 'Transparencia Digital', desc: 'Portal 24/7 que elimina la opacidad del sistema legal tradicional.' },
              { id: 'agility', title: 'Agilidad Procesal', desc: 'Priorizamos la vía más eficiente hacia la solución. Litigamos cuando es necesario.' },
              { id: 'results', title: 'Resultados Comprobables', desc: '98% de casos resueltos favorablemente. Diagnósticos honestos desde el inicio.' },
            ].map((value) => (
              <ScrollReveal key={value.id} delay={0.1}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-xl text-primary font-bold mb-3">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Matching Home Style */}
      <section className="bg-primary-dark text-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">¿Necesita el respaldo de un experto?</h2>
              <p className="text-xl text-white/80 mb-6">
                <span className="text-accent">Hable con nosotros hoy mismo</span>
              </p>
              <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
                En una consulta de diagnóstico sin costo, identificamos qué especialista de nuestro equipo
                es el más adecuado para su situación y trazamos el camino legal a seguir.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href={`tel:${contact.phoneRaw}`} className="btn-primary px-10 py-4 text-lg">
                  Llamar Ahora
                </a>
                <Link to="/contacto" className="btn-secondary px-10 py-4 text-lg border-white/20 hover:bg-white/10 group">
                  Iniciar Consulta <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
