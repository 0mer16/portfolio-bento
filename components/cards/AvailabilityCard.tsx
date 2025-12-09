'use client'

import { motion } from 'framer-motion'
import BentoCard from '../BentoCard'

export default function AvailabilityCard() {
  return (
    <BentoCard span="1x1" className="flex flex-col items-center justify-center relative overflow-hidden group">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {/* Animated pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Main dot */}
        <div className="w-3 h-3 bg-green-500 rounded-full relative z-10" />
      </motion.div>
      
      <motion.p
        className="text-sm font-medium mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Available for Work
      </motion.p>
      
      <motion.p
        className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 5 }}
      >
        Let's build something
      </motion.p>
    </BentoCard>
  )
}
