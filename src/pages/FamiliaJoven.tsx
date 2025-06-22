import React, { useEffect, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Clock, MapPin, ChevronRight, Users, Heart, BookOpen, Mic } from 'lucide-react';

// Interfaces actualizadas para coincidir con la estructura de la API
interface Activity {
  id: number;
  documentId: string;
  titulo: string;
  fecha: string;
  tiempo: string;
  ubicacion: string;
  imagen_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface SermonSeries {
  id: number;
  documentId: string;
  titulo: string;
  descripcion: string;
  episodios: number;
  imagen_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Interfaces para las respuestas de la API
interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const ActivityCard = React.memo(({ event }: { event: Activity }) => (
  <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="relative h-60 overflow-hidden">
      <img
        src={event.imagen_url || 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop'}
        alt={event.titulo}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{event.titulo}</h3>
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
          <span className="text-sm">{new Date(event.fecha).toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
          <span className="text-sm">{event.tiempo}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
          <span className="text-sm">{event.ubicacion}</span>
        </div>
      </div>
      <button className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center text-sm">
        Más detalles <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
));

const SeriesCard = React.memo(({ serie }: { serie: SermonSeries }) => (
  <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="relative h-60 overflow-hidden">
      <img 
        src={serie.imagen_url || 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop'} 
        alt={serie.titulo} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
        <span className="text-white font-medium bg-celestial-600 px-2 py-1 rounded-full text-xs">
          {serie.episodios} episodios
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{serie.titulo}</h3>
      <p className="text-gray-600 text-sm mb-6 line-clamp-3">{serie.descripcion}</p>
      {/* <button className="w-full bg-celestial-600 hover:bg-celestial-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
        Ver serie <ChevronRight size={16} className="ml-2" />
      </button> */}
    </div>
  </div>
));

const FamiliaJoven = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [series, setSeries] = useState<SermonSeries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const observerConfig = useMemo(() => ({ threshold: 0.1, triggerOnce: true }), []);
  
  const { ref: introRef, inView: introInView } = useInView(observerConfig);
  const { ref: eventsRef, inView: eventsInView } = useInView(observerConfig);
  const { ref: sermonsRef, inView: sermonsInView } = useInView(observerConfig);

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Familia Joven';

    const fetchData = async () => {
      try {
        setError(null);
        const [activitiesRes, seriesRes] = await Promise.all([
          fetch('https://portal.iglesiarionuevo.com/api/familia-joven-actividades'),
          fetch('https://portal.iglesiarionuevo.com/api/familia-joven-predicas')
        ]);
        
        if (!activitiesRes.ok || !seriesRes.ok) {
          throw new Error('Error al obtener los datos del servidor');
        }

        const [activitiesData, seriesData] = await Promise.all([
          activitiesRes.json() as Promise<ApiResponse<Activity>>,
          seriesRes.json() as Promise<ApiResponse<SermonSeries>>
        ]);

        console.log('Datos de actividades:', activitiesData);
        console.log('Datos de series:', seriesData);

        if (activitiesData.data && Array.isArray(activitiesData.data)) {
          setActivities(activitiesData.data.slice(0, 3)); // Mostrar solo 3 actividades
        }
        if (seriesData.data && Array.isArray(seriesData.data)) {
          setSeries(seriesData.data.slice(0, 3)); // Mostrar solo 3 series
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const values = [
    {
      icon: <Users className="h-6 w-6 text-celestial-600" />,
      title: "Comunidad",
      description: "Un espacio seguro donde puedes ser tú mismo y crecer en relación con otros"
    },
    {
      icon: <Heart className="h-6 w-6 text-celestial-600" />,
      title: "Fe Auténtica",
      description: "Exploramos una fe relevante para los desafíos de esta generación"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-celestial-600" />,
      title: "Enseñanza",
      description: "Estudios bíblicos profundos y aplicables a la vida diaria"
    },
    {
      icon: <Mic className="h-6 w-6 text-celestial-600" />,
      title: "Expresión",
      description: "Espacio para desarrollar tus talentos y dones"
    }
  ];

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-celestial-600"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Cargando Familia Joven</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Estamos preparando todo para mostrarte nuestra comunidad juvenil
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center space-y-4 max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-700">Error al cargar contenido</h2>
          <p className="text-gray-500">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-celestial-600 text-white rounded-lg hover:bg-celestial-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative text-white py-28 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1622598453695-4fbaf151aadc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Generación Transformadora
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Familia Joven</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
              Somos la generación de jóvenes que marca la diferencia a través de una fe auténtica y relevante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#actividades" 
                className="inline-flex items-center justify-center px-8 py-3 bg-celestial-600 hover:bg-celestial-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nuestras Actividades
              </a>
              <a 
                href="#valores" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm font-medium rounded-lg transition-all duration-300"
              >
                Conoce nuestros valores
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Nuestra identidad</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Más que un grupo, somos familia
            </h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Familia Joven es el ministerio juvenil de Iglesia Río Nuevo, un espacio donde los jóvenes entre 13 y 25 años pueden encontrar comunidad, propósito y una fe relevante para sus vidas.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ease-out ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ChevronRight className="text-celestial-500 mt-1 flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Visión</h3>
                    <p className="text-gray-600">Formar una generación de jóvenes que vivan su fe de manera auténtica y transformadora.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-celestial-500 mt-1 flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Misión</h3>
                    <p className="text-gray-600">Equipar, inspirar y acompañar a los jóvenes en su caminar con Dios y en el descubrimiento de su propósito.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChevronRight className="text-celestial-500 mt-1 flex-shrink-0 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Valores</h3>
                    <p className="text-gray-600">Autenticidad, comunidad, excelencia, pasión y servicio.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-out delay-150 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Jóvenes reunidos" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-lg font-bold text-celestial-600">+120</p>
                  <p className="text-sm text-gray-600">Jóvenes activos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores section */}
      <section id="valores" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Lo que nos define</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros Pilares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Principios fundamentales que guían todo lo que hacemos como comunidad juvenil
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-celestial-200 hover:shadow-md transition-all"
              >
                <div className="bg-celestial-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actividades */}
      <section id="actividades" className="py-20 bg-white" ref={eventsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Conéctate con nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Próximas Actividades
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eventos diseñados para crecer en comunidad y en tu relación con Dios
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 ease-out ${eventsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {activities.length > 0 ? (
              activities.map(event => (
                <ActivityCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                  <Calendar size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Próximamente nuevas actividades</h3>
                  <p className="text-gray-500 text-sm">
                    Estamos preparando eventos increíbles para ti
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Series de prédicas */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={sermonsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Enseñanza relevante</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Series de Prédicas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mensajes diseñados especialmente para los desafíos de tu generación
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 ease-out ${sermonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {series.length > 0 ? (
              series.map(serie => (
                <SeriesCard key={serie.id} serie={serie} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                  <Mic size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Próximamente nuevas series</h3>
                  <p className="text-gray-500 text-sm">
                    Estamos preparando contenido poderoso para tu crecimiento
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-celestial-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para unirte a nuestra familia?</h2>
            <p className="text-xl mb-8 opacity-90">
              Te esperamos en nuestras reuniones semanales donde podrás conectar con Dios y con otros jóvenes como tú.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FamiliaJoven;