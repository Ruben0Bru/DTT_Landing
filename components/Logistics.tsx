import { Briefcase, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Logistics() {
  // NOTA: Usamos id="nosotros" para que el enlace del Navbar funcione
  return (
    <section id="nosotros" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Información Útil para tu Viaje
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prepárate para vivir la experiencia Destino Tierralta sin contratiempos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Qué empacar */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-brand-yellow/20 text-brand-yellow rounded-xl flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué empacar?</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                <span>Zapatos cerrados y cómodos (agarre).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                <span>Ropa ligera de secado rápido.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                <span>Gorra, gafas, bloqueador y repelente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                <span>Termo personal para agua.</span>
              </li>
            </ul>
          </div>

          {/* Columna 2: Cómo llegar */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-brand-blue/20 text-brand-blue rounded-xl flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">¿Cómo llegar?</h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <strong className="block text-gray-900 mb-1">Vía Aérea</strong>
                <p>Vuelos a Montería (Aeropuerto Los Garzones) desde Bogotá o Medellín.</p>
              </div>
              <div>
                <strong className="block text-gray-900 mb-1">Vía Terrestre</strong>
                <p>Bus directo desde la Terminal de Montería hacia Tierralta (aprox. 1h 30m).</p>
              </div>
            </div>
          </div>

          {/* Columna 3: Políticas */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reservas y Cambios</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Cancelación 3 días antes:</span>
                <span className="font-bold text-gray-900">Devolución 80%</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-2">
                <span>Cancelación 1 día antes:</span>
                <span className="font-bold text-gray-900">Cobro 60%</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Mismo día:</span>
                <span className="font-bold text-red-600">No reembolsable</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}