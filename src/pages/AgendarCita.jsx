import { useState } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { contact, services } from '../data/content'

export default function AgendarCita() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Cita solicitada para ${formData.date} a las ${formData.time}. Nos pondremos en contacto pronto.`)
    setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container-fluid text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Agendar Cita</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Primera consulta gratuita. Elige la fecha y hora que mejor te convenga
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-fluid">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selecciona un área de práctica</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Cuéntenos brevemente sobre su caso..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />

                <button type="submit" className="btn-primary w-full">
                  Confirmar Cita
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="bg-slate py-20 md:py-32">
        <div className="container-fluid">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl">
              <h2 className="font-serif text-3xl text-primary font-bold mb-6">Información importante</h2>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>La primera consulta es completamente gratuita</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Duración estimada: 30 minutos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Puedes elegir entre cita presencial o virtual</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Trae tu documentación relevante del caso</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-accent-pale rounded-2xl">
                <p className="text-text-secondary">
                  <strong>¿Prefieres llamar directamente?</strong><br />
                  <a href={`tel:${contact.phoneRaw}`} className="text-accent hover:underline">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
