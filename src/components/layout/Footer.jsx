import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { siteMeta, contact, social, services, navigation } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="container-fluid py-16 md:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Column 1: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-6">
            <img src="/logo/Logo_Transparente.png" alt="Enlace Jurídico" className="h-10 w-auto" />
              <div>
                <p className="font-serif font-bold text-white text-sm">{siteMeta.brand}</p>
                <p className="text-xs text-accent">{siteMeta.tagline}</p>
              </div>
            </div>
            <p className="text-sm italic text-white/60 mb-6">{siteMeta.motto}</p>
            <p className="text-sm text-white/60 leading-relaxed mb-8">{siteMeta.description}</p>

            {/* Social Icons */}
            <div className="flex gap-4" aria-label="Redes sociales">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contacto */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-white/60">{contact.address}</p>
              </li>
              <li>
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                <p className="text-white/60">{contact.hours}</p>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to="/areas" className="hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Empresa */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/nosotros" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="hover:text-accent transition-colors">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50">{siteMeta.copyright}</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="text-xs hover:text-accent transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-xs hover:text-accent transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-xs hover:text-accent transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
