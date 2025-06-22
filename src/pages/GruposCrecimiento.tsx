import React, { useEffect, useState } from 'react';
import { Users, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Tipado para la estructura que devuelve Strapi
interface StrapiGrupo {
  id: number;
  documentId: string;
  nombre: string;
  ubicacion: string;
  dia: string;
  hora: string;
  lider: string;
  telefono: string | null;
  descripcion: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  miembros: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imagen: string;
}

interface StrapiResponse {
  data: StrapiGrupo[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const GruposCrecimiento = () => {
  const [grupos, setGrupos] = useState<StrapiGrupo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Función para extraer texto plano de la descripción de Strapi
  const extractDescription = (descripcion: StrapiGrupo['descripcion']): string => {
    if (!descripcion || !Array.isArray(descripcion)) return '';
    
    return descripcion
      .map(paragraph => 
        paragraph.children
          ?.map(child => child.text)
          .join('')
          .trim()
      )
      .filter(text => text.length > 0)
      .join(' ');
  };

  // Cargar datos desde Strapi
  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        const res = await fetch('https://portal.iglesiarionuevo.com/api/grupo-crecimientos');
        const json: StrapiResponse = await res.json();

        if (json.data && Array.isArray(json.data)) {
          setGrupos(json.data);
        }
      } catch (error) {
        console.error('Error fetching groups data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroupsData();
  }, []);

  // Actualizar el título de la página
  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Grupos de Crecimiento';
  }, []);

  return (
    <div className="pt-16">
     {/* Hero section (estática) */}
<div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1581447109200-bf2769116351?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      opacity: 0.4
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
          Comunidad y crecimiento
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Grupos de Crecimiento</span>
      </h1>
      <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
        Encuentra tu comunidad perfecta para crecer en fe y construir relaciones significativas.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#grupos" 
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Ver grupos disponibles
        </a>
        <a 
          href="#info" 
          className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm font-medium rounded-lg transition-all duration-300"
        >
          ¿Qué son los grupos?
        </a>
      </div>
    </div>
  </div>
</div>

      {/* About section (estática) */}
      <section id="info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Nuestra comunidad</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué son los Grupos de Crecimiento?
            </h2>
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p>
                Los Grupos de Crecimiento son comunidades pequeñas donde los miembros de Iglesia Río Nuevo se reúnen semanalmente en hogares para estudiar la Biblia, orar juntos, desarrollar amistades genuinas y apoyarse mutuamente en su caminar cristiano.
              </p>
              <p>
                Estos grupos son fundamentales para nuestra visión de iglesia, ya que creemos que el verdadero crecimiento espiritual ocurre en comunidad, donde podemos compartir nuestras vidas y aplicar las enseñanzas bíblicas de manera práctica.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Comunidad</h3>
              <p className="text-gray-600">
                Construye relaciones significativas y encuentra apoyo en tu caminar espiritual.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Crecimiento</h3>
              <p className="text-gray-600">
                Profundiza en la palabra de Dios y crece en tu fe a través del estudio bíblico.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-celestial-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={36} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cercanía</h3>
              <p className="text-gray-600">
                Encuentra un grupo cerca de tu hogar y que se ajuste a tu horario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups section (dinámica) */}
      <section id="grupos" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-celestial-600 font-semibold">Únete a un grupo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Encuentra tu Grupo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conecta con una comunidad cercana que comparta tus intereses y horarios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {isLoading ? (
              // Placeholder mientras carga
              [...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="h-56 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse"></div>
                  </div>
                </div>
              ))
            ) : grupos.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                  <Users size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No hay grupos disponibles</h3>
                  <p className="text-gray-500 text-sm">
                    Pronto tendremos información sobre nuestros grupos de crecimiento.
                  </p>
                </div>
              </div>
            ) : (
              grupos.map((grupo) => (
                <div 
                  key={grupo.id} 
                  className={`group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={grupo.imagen || 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop'} 
                      alt={grupo.nombre} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                      {grupo.miembros} miembros
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{grupo.nombre}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
                      <span className="text-sm">{grupo.ubicacion}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar size={16} className="mr-2 text-celestial-500 flex-shrink-0" />
                      <span className="text-sm">{grupo.dia} • {grupo.hora}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                      {extractDescription(grupo.descripcion)}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Líder del grupo:</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{grupo.lider}</span>
                        {grupo.telefono && (
                          <a 
                            href={`tel:${grupo.telefono}`} 
                            className="text-celestial-600 hover:text-celestial-700 font-medium text-sm whitespace-nowrap"
                          >
                            {grupo.telefono}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-celestial-600 hover:bg-celestial-700 text-white text-sm font-medium rounded-lg transition-colors">
                      Contactar al líder
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">¿No encuentras un grupo adecuado?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Contáctanos y te ayudaremos a encontrar el grupo perfecto para ti o incluso a comenzar uno nuevo en tu área.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-celestial-600 hover:bg-celestial-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Hablar con el coordinador
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default GruposCrecimiento;