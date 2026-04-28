import { useState } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Lock } from 'lucide-react'

export default function AreaPrivada() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleLogin = (e) => {
    e.preventDefault()
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCredentials({ email: '', password: '' })
  }

  return (
    <>
      {isLoggedIn ? (
        <PortalDashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} credentials={credentials} setCredentials={setCredentials} />
      )}
    </>
  )
}

function LoginPage({ onLogin, credentials, setCredentials }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark text-white py-16 md:py-24">
        <div className="container-fluid text-center">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Área Privada</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Accede a tu portal de cliente para monitorear tu caso
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Login Form */}
      <section className="bg-white min-h-[calc(100vh-200px)] flex items-center py-20">
        <div className="container-fluid">
          <div className="max-w-md mx-auto">
            <ScrollReveal>
              <div className="bg-slate p-8 rounded-3xl shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="bg-accent rounded-full p-4 text-white">
                    <Lock size={32} />
                  </div>
                </div>

                <h2 className="font-serif text-3xl text-primary font-bold text-center mb-8">Iniciar Sesión</h2>

                <form onSubmit={onLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      value={credentials.email}
                      onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Contraseña</label>
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      placeholder="••••••••"
                      required
                      className="w-full px-6 py-3 border border-gray rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Iniciar Sesión
                  </button>
                </form>

                <p className="text-center text-text-secondary text-sm mt-6">
                  ¿No tienes acceso? <a href="/contacto" className="text-accent hover:underline">Contacta con nosotros</a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

function PortalDashboard({ onLogout }) {
  const [cases] = useState([
    {
      id: 'EJ-2024-001',
      title: 'Caso de Divorcio',
      status: 'En Proceso',
      date: '15 de Enero, 2024',
      progress: 65,
    },
    {
      id: 'EJ-2024-002',
      title: 'Contrato Comercial',
      status: 'En Revisión',
      date: '8 de Febrero, 2024',
      progress: 40,
    },
    {
      id: 'EJ-2024-003',
      title: 'Mediación Laboral',
      status: 'Completado',
      date: '20 de Diciembre, 2023',
      progress: 100,
    },
  ])

  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-8 px-6">
        <div className="container-fluid flex justify-between items-center">
          <h1 className="font-serif text-3xl">Mi Portal</h1>
          <button onClick={onLogout} className="btn-secondary">
            Cerrar Sesión
          </button>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-slate min-h-[calc(100vh-200px)] py-12">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-text-secondary text-sm">Casos Activos</p>
              <p className="font-serif text-4xl text-accent font-bold">{cases.filter(c => c.status !== 'Completado').length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-text-secondary text-sm">Casos Completados</p>
              <p className="font-serif text-4xl text-accent font-bold">{cases.filter(c => c.status === 'Completado').length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-text-secondary text-sm">Progreso General</p>
              <p className="font-serif text-4xl text-accent font-bold">68%</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow">
            <h2 className="font-serif text-3xl text-primary font-bold mb-8">Mis Casos</h2>

            <div className="space-y-6">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="border-b border-gray pb-6 last:border-b-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium text-text-secondary text-sm">{caseItem.id}</p>
                      <h3 className="font-serif text-2xl text-primary font-bold">{caseItem.title}</h3>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      caseItem.status === 'Completado'
                        ? 'bg-green-100 text-green-700'
                        : caseItem.status === 'En Proceso'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm mb-4">{caseItem.date}</p>

                  <div className="w-full bg-gray rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${caseItem.progress}%` }}
                    />
                  </div>
                  <p className="text-text-secondary text-xs mt-2">{caseItem.progress}% completado</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
