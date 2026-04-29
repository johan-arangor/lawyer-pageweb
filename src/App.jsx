import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider, useAuth } from './context/AuthContext'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import AuthModals from './components/common/AuthModals'
import ChatBot from './components/ui/ChatBot'
import ScrollToTop from './components/ui/ScrollToTop'

// Pages
import Home from './pages/Home'
import Areas from './pages/Areas'
import Equipo from './pages/Equipo'
import Nosotros from './pages/Nosotros'
import FAQ from './pages/FAQ'
import Contacto from './pages/Contacto'
import AgendarCita from './pages/AgendarCita'
import MiEspacio from './pages/MiEspacio'
import ConfirmarCuenta from './pages/ConfirmarCuenta'

function AppContent() {
  const { isAuthOpen, closeAuth, authMode } = useAuth()

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/agendar" element={<AgendarCita />} />
            <Route path="/mi-espacio" element={<MiEspacio />} />
            <Route path="/confirmar-cuenta" element={<ConfirmarCuenta />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>

      <AnimatePresence>
        {isAuthOpen && (
          <AuthModals isOpen={isAuthOpen} onClose={closeAuth} initialMode={authMode} />
        )}
      </AnimatePresence>
    </Router>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
