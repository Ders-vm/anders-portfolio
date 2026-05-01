<div className="grid md:grid-cols-4 gap-6">
  
  {/* GitHub */}
  <motion.a
    href="https://github.com/Ders-vm"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
    className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300"
  >
    <Github size={40} className="mx-auto mb-4 text-cyan-400" />
    <h3 className="text-lg font-bold mb-2">GitHub</h3>
    <p className="text-sm text-slate-400">github.com/Ders-vm</p>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://www.linkedin.com/in/anders-von-mirbach-2909a0272"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
    className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300"
  >
    <Linkedin size={40} className="mx-auto mb-4 text-cyan-400" />
    <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
    <p className="text-sm text-slate-400">Connect professionally</p>
  </motion.a>

  {/* Email */}
  <motion.a
    href="mailto:anders.von.93@gmail.com"
    whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
    className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300"
  >
    <Mail size={40} className="mx-auto mb-4 text-cyan-400" />
    <h3 className="text-lg font-bold mb-2">Email</h3>
    <p className="text-sm text-slate-400">anders.von.93@gmail.com</p>
  </motion.a>

  {/* Resume */}
  <motion.a
    href="/resume/anders-von-mirbach-resume.pdf"
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
    className="p-6 border border-slate-700/50 rounded-lg bg-slate-900/50 text-center transition-all duration-300"
  >
    <span className="text-4xl block mb-4 text-cyan-400">📄</span>
    <h3 className="text-lg font-bold mb-2">Resume</h3>
    <p className="text-sm text-slate-400">View / Download PDF</p>
  </motion.a>

</div>