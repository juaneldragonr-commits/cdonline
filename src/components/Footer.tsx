export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-black py-10 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} David Riaño. Bogotá, Colombia.
      </p>
    </footer>
  );
}