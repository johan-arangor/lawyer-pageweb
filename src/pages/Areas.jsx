import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ui/ScrollReveal'
import { services, contact } from '../data/content'
import { MapPin, Phone, Heart, Scale, Handshake, Briefcase, TrendingUp, Shield, Building2, Gavel, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import BookingButton from '../components/ui/BookingButton'

const iconMap = { Heart, Scale, Handshake, Briefcase, TrendingUp, Shield, Building2, Gavel }

export default function Areas() {
  return (
    <>
      {/* Hero Section - Matching Home Style */}
      <section
        className="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/Header_AreaWork.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/80 to-primary-dark/90" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative container-fluid py-24 px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="max-w-6xl mx-auto text-center">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-accent mb-12 text-center md:text-left"
            >
              NUESTRA EXPERTISE
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl leading-tight mb-8"
            >
              Áreas de <span className="italic text-accent">Especialización</span>
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed"
            >
              Especialización en cada rama del derecho que impacta tu vida. Un equipo de élite dedicado a proteger sus intereses en cada etapa legal.
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

      {/* Why need the Best Section */}
      <section className="bg-primary-dark text-white py-24 md:py-32 relative overflow-hidden">
        {/* Decorative subtle glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />

        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">Excelencia Jurídica</p>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                  Por qué necesita <br /> los <span className="text-accent italic">mejores</span> abogados
                </h2>
                <p className="text-white/40 text-sm uppercase tracking-widest mb-10">Atención técnica y objetividad estratégica</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-accent/30">
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    Las decisiones legales tomadas bajo presión emocional suelen ser costosas a largo plazo. Un abogado experto actúa como un filtro objetivo, diseñando una estrategia basada en la ley y no en el conflicto, lo que evita errores procesales que podrían retrasar su caso por meses o años.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-accent/30">
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    Ya sea en una liquidación de bienes o en la fijación de una cuota alimentaria, los detalles técnicos marcan la diferencia. Los mejores abogados identifican activos ocultos, valoran correctamente las propiedades y aseguran que los acuerdos financieros sean sostenibles y justos para su nueva etapa de vida.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Preparation Checklist Section */}
      <section className="bg-white py-20 md:py-32 border-t border-gray/10">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <div className="text-center mb-20">
            <ScrollReveal>
              <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">Próximos Pasos</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
                ¿Cómo prepararse para su <span className="italic text-accent">primera consulta?</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Para que nuestra primera asesoría sea lo más productiva posible, le recomendamos tener a mano la siguiente documentación básica según su caso:
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { area: 'Derecho de Familia', docs: 'Registros civiles, actas de matrimonio, pruebas de convivencia, inventario de bienes.' },
                    { area: 'Derecho Civil', docs: 'Escrituras públicas, certificados de tradición, contratos, pruebas de daños.' },
                    { area: 'Mediación', docs: 'Resumen del conflicto, acuerdos previos, identificación de las partes involucradas.' },
                    { area: 'Derecho Laboral', docs: 'Contrato de trabajo, desprendibles de nómina, comunicaciones de la empresa.' },
                    { area: 'Derecho Comercial', docs: 'Cámara de Comercio, RUT, contratos mercantiles, identificación de socios.' },
                    { area: 'Propiedad Intelectual', docs: 'Logo/Marca, descripción de la invención, comprobantes de creación.' },
                    { area: 'Derecho Administrativo', docs: 'Resoluciones, notificaciones oficiales, pruebas de la actuación.' },
                    { area: 'Derecho Penal', docs: 'Denuncias, informes periciales, citaciones, material probatorio.' }
                  ].map((item, i) => (
                    <div key={i} className="p-5 bg-slate rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-accent/10 group">
                      <h4 className="font-serif font-bold text-primary mb-2 flex items-center gap-2 text-sm md:text-base">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {item.area}
                      </h4>
                      <p className="text-text-secondary text-xs leading-relaxed group-hover:text-primary transition-colors">
                        <span className="font-medium text-accent">Clave:</span> {item.docs}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full flex flex-col justify-center">
                <div className="bg-primary-dark text-white p-10 md:p-12 rounded-[2rem] relative overflow-hidden shadow-2xl">
                  {/* Decorative background circle */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-accent/20">
                      <Shield size={32} />
                    </div>
                    <h3 className="font-serif text-3xl mb-6">Compromiso de <span className="text-accent">Confidencialidad</span></h3>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                      Entendemos la sensibilidad de su situación. Por ello, implementamos los más altos estándares de seguridad y ética profesional.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Secreto profesional amparado por ley',
                        'Encriptación de documentos digitales',
                        'Manejo reservado de identidad',
                        'Protocolos de seguridad en la nube'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate from-white via-white to-slate py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">Nuestras Competencias</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                Soluciones Jurídicas para Cada Área
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Con especialización profunda en cada rama del derecho, ofrecemos soluciones estratégicas y resultados comprobables
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon]
              return (
                <ScrollReveal key={service.id} delay={i * 0.05}>
                  <motion.div
                    className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    {/* Accent top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />

                    {/* Card Content */}
                    <div className="p-8 flex flex-col h-full">
                      {/* Icon with background */}
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                        <div className="relative bg-accent/5 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          {IconComponent && <IconComponent size={28} className="stroke-accent group-hover:stroke-white" />}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl md:text-xl lg:text-2xl text-primary font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>

                      {/* Divider */}
                      <div className="w-12 h-0.5 bg-accent/30 mb-4 group-hover:w-full transition-all duration-300" />

                      {/* Description */}
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2 mb-6 text-sm">
                        {service.features && service.features.map((feature) => (
                          <div
                            key={feature}
                            className="text-text-secondary flex items-center gap-2"
                          >
                            <span className="text-accent font-bold">•</span>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors">
                        <span>Ver detalles</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Interactive Info Overlay (Modal-style on hover) */}
                    <motion.div
                      className="absolute inset-0 bg-primary-dark/95 p-8 flex flex-col justify-center z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                    >
                      <div className="mb-6">
                        <h4 className="text-accent font-serif font-bold text-xl mb-4">¿Cuándo aplica?</h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {service.whenItApplies}
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <p className="text-accent/60 text-[10px] uppercase tracking-widest font-bold mb-2">Especialidades Incluidas</p>
                        <p className="text-white/60 text-xs italic leading-relaxed">
                          {service.technicalDetails}
                        </p>
                      </div>

                      <div className="mt-8">
                        <Link
                          to={`/contacto?area=${encodeURIComponent(service.name)}`}
                          className="btn-primary py-2 px-4 text-xs inline-block"
                        >
                          Consultar este caso
                        </Link>
                      </div>
                    </motion.div>

                    {/* Hover glow effect */}
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-20 md:py-32">
        <div className="container-fluid px-6 md:px-20 lg:px-40 xl:px-80">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">¿Cuál es su necesidad?</h2>
              <p className="text-white/70 text-lg mb-12">
                Cuéntenos sobre su caso y nuestro equipo le dará la asesoría que necesita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingButton className="btn-primary inline-block">
                  Agendar Consulta Gratuita
                </BookingButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
