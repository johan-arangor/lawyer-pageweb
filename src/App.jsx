import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
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
import AreaPrivada from './pages/AreaPrivada'

export default function App() {
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
            <Route path="/portal" element={<AreaPrivada />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  )
}
