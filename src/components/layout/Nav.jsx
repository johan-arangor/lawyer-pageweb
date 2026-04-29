import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, User as UserIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigation, contact, heroContent } from '../../data/content'
import { useAuth } from '../../context/AuthContext'
import BookingButton from '../ui/BookingButton'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthOpen, closeAuth, authMode, openAuth } = useAuth()
  const navigate = useNavigate()

  const menuVariants = {
    closed: { x: '-100%', opacity: 0 },
    open: { x: 0, opacity: 1 },
  }

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-200">
      <div className="container-fluid">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo/Logo_Transparente.png" alt="Enlace Jurídico" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-sm font-serif font-bold text-white/80">Enlace Jurídico</p>
              <p className="text-xs text-accent">Firma Legal de Élite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {item.path === '/agendar' ? (
                  <BookingButton
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors relative pb-1 ${isActive ? 'text-accent' : 'text-white/70 hover:text-accent'
                      }`
                    }
                  >
                    {item.label}
                  </BookingButton>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors relative pb-1 ${isActive ? 'text-accent' : 'text-white/70 hover:text-accent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full shadow-lg shadow-accent/60"
                            transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <BookingButton className="btn-primary flex-1 text-center">
              Agendar Cita
            </BookingButton>
            {user ? (
              <Link to="/mi-espacio" className="btn-secondary flex items-center gap-2">
                <UserIcon size={18} /> Mi Espacio
              </Link>
            ) : (
              <button onClick={() => openAuth('login')} className="btn-secondary">
                {heroContent.portalText}
              </button>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-accent transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="fixed left-0 top-20 w-full h-screen bg-white lg:hidden flex flex-col"
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 flex flex-col gap-6 flex-grow">
            {navigation.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.path === '/agendar' ? (
                  <BookingButton
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold transition-all relative pl-8 block py-2 text-primary/60 hover:text-accent"
                  >
                    {item.label}
                  </BookingButton>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-bold transition-all relative pl-8 block py-2 ${isActive ? 'text-accent' : 'text-primary/60 hover:text-accent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute left-0 top-1/2 w-1 h-6 -translate-y-1/2 bg-gradient-to-b from-accent/50 via-accent to-accent/50 rounded-r-full shadow-lg shadow-accent/60"
                            transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )}
              </motion.div>
            ))}

            <div className="flex flex-col gap-3 mt-auto pb-6">
              <BookingButton onClick={() => setIsOpen(false)} className="btn-primary text-center">
                Agendar Cita
              </BookingButton>
              {user ? (
                <Link to="/mi-espacio" onClick={() => setIsOpen(false)} className="btn-secondary text-center">
                  Mi Espacio
                </Link>
              ) : (
                <button onClick={() => { openAuth('login'); setIsOpen(false); }} className="btn-secondary text-center">
                  Iniciar Sesión
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}