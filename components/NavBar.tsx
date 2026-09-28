"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' // Estado Scrolled (Compacto y Blanco)
          : 'bg-transparent py-6' // Estado Top (Transparente y Espacioso)
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
<Link href="/" className="flex items-center gap-2 group">
  <div className={`relative transition-all duration-300 bg-white rounded-full overflow-hidden flex items-center justify-center ${
    scrolled 
      ? 'w-12 h-12 shadow-md'  
      : 'w-20 h-20 shadow-xl'  
  }`}>
    <Image 
      src="/logo.jpg"
      alt="Destino Tierralta Logo"
      fill
      className="object-contain p-1.5"
      priority
    />
  </div>
  {/* <span className={`font-bold text-lg tracking-tight transition-opacity duration-300 ${
    scrolled ? 'text-gray-800 opacity-100' : 'text-white opacity-0 hidden md:block'
  }`}>
    Destino Tierralta
  </span> 
  */}
</Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Los enlaces cambian de color: Blanco en el Hero, Gris al bajar */}
            {['Inicio', 'Rutas', 'Nosotros'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`font-medium transition-colors hover:text-brand-yellow ${
                  scrolled ? 'text-gray-700' : 'text-white text-shadow-sm'
                }`}
              >
                {item}
              </Link>
            ))}
            
            <a 
              href="https://wa.me/573188890437"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                scrolled 
                  ? 'bg-brand-green text-white hover:bg-green-800' 
                  : 'bg-white text-brand-green hover:bg-gray-100'
              }`}
            >
              Reservar ahora
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable (Siempre fondo blanco para legibilidad) */}
      <div className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out origin-top ${
        isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {['Inicio', 'Rutas', 'Nosotros'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md hover:text-brand-green" 
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a 
            href="https://wa.me/573188890437"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-brand-green text-white px-3 py-3 rounded-lg font-bold"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}