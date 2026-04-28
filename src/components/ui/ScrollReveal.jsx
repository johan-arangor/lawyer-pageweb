import { motion } from 'framer-motion'

export default function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
