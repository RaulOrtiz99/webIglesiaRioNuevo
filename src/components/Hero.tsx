import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

interface HeroSeccion {
  nombreIglesia: string;
  descripcion: string;
  imagenUrl: string;
  urlUltimaPredica?: string;
}

const Hero = () => {
  const [data, setData] = useState<HeroSeccion | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch("https://portal.iglesiarionuevo.com/api/hero-seccions");
        const json = await res.json();

        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          const heroData = json.data[0];

          console.log("📦 Datos completos del hero:", heroData);
          console.log("🔗 URL de la prédica:", heroData.urlUltimaPredica);

          const mappedData: HeroSeccion = {
            nombreIglesia: heroData.titulo || "Rio Nuevo",
            descripcion: heroData.descripcion || "Una iglesia comprometida con la palabra de Dios",
            imagenUrl: heroData.imagenUrl || "",
            // 🔥 CORECCIÓN: Incluir la URL de la prédica desde la API
            urlUltimaPredica: heroData.urlUltimaPredica?.trim() || undefined
          };

          console.log("🗺️ Datos mapeados:", mappedData);
          console.log("🔗 URL final mapeada:", mappedData.urlUltimaPredica);
          
          setData(mappedData);
        } else {
          console.warn("⚠️ No hay registros en hero-seccions.");
          // Datos de fallback para desarrollo
          setData({
            nombreIglesia: "Rio Nuevo",
            descripcion: "Una iglesia comprometida con la palabra de Dios",
            imagenUrl: "https://images.pexels.com/photos/32588447/pexels-photo-32588447.jpeg",
            urlUltimaPredica: undefined
          });
        }
      } catch (error) {
        console.error("❌ Error al obtener datos:", error);
        // Datos de fallback en caso de error
        setData({
          nombreIglesia: "Rio Nuevo",
          descripcion: "Una iglesia comprometida con la palabra de Dios",
          imagenUrl: "https://images.pexels.com/photos/32588447/pexels-photo-32588447.jpeg",
          urlUltimaPredica: undefined
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();

    // Animación
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // Función para validar si la URL es válida
  const isValidUrl = (url?: string): boolean => {
    console.log("🔍 Validando URL:", url);
    
    if (!url || url.length === 0) {
      console.log("❌ URL vacía o undefined");
      return false;
    }
    
    try {
      const urlObj = new URL(url);
      const isYouTube = urlObj.hostname.includes('youtube.com') || urlObj.hostname.includes('youtu.be');
      console.log("🔍 Hostname:", urlObj.hostname);
      console.log("🔍 Es YouTube:", isYouTube);
      return isYouTube;
    } catch (error) {
      console.log("❌ Error al parsear URL:", error);
      return false;
    }
  };

  // Función para manejar el click del botón
  const handleYouTubeClick = (url: string) => {
    console.log("🎯 Intentando abrir URL:", url);
    console.log("🔍 URL es válida:", isValidUrl(url));
    
    if (isValidUrl(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.error("❌ URL no válida:", url);
      alert("La URL de YouTube no es válida");
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-xl text-white">Cargando...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <p className="text-xl mb-4">No se encontraron datos.</p>
          <p>Asegúrate de que haya un registro en "Hero Sección".</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${data.imagenUrl})`,
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-0" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Bienvenidos a{" "}
            <span className="text-celestial-400">{data.nombreIglesia}</span>
          </h1>

          <p
            className={`text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {data.descripcion}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Botón de YouTube - Solo se muestra si hay URL válida */}
            {data.urlUltimaPredica && isValidUrl(data.urlUltimaPredica) ? (
              <button
                onClick={() => handleYouTubeClick(data.urlUltimaPredica!)}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaYoutube className="text-xl" />
                Ver Última Prédica
              </button>
            ) : (
              // Mensaje cuando no hay URL disponible
              <div className="bg-gray-600/50 border border-gray-500 text-gray-300 font-medium py-3 px-4 sm:px-6 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto">
                <FaYoutube className="text-xl opacity-50" />
                <span>Prédica próximamente</span>
              </div>
            )}

            <Link
              to="/grupos-crecimiento"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto hover:shadow-lg transform hover:scale-105"
            >
              Encuentra tu Grupo <ArrowRight size={18} />
            </Link>
          </div>

          {/* Debug info - solo en desarrollo
          {(import.meta.env.MODE === 'development') && data.urlUltimaPredica && (
            <div className="mt-4 text-xs text-gray-400 bg-black/20 p-2 rounded">
              <strong>Debug:</strong> URL: {data.urlUltimaPredica} | Válida: {isValidUrl(data.urlUltimaPredica) ? '✅' : '❌'}
            </div>
          )} */}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-20 w-full text-white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,
            72,985.66,92.83c70.05,18.48,146.53,26.09,
            214.34,3V120H0V0C0,0,0,34,0,48C0,65.52,0,78.45,
            0,90.79a135.81,135.81,0,0,0,41.8,
            10.61c35,6.5,68.66,1.79,101.18-7.72C191.47,82.38,
            246.35,63.2,321.39,56.44Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;