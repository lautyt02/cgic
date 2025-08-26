import { useState, useEffect } from 'react';

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'info', label: 'Información' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'aliados', label: 'Aliados' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(sec.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <span className="font-bold">CGIC</span>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          ☰
        </button>
        <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'} md:block`}>
          {sections.map(sec => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`block py-2 px-3 ${active === sec.id ? 'text-blue-600' : ''}`}
                onClick={() => setOpen(false)}
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
