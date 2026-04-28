import { useState } from 'react'
import { Scale, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { contact } from '../../data/content'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      // Aquí iría la integración con tu bot
      // Por ahora, redirige a WhatsApp
      window.open(`https://wa.me/${contact.phoneRaw.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent-light text-primary-dark rounded-full p-4 shadow-lg z-40 transition-colors"
        aria-label="Abrir chat"
      >
        {isOpen ? <X size={24} /> : <Scale size={24} />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 bg-white rounded-3xl shadow-2xl w-80 max-h-96 flex flex-col z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
              <h3 className="font-serif font-bold text-lg mb-1 text-accent">¿Necesita ayuda?</h3>
              <p className="text-sm text-white/80">Escriba su mensaje y nos pondremos en contacto</p>
            </div>

            {/* Messages Area */}
            <div className="flex-grow bg-slate p-4 overflow-y-auto flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-4 shadow-sm max-w-xs"
              >
                <p className="text-sm text-text">
                  Hola 👋 Soy el asistente de Enlace Jurídico. ¿En qué puedo ayudarte?
                </p>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray p-4 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-grow bg-gray rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-accent hover:bg-accent-light disabled:bg-gray disabled:text-text-muted text-primary-dark rounded-full p-2 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
