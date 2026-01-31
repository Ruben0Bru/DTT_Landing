import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import RoutesGrid from '../components/RoutesGrid';
import Logistics from '../components/Logistics'; // <--- Importamos Logística
import Footer from '../components/Footer';       // <--- Importamos Footer

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* 1. Navegación */}
      <Navbar />
      
      {/* 2. Portada (Hero) */}
      <Hero />
      
      {/* 3. Catálogo de Rutas */}
      <RoutesGrid />

      {/* 4. Información Logística (Antes era el texto gris) */}
      <Logistics />

      {/* 5. Pie de Página */}
      <Footer />
      
    </main>
  );
}