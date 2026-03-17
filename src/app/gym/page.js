"use client"; 

import { motion } from "framer-motion";

export default function GymLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 absolute top-0 w-full z-10">
        <div className="text-3xl font-black tracking-tighter uppercase text-white">
          Iron<span className="text-orange-500">Forge</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-bold tracking-wide uppercase">
          <a href="#entrenamiento" className="hover:text-orange-500 transition-colors">Entrenamiento</a>
          <a href="#planes" className="hover:text-orange-500 transition-colors">Planes</a>
        </div>
        <button className="bg-orange-500 text-slate-950 px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-orange-400 transition-colors">
          Únete Hoy
        </button>
      </nav>

      <header className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gimnasio fondo" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}  className="relative z-10 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tight mb-4">
            Forja tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Mejor Versión</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-medium max-w-2xl mx-auto">
            Equipamiento premium, entrenadores de élite y acceso 24/7. No es solo un gimnasio, es tu nueva disciplina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="bg-orange-500 text-slate-950 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              Prueba Gratis
            </button>
            <button className="border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:border-orange-500 hover:text-orange-500 transition-all">
              Ver Instalaciones
            </button>
          </div>
        </motion.div>
      </header>

      <section id="entrenamiento" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Por qué elegirnos</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 transition-colors group"
          >
            <div className="text-orange-500 text-4xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-2xl font-bold mb-3 uppercase">Acceso 24/7</h3>
            <p className="text-slate-400 leading-relaxed">Entrena a tu propio ritmo, a cualquier hora. Tu tarjeta de acceso te abre las puertas los 365 días del año.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 transition-colors group"
          >
            <div className="text-orange-500 text-4xl mb-6 group-hover:scale-110 transition-transform">🏋️‍♂️</div>
            <h3 className="text-2xl font-bold mb-3 uppercase">Zona de Peso Libre</h3>
            <p className="text-slate-400 leading-relaxed">Más de 500m² dedicados exclusivamente a peso libre con discos olímpicos, mancuernas hasta 60kg y racks.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500 transition-colors group"
          >
            <div className="text-orange-500 text-4xl mb-6 group-hover:scale-110 transition-transform">🥊</div>
            <h3 className="text-2xl font-bold mb-3 uppercase">Clases Funcionales</h3>
            <p className="text-slate-400 leading-relaxed">CrossFit, Boxeo y HIIT incluidos en tu membresía. Guiados por profesionales para que rompas tus límites.</p>
          </motion.div>

        </div>
      </section>

      <section id="planes" className="py-24 px-6 md:px-12 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Membresías</h2>
            <p className="text-slate-400">Sin contratos a largo plazo. Cancela cuando quieras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col">
              <h3 className="text-2xl font-bold uppercase mb-2">Pase Estándar</h3>
              <div className="text-4xl font-black text-white mb-6">$25.000 <span className="text-lg text-slate-500 font-normal">/mes</span></div>
              <ul className="space-y-4 mb-8 text-slate-400 flex-grow">
                <li>✓ Acceso a sala de musculación</li>
                <li>✓ Horario de 06:00 a 22:00</li>
                <li>✓ Vestuarios y duchas</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold uppercase tracking-wide border-2 border-slate-700 hover:bg-slate-800 transition-colors">Seleccionar</button>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}  className="bg-gradient-to-b from-orange-500 to-orange-700 p-8 rounded-3xl flex flex-col transform md:-translate-y-4 shadow-2xl">
              <div className="bg-black text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-4">Más Elegido</div>
              <h3 className="text-2xl font-bold uppercase mb-2 text-black">Pase Iron</h3>
              <div className="text-4xl font-black text-black mb-6">$35.000 <span className="text-lg text-black/70 font-normal">/mes</span></div>
              <ul className="space-y-4 mb-8 text-black/80 font-medium flex-grow">
                <li>✓ Acceso Total 24/7</li>
                <li>✓ Todas las clases funcionales</li>
                <li>✓ Evaluación física mensual</li>
                <li>✓ Invita a un amigo 4 veces al mes</li>
              </ul>
              <button className="w-full py-4 rounded-xl font-bold uppercase tracking-wide bg-black text-white hover:bg-slate-900 transition-colors">Seleccionar</button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 text-center text-slate-500 border-t border-slate-900">
        <p className="font-bold uppercase tracking-widest text-slate-400 mb-2">IronForge Gym</p>
        <p>© 2026. Proyecto de Portfolio por Matías Cantoni.</p>
      </footer>
    </div>
  );
}