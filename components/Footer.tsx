import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Marca */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Destinos <span className="text-brand-blue">Tierralta</span> <span className="text-brand-yellow">Travel</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Turismo de naturaleza, comunitario y cultural en el corazón del Alto Sinú.
            </p>
          </div>

          {/* Contacto Rápido [cite: 105] */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a href="https://wa.me/573188890437" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Phone size={18} />
              <span>+57 318 889 0437</span>
            </a>
            <a href="mailto:destinotierralta26@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={18} />
              <span>destinotierralta26@gmail.com</span>
            </a>
            {/* Si tienen Instagram, iría aquí */}
            <a href="https://www.instagram.com/destinotierraltatravel/" about='_blank' className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Instagram size={18} />
              <span>@destinotierralta</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Destino Tierralta Travel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}