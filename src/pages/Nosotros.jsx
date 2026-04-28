import { motion } from 'framer-motion'
import ScrollReveal from '../components/ui/ScrollReveal'
import { MapPin, Phone, Target, Eye, Shield, CheckCircle2, Star, Users, Heart } from 'lucide-react'
import { contact, corporateValues } from '../data/content'

// Icons mapping for all icons used in the page to avoid scope issues
const iconMap = { Shield, CheckCircle2, Star, Users, Heart, Target, Eye }

export default function Nosotros() {
  return (
    <>
      {/* Hero Section - Matching Home Style */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_Ours.jpg)',
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
              Nuestra Identidad
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            >
              Justicia Humana, <br />
              <span className="italic text-accent">Visión Estratégica.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              En ENLACE JURÍDICO S.A.S. transformamos desafíos legales en soluciones holísticas y sostenibles para Colombia.
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

      {/* Mission & Vision Section */}
      <section className="bg-white py-24 md:py-40">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-32">
            {/* Mission */}
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-dark rounded-2xl flex items-center justify-center shadow-xl">
                    <Target className="text-accent" size={32} />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Misión</h2>
                </div>
                <p className="text-text-secondary text-xl leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-accent first-letter:mr-1 first-letter:float-left">
                  En <span className="text-accent italic font-medium">ENLACE JURÍDICO S.A.S.</span> nos encargamos de proporcionar servicios jurídicos integrales de calidad y eficientes basados en altos estándares éticos en la práctica profesional que promueven la integridad en el ejercicio del derecho, partiendo desde la identificación de las necesidades de nuestros clientes en pro de la defensa y promoción de sus derechos.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                    <Eye className="text-primary-dark" size={32} />
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Visión</h2>
                </div>
                <p className="text-text-secondary text-xl leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-accent first-letter:mr-1 first-letter:float-left">
                  Visualizamos un futuro en donde nuestros clientes no solo nos reconocerán como líderes en la práctica jurídica y legal, sino por destacarnos por nuestra excelencia e impacto positivo en la sociedad desde un <span className="italic text-accent font-medium">enfoque humanista en Colombia</span>. Proyectado desde la asistencia interdisciplinaria y cooperativa para abordar los desafíos sociales con enfoques holísticos y sostenibles.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate py-24 md:py-40 relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] md:text-[20rem] font-bold text-primary/5 select-none pointer-events-none uppercase">
          Valores
        </div>

        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent font-bold tracking-widest uppercase mb-4">Nuestro ADN Corporativo</p>
              <h2 className="font-serif text-5xl md:text-6xl text-primary font-bold">Valores que nos <span className="italic text-accent">definen</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateValues.map((value, i) => (
              <ScrollReveal key={value.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray/10 h-full flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${value.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary-dark text-white'
                    }`}>
                    {(() => {
                      const Icon = iconMap[value.icon]
                      return Icon ? <Icon size={28} /> : null
                    })()}
                  </div>
                  <h3 className="font-serif text-2xl text-primary font-bold mb-4">{value.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary-dark text-white py-24 md:py-40">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-6xl mb-12 text-white">Excelencia con Impacto Social</h2>
              <div className="space-y-8 text-xl text-white/70 leading-relaxed font-light">
                <p>
                  Enlace Jurídico S.A.S. nace de la necesidad de cerrar la brecha entre la justicia técnica y la realidad humana.
                  Nuestra labor trasciende el litigio tradicional; buscamos ser agentes de cambio positivo en la sociedad colombiana.
                </p>
                <p>
                  Cada proceso que lideramos es una oportunidad para reafirmar nuestro compromiso con la verdad y la integridad,
                  asegurando que cada cliente se sienta respaldado por una firma que valora su tranquilidad por encima de todo.
                </p>
              </div>
              <div className="mt-16 inline-flex items-center gap-4 px-8 py-4 rounded-full bg-accent/10 border border-accent/20">
                <Shield size={24} className="text-accent" />
                <span className="text-accent font-bold tracking-widest uppercase text-sm">Respaldo Integral Garantizado</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
