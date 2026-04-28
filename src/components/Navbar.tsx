import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          DR
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About me
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}