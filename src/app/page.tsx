import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-400 to-slate-600 bg-clip-text text-transparent">
              Juan David Riaño
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Frontend Developer & Software Engineering Student. 
              Especializado en crear interfaces modernas, funcionales y multilingües.
            </p>
          </section>

          {/* Quick Stats / Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-500">25+</h3>
              <p className="text-sm text-slate-400">Certificaciones en Platzi</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-500">3+</h3>
              <p className="text-sm text-slate-400">Idiomas (ES, EN, PT)</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-500">Frontend</h3>
              <p className="text-sm text-slate-400">Next.js, React & Tailwind</p>
            </div>
          </div>
        </div>


     {/* Projects Section */}
          <section id="proyectos" className="py-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-blue-500"></span>
              Proyectos Destacados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Proyecto 1: CDOnline */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
                <div className="p-6 rounded-[calc(1rem-1px)] bg-black h-full flex flex-col">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Case Study</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">Portafolio CDOnline</h3>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                    Arquitectura moderna con Next.js y Tailwind para una marca personal de alto impacto.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">Next.js</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Proyecto 2: E-commerce */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
                <div className="p-6 rounded-[calc(1rem-1px)] bg-black h-full flex flex-col">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Full Stack</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-emerald-400 transition-colors">Digital Store</h3>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                    Plataforma de comercio electrónico con carrito de compras, gestión de inventario y pagos.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">React</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">API Rest</span>
                  </div>
                </div>
              </div>

              {/* Proyecto 3: Restaurante */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
                <div className="p-6 rounded-[calc(1rem-1px)] bg-black h-full flex flex-col">
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">UX/UI Design</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-orange-400 transition-colors">Gourmet App</h3>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                    Sistema de reservas y menú interactivo optimizado para dispositivos móviles.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">Tailwind</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">Framer Motion</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

        {/* About Section */}
          <section id="sobre-mi" className="py-20 border-t border-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-blue-500"></span>
                  Trayectoria Profesional
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Estudiante de Ingeniería de Software apasionado por la intersección entre el diseño visual y la eficiencia del código. Mi enfoque se centra en construir aplicaciones web que no solo se vean bien, sino que ofrezcan una experiencia de usuario excepcional.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                    <div className="text-blue-500">🎓</div>
                    <div>
                      <h4 className="font-bold text-sm">Formación Académica</h4>
                      <p className="text-xs text-slate-500">Ingeniería de Software & Frontend Specialization</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                    <div className="text-blue-500">🌎</div>
                    <div>
                      <h4 className="font-bold text-sm">Perfil Multilingüe</h4>
                      <p className="text-xs text-slate-500">Español, Inglés, Portugués (Estudiando Italiano)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-800">
                  <h4 className="text-blue-400 font-mono text-xs mb-2 underline">Frontend</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• React / Next.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-slate-800">
                  <h4 className="text-emerald-400 font-mono text-xs mb-2 underline">Herramientas</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• Git / GitHub</li>
                    <li>• Figma</li>
                    <li>• Node.js</li>
                  </ul>
                </div>
                <div className="col-span-2 p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20">
                  <h4 className="text-white font-bold text-sm mb-2">Filosofía de Trabajo</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    "Código limpio, aprendizaje constante y atención al detalle. Busco aportar valor técnico en proyectos que desafíen mis límites."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-20 border-t border-slate-900">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
              <p className="text-slate-400 mb-10">
                Actualmente estoy abierto a nuevas oportunidades y colaboraciones. 
                Si buscas un desarrollador con enfoque en ingeniería y detalle, hablemos.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="mailto:tu-correo@ejemplo.com" 
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Enviar Correo
                </a>
                <a 
                  href="https://linkedin.com/in/tu-perfil" 
                  target="_blank"
                  className="px-8 py-4 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/tu-usuario" 
                  target="_blank"
                  className="px-8 py-4 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

      </main>
 <Footer />
</>
);
}