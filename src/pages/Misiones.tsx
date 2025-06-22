import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Globe, Heart, Award, Users, MapPin, Loader2, AlertCircle, ChevronRight } from 'lucide-react';

// Interfaces para TypeScript
interface Missionary {
  id: number;
  documentId: string;
  nombre: string;
  ubicacion: string;
  desde: string;
  descripcion: string;
  imagen_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Project {
  id: number;
  documentId: string;
  titulo: string;
  ubicacion: string;
  descripcion: string;
  objetivo: string;
  recaudado: string;
  imagen_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse<T> {
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

// 🔧 URLs de API - Cambiadas a localhost
const API_BASE_URL = 'https://portal.iglesiarionuevo.com/api';

const Misiones = () => {
  const [missionaries, setMissionaries] = useState<Missionary[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: missionariesRef } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: projectsRef } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Función para obtener misioneros
  const fetchMissionaries = async (): Promise<void> => {
    try {
      console.log('📡 Obteniendo misioneros...');
      const response = await fetch(`${API_BASE_URL}/misioneros`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data: StrapiResponse<Missionary> = await response.json();
      console.log('📦 Datos de misioneros:', data);
      setMissionaries(data.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al obtener misioneros';
      setError(errorMessage);
      console.error('❌ Error fetching missionaries:', err);
    }
  };

  // Función para obtener proyectos
  const fetchProjects = async (): Promise<void> => {
    try {
      console.log('📡 Obteniendo proyectos...');
      const response = await fetch(`${API_BASE_URL}/proyectos`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data: StrapiResponse<Project> = await response.json();
      console.log('📦 Datos de proyectos:', data);
      setProjects(data.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al obtener proyectos';
      setError(errorMessage);
      console.error('❌ Error fetching projects:', err);
    }
  };

  // 🔧 Función mejorada para calcular porcentaje de progreso
  const calculateProgress = (recaudado: string, objetivo: string): number => {
    try {
      // Extraer números de las cadenas (eliminar texto, símbolos, etc.)
      const recaudadoNum = parseFloat(recaudado.replace(/[^\d.]/g, '')) || 0;
      const objetivoNum = parseFloat(objetivo.replace(/[^\d.]/g, '')) || 1;
      
      const percentage = (recaudadoNum / objetivoNum) * 100;
      return Math.min(Math.max(percentage, 0), 100); // Entre 0 y 100
    } catch {
      return 0;
    }
  };

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Misiones';
    
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await Promise.all([fetchMissionaries(), fetchProjects()]);
      } catch (err) {
        console.error('❌ Error general:', err);
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center">
            <Loader2 className="h-12 w-12 text-celestial-600 animate-spin" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">Cargando información de misiones</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Estamos obteniendo los últimos datos de nuestros misioneros y proyectos alrededor del mundo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center max-w-md mx-auto p-6 space-y-6">
          <div className="inline-flex items-center justify-center bg-red-100 rounded-full p-4">
            <AlertCircle className="h-10 w-10 text-red-600" />
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">Error de conexión</h2>
            <p className="text-gray-600">
              {error}
            </p>
            <p className="text-sm text-gray-500">
              Verifica que tu API de Strapi esté ejecutándose en http://localhost:1337
            </p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center justify-center px-6 py-3 bg-celestial-600 hover:bg-celestial-700 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Reintentar conexión
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero section con gradiente negro */}
      <div className="relative text-white py-28 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/29179298/pexels-photo-29179298.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                Transformando vidas
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Misiones Globales</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
              Iglesia Río Nuevo, una comunidad comprometida con llevar esperanza y transformación a todas las naciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#proyectos" 
                className="inline-flex items-center justify-center px-8 py-3 bg-celestial-600 hover:bg-celestial-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nuestros Proyectos
              </a>
              <a 
                href="#misioneros" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm font-medium rounded-lg transition-all duration-300"
              >
                Conoce a nuestros misioneros
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Nuestra Visión</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Llevando esperanza más allá de las fronteras
            </h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                En Iglesia Río Nuevo creemos que estamos llamados a compartir el amor de Dios más allá de nuestras fronteras. Nuestra visión es ver transformación espiritual, social y económica en comunidades alrededor del mundo a través del poder del evangelio.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-700 delay-100 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Alcance Global</h3>
              <p className="text-gray-600">
                Apoyamos misioneros en diferentes continentes, llevando el mensaje de esperanza a diversas culturas y contextos.
              </p>
            </div>
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-700 delay-300 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Servicio Integral</h3>
              <p className="text-gray-600">
                Nuestros proyectos atienden tanto necesidades espirituales como físicas, reflejando el amor completo de Cristo.
              </p>
            </div>
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center transition-all duration-700 delay-500 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Participación Local</h3>
              <p className="text-gray-600">
                Cada miembro de nuestra iglesia puede involucrarse a través de oración, donaciones o viajes misioneros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missionaries section - DINÁMICO */}
      <section id="misioneros" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={missionariesRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Nuestro Equipo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conoce a nuestros misioneros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personas comprometidas que han dejado todo para servir en diferentes partes del mundo.
            </p>
          </div>
          
          {missionaries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {missionaries.map((missionary) => (
                <div 
                  key={missionary.id} 
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={missionary.imagen_url || 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop'} 
                      alt={missionary.nombre} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                      Desde {missionary.desde}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{missionary.nombre}</h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
                        <span className="text-sm">{missionary.ubicacion}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{missionary.descripcion}</p>
                    <button className="text-celestial-600 hover:text-celestial-700 text-sm font-medium flex items-center transition-colors">
                      Leer más
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                <Users size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No hay misioneros registrados</h3>
                <p className="text-gray-500 text-sm">
                  Pronto tendremos información sobre nuestros misioneros alrededor del mundo.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects section - DINÁMICO */}
      <section id="proyectos" className="py-20 bg-white" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Nuestro Impacto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proyectos Misioneros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Iniciativas que están transformando comunidades enteras alrededor del mundo.
            </p>
          </div>
          
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => {
                const progress = calculateProgress(project.recaudado, project.objetivo);
                
                return (
                  <div 
                    key={project.id} 
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.imagen_url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'} 
                        alt={project.titulo} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.titulo}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
                        <span className="text-sm">{project.ubicacion}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">{project.descripcion}</p>
                      
                      {/* Barra de progreso mejorada */}
                      {project.objetivo && project.recaudado && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2 text-xs font-medium text-gray-600">
                            <span>Recaudado</span>
                            <span>Meta</span>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                            <div 
                              className="bg-gradient-to-r from-celestial-400 to-celestial-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-celestial-600">
                              {project.recaudado}
                            </span>
                            <span className="text-sm font-medium text-gray-700">
                              {project.objetivo}
                            </span>
                          </div>
                          
                          <div className="mt-3 text-center">
                            <span className="inline-block bg-celestial-50 text-celestial-700 text-xs px-3 py-1 rounded-full font-medium">
                              {progress.toFixed(1)}% completado
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* <button className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 bg-celestial-600 hover:bg-celestial-700 text-white text-sm font-medium rounded-lg transition-colors">
                        Apoyar este proyecto
                        <Heart className="ml-2 h-4 w-4" />
                      </button> */}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                <Globe size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No hay proyectos activos</h3>
                <p className="text-gray-500 text-sm">
                  Pronto anunciaremos nuevos proyectos misioneros. ¡Mantente atento!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Get involved section - ESTÁTICO */}
      <section className="py-20 bg-gradient-to-br from-celestial-50 to-celestial-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Participa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Cómo puedes involucrarte?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hay muchas maneras en las que puedes ser parte de nuestra visión misionera. Cada contribución es significativa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Orar</h3>
              <p className="text-gray-600 mb-6">
                Comprométete a orar regularmente por nuestros misioneros y proyectos en diferentes partes del mundo.
              </p>
              {/* <button className="text-sm text-celestial-600 hover:text-celestial-700 font-medium">
                Recibir guías de oración
              </button> */}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Donar</h3>
              <p className="text-gray-600 mb-6">
                Apoya financieramente a nuestros misioneros y proyectos para que puedan continuar su labor en el campo.
              </p>
              {/* <button className="text-sm text-celestial-600 hover:text-celestial-700 font-medium">
                Ver opciones de donación
              </button> */}
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ir</h3>
              <p className="text-gray-600 mb-6">
                Únete a uno de nuestros viajes misioneros de corto plazo o considera si Dios te está llamando al campo misionero.
              </p>
              {/* <button className="text-sm text-celestial-600 hover:text-celestial-700 font-medium">
                Información sobre viajes
              </button> */}
            </div>
          </div>
          
          {/* <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">¿Listo para dar el siguiente paso?</h3>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-celestial-600 hover:bg-celestial-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Contáctanos para más información
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Misiones;