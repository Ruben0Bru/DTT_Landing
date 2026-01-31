import Image from 'next/image';
import { Clock, BarChart3, MapPin } from 'lucide-react';
import { Route } from '../data/routes';

interface RouteCardProps {
  route: Route;
  onOpenModal: (route: Route) => void; // Preparamos el terreno para el Modal de detalles
}

export default function RouteCard({ route, onOpenModal }: RouteCardProps) {
  // Generamos el link de WhatsApp dinámico para cada ruta
  const whatsappMessage = `Hola, me interesa obtener más información sobre la experiencia: ${route.title}`;
  const whatsappLink = `https://wa.me/573188890437?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      
      {/* Contenedor de Imagen con efecto Zoom al hacer hover */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={route.image}
          alt={route.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge de Categoría (usando el primer tag) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green uppercase tracking-wide shadow-sm">
          {route.tags[0]}
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
          {route.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {route.description}
        </p>

        {/* Metadatos: Duración y Nivel */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-brand-yellow" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 size={16} className="text-brand-blue" />
            <span>Nivel {route.level}</span>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button 
            onClick={() => onOpenModal(route)}
            className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            Ver detalles
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-brand-green text-white font-medium hover:bg-green-700 transition-colors text-center text-sm shadow-md hover:shadow-lg"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}