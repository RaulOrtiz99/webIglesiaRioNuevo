import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

// Tipado para el contenido editable desde Strapi
interface HeroSeccion {
  nombreIglesia: string;
  descripcion: string;
  imagenUrl: string;
}

const Hero = () => {
  const [data, setData] = useState<HeroSeccion | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar datos desde Strapi
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/hero-seccions");
        const json = await res.json();

        console.log("Respuesta de Strapi:", json); // Para debugging

        // Verificar estructura de la respuesta
        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          // Los campos están directamente en el objeto, no en attributes
          const heroData = json.data[0];
          setData({
            nombreIglesia: heroData.titulo, // Usamos el campo titulo como nombre de la iglesia
            descripcion: heroData.descripcion,
            imagenUrl: heroData.imagenUrl,
          });
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();

    // Pequeño delay para la animación
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Si hay error o no hay datos, mostrar mensaje
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">No se encontraron datos en Strapi.</p>
          <p>Asegúrate de tener un registro en "Hero Sección".</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${data.imagenUrl})`,
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Bienvenidos a{" "}
            <span className="text-celestial-400">{data.nombreIglesia}</span>
          </h1>
          <p
            className={`text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {data.descripcion}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              to="/servicios"
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaYoutube className="text-xl" />
              Última predica
            </Link>
            <Link
              to="/grupos-crecimiento"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Encuentra tu Grupo <ArrowRight size={18} className="ml-0 sm:ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-20 w-full text-white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,34,0,48C0,65.52,0,78.45,0,90.79a135.81,135.81,0,0,0,41.8,10.61c35,6.5,68.66,1.79,101.18-7.72C191.47,82.38,246.35,63.2,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;