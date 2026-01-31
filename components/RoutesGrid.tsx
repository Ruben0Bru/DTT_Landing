"use client";

import { useState } from 'react';
import { routes, Route } from '../data/routes';
import RouteCard from './RouteCard';
import RouteModal from './RouteModal'; // <--- Importamos el nuevo modal
import { Map } from 'lucide-react';

export default function RoutesGrid() {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  return (
    <section id="rutas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-brand-blue font-bold uppercase tracking-wider text-sm">
            <Map size={18} />
            <span>Nuestras Experiencias</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Descubre el corazón del <span className="text-brand-green">Alto Sinú</span>
          </h2>
          <p className="text-lg text-gray-600">
            Desde descensos en kayak hasta rutas ancestrales. Elige tu próxima aventura.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <RouteCard 
              key={route.id} 
              route={route} 
              onOpenModal={(r) => setSelectedRoute(r)} 
            />
          ))}
        </div>

        {/* Modal Lógico */}
        {selectedRoute && (
          <RouteModal 
            route={selectedRoute} 
            onClose={() => setSelectedRoute(null)} 
          />
        )}

      </div>
    </section>
  );
}