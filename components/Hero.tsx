import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO (Usando Next/Image en lugar de CSS) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_image.jpeg"
          alt="Paisaje Río Sinú"
          fill // Esto hace que ocupe todo el div padre
          priority // Carga prioritaria para el LCP (Largest Contentful Paint)
          className="object-cover" // Equivale a background-size: cover
          quality={90}
        />
        {/* Overlay oscuro para que el texto resalte (Gradiente) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* 2. CONTENIDO (Texto y Botones) */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
        
        <div className="space-y-4 animate-fade-in-up">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow text-brand-dark font-bold text-sm tracking-wide uppercase mb-2">
            Turismo Comunitario y de Aventura
          </span>
           */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Tierralta: <span className="text-brand-blue">Naturaleza</span>, <br/>
            <span className='text-brand-green'>Aventura</span> y <span className="text-brand-yellow">Territorio Vivo</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light drop-shadow-md">
            Experiencias reales en el corazón verde del Alto Sinú.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="#rutas"
            className="px-8 py-4 bg-brand-green hover:bg-green-700 text-white rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-brand-green/30"
          >
            Ver Experiencias
          </a>
          <a 
            href="https://wa.me/573188890437"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold text-lg transition-all"
          >
            Solicitar Portafolio
          </a>
        </div>

      </div>

      {/* Flecha de Scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}