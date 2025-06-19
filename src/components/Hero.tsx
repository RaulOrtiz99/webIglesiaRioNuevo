import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

interface HeroSeccion {
  nombreIglesia: string;
  descripcion: string;
  imagenUrl: string;
  urlUltimaPredica: string;
}

const Hero = () => {
  const [data, setData] = useState<HeroSeccion | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/hero-seccions");
        const json = await res.json();

        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          const heroData = json.data[0];

          // 🔍 DEBUG: Verificar los datos que llegan
          console.log("📦 Datos completos del hero:", heroData);
          console.log("🔗 URL de la prédica:", heroData.urlUltimaPredica);
          console.log("🔗 Tipo de URL:", typeof heroData.urlUltimaPredica);
          console.log("🔗 Longitud URL:", heroData.urlUltimaPredica?.length);
          console.log("🔗 URL limpia:", heroData.urlUltimaPredica?.trim());

          const mappedData = {
            nombreIglesia: heroData.titulo,
            descripcion: heroData.descripcion,
            imagenUrl: heroData.imagenUrl,
            urlUltimaPredica: heroData.urlUltimaPredica?.trim() || "",
          };

          console.log("🗺️ Datos mapeados:", mappedData);
          setData(mappedData);

          console.log("✅ Datos del hero:", heroData);
        } else {
          console.warn("⚠️ No hay registros en hero-seccions.");
        }
      } catch (error) {
        console.error("❌ Error al obtener datos:", error);
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

  // 🔍 Función para validar si la URL es válida
  const isValidUrl = (url: string) => {
    console.log("🔍 Validando URL:", url);
    console.log("🔍 URL existe:", !!url);
    console.log("🔍 URL no vacía:", url?.length > 0);
    
    if (!url || url.length === 0) {
      console.log("❌ URL vacía o null");
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

  // 🔍 Función para manejar el click del botón
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
      <div className="h-screen flex items-center justify-center">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
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
            {/* Botón con redirección mejorada */}
            {data.urlUltimaPredica && isValidUrl(data.urlUltimaPredica) ? (
              <button
                onClick={() => handleYouTubeClick(data.urlUltimaPredica)}
                className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaYoutube className="text-xl" />
                Última prédica
              </button>
            ) : (
              <div className="text-center">
                <span className="text-red-400 block">URL no disponible o inválida</span>
                <small className="text-gray-400">
                  {data.urlUltimaPredica ? `URL: ${data.urlUltimaPredica}` : 'No hay URL'}
                </small>
              </div>
            )}

            <Link
              to="/grupos-crecimiento"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Encuentra tu Grupo <ArrowRight size={18} />
            </Link>
          </div>
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