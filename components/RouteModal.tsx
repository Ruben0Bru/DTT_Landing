"use client";

import Image from 'next/image';
import { X, Clock, BarChart3 } from 'lucide-react';
import { Route } from '../data/routes';
import { useEffect } from 'react';

interface RouteModalProps {
  route: Route;
  onClose: () => void;
}

export default function RouteModal({ route, onClose }: RouteModalProps) {
  useEffect(() => {
    // Bloquear scroll del body al abrir el modal
    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      // Restaurar scroll al cerrar el modal
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const whatsappLink = `https://wa.me/573188890437?text=${encodeURIComponent(`Hola, me interesa la experiencia: ${route.title}`)}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 shrink-0">
          <Image src={route.image} alt={route.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <span className="bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase">{route.tags[0]}</span>
            <h3 className="text-2xl font-bold leading-tight">{route.title}</h3>
          </div>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="flex gap-6 mb-6 text-sm text-gray-600 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-brand-yellow" />
              <span>{route.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-brand-blue" />
              <span>Nivel {route.level}</span>
            </div>
          </div>
          <div className="prose prose-sm text-gray-600 mb-8">
            <p className="text-lg leading-relaxed">{route.fullDescription}</p>
          </div>
          <div className="flex gap-3 mt-auto pt-2">
            <button onClick={onClose} className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
              Cerrar
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 rounded-xl bg-brand-green text-white font-bold hover:bg-green-800 transition-colors text-center shadow-lg shadow-brand-green/20">
              Reservar Cupo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}