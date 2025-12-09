'use client'

import { motion } from 'framer-motion'
import BentoCard from './BentoCard'

export default function HeroCard() {
  return (
    <BentoCard span="2x2" className="flex flex-col justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, var(--accent-main) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, var(--accent-playful) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, var(--accent-main) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, var(--accent-main) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold mb-4 relative z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Full-Stack
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-main)] to-[var(--accent-playful)]">
            Developer
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting high-performance web experiences
        </motion.p>
      </motion.div>
    </BentoCard>
  )
}
