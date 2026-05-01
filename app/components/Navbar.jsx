'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-slate-950/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold tracking-widest cursor-pointer hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">&lt;</span>
            <span>ANDERS</span>
            <span className="text-cyan-400">/&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-sm font-mono transition-colors duration-300 cursor-pointer ${
                  isActive(item.href)
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/95 border-t border-cyan-500/20 px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-mono transition-colors cursor-pointer ${
                  isActive(item.href)
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
