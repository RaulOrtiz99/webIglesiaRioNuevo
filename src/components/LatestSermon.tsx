import React, { useEffect, useState } from 'react';
import { Play, Calendar, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Predica {
  id: number;
  documentId: string;
  titulo: string;
  descripcion: string;
  fecha: string | null;
  duracion: string;
  nombrePastor: string;
  cargoPastor: string;
  enlacePredica: string;
  enlaceAnteriores: string;
  imagenPastor: string;
  imagenPredica: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: Predica[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const LatestSermon = () => {
  const [data, setData] = useState<Predica | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchSermonData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Cambia esta URL por la correcta de tu API
        const res = await fetch('https://portal.iglesiarionuevo.com/api/ultima-predicas');
        
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        
        const json: StrapiResponse = await res.json();

        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          // Toma la primera prédica (la más reciente)
          const predicaData = json.data[0];
          setData(predicaData);
        } else {
          setData(null);
        }
      } catch (error) {
        console.error('Error fetching sermon data:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSermonData();
  }, []);

  const formatUrl = (url: string) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  const handleLinkClick = (url: string) => {
    const formattedUrl = formatUrl(url);
    if (formattedUrl !== '#') {
      window.open(formattedUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Fecha no disponible';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop';
  };

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block mb-3 text-blue-600 font-semibold">Enseñanza bíblica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Última Prédica</h2>
          </div>
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-80 bg-gray-200 animate-pulse" />
              <div className="p-6 md:p-8 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                <div className="h-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block mb-3 text-blue-600 font-semibold">Enseñanza bíblica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Última Prédica</h2>
          </div>
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <div className="text-red-600 mb-4">
              <p className="font-semibold">Error al cargar la prédica</p>
              <p className="text-sm text-gray-600 mt-2">{error}</p>
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block mb-3 text-blue-600 font-semibold">Enseñanza bíblica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Última Prédica</h2>
          </div>
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-600">No hay prédicas disponibles en este momento</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block mb-3 text-blue-600 font-semibold">Enseñanza bíblica</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Última Prédica</h2>
        </div>
        
        <div className={`max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2">
            {/* Video thumbnail */}
            <div className="relative group">
              <img 
                src={data.imagenPredica || 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop'}
                alt={data.titulo} 
                className="w-full h-64 md:h-80 object-cover object-center"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button 
                  onClick={() => handleLinkClick(data.enlacePredica)}
                  className="bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center transition duration-300 transform group-hover:scale-110 shadow-lg"
                >
                  <Play size={30} className="text-white ml-1" />
                </button>
              </div>
            </div>
            
            {/* Sermon info */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center space-x-3 text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1 text-blue-500" />
                  <span className="text-sm">{formatDate(data.fecha)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1 text-blue-500" />
                  <span className="text-sm">{data.duracion}</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{data.titulo}</h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {data.descripcion}
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={data.imagenPastor || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'}
                    alt={data.nombrePastor} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    onError={handleImageError}
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{data.nombrePastor}</h4>
                    <p className="text-sm text-gray-500">{data.cargoPastor}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLinkClick(data.enlacePredica)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg text-center"
                  >
                    Ver Prédica
                  </button>
                  
                  <button 
                    onClick={() => handleLinkClick(data.enlaceAnteriores)}
                    className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    Mensajes anteriores
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;