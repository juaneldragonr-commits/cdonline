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
              David Riaño
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Frontend Developer & Software Engineer 
            </p>
            
          </section>

          {/* Quick Stats / Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-500">25+</h3>
              <p className="text-sm text-slate-400">Technical Certifications </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-blue-500">3+</h3>
              <p className="text-sm text-slate-400">Languages (ES, EN, PT)</p>
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
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Proyecto 1: CDOnline */}
              <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-transparent">
                <div className="p-6 rounded-[calc(1rem-1px)] bg-black h-full flex flex-col">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Case Study</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">Portfolio CDOnline</h3>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                    Modern architecture with Next.js and Tailwind for a high-impact personal brand.
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
                    E-commerce platform with shopping cart, inventory management and payments.
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
                    Booking system and interactive menu optimized for mobile devices.
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
                  Professional Career
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Software Engineer passionate about the intersection of visual design and code efficiency. My focus is on building web applications that not only look good but also deliver an exceptional user experience.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                    <div className="text-blue-500">🎓</div>
                    <div>
                      <h4 className="font-bold text-sm">Academic Training </h4>
                      <p className="text-xs text-slate-500">Software Engineering & Frontend Specialization</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800">
                    <div className="text-blue-500">🌎</div>
                    <div>
                      <h4 className="font-bold text-sm">Multilingual Profile</h4>
                      <p className="text-xs text-slate-500">Spanish, English, Portuguese (Studying Mandarin)</p>
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
                  <h4 className="text-emerald-400 font-mono text-xs mb-2 underline">Tools</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• Git / GitHub</li>
                    <li>• Figma</li>
                    <li>• Node.js</li>
                  </ul>
                </div>
                <div className="col-span-2 p-6 rounded-2xl bg-blue-600/5 border border-blue-500/20">
                  <h4 className="text-white font-bold text-sm mb-2">Work Philosophy</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    "Clean code, constant learning and attention to detail. I seek to provide technical value in projects that challenge my limits."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-20 border-t border-slate-900">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Do you have a project in mind?</h2>
              <p className="text-slate-400 mb-10">
                I'm currently open to new opportunities and collaborations.
                If you're looking for a developer with a focus on engineering and detail, let's talk.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
               <a href="mailto:juaneldragonr@gmail.com" 
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 text-center">
                Send Email
               </a>
               <a href="https://www.linkedin.com/in/david-ria%C3%B1o-420944352/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-4 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all duration-300 text-center" >
                 LinkedIn
               </a>
                <a href="https://github.com/juaneldragonr-commits" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-8 py-4 border border-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-all duration-300 text-center" >
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