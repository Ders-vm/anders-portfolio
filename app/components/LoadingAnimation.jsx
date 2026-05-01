'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45 }}
        >
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(0,255,150,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(0,255,150,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <motion.div
            className="relative z-10 text-center font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-cyan-400 text-lg md:text-2xl mb-3">
              &gt; initializing profile...
            </p>

            <motion.p
              className="text-slate-400 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.25 }}
            >
              loading projects... done
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}