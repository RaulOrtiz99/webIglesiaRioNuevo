// import React, { useEffect } from 'react';
// import { Users, MapPin, Calendar } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';

// const groups = [
//   {
//     id: 1,
//     name: 'Grupo Esperanza',
//     location: 'Zona Norte',
//     day: 'Martes',
//     time: '7:00 PM',
//     leader: 'Carlos Mendoza',
//     phone: '+123 456 7890',
//     description: 'Grupo enfocado en familias jóvenes con niños pequeños.',
//     members: 15,
//     image: 'https://images.pexels.com/photos/1246296/pexels-photo-1246296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 2,
//     name: 'Grupo Fe',
//     location: 'Zona Centro',
//     day: 'Miércoles',
//     time: '7:30 PM',
//     leader: 'María García',
//     phone: '+123 456 7891',
//     description: 'Para adultos mayores de 50 años que buscan compañerismo y estudio bíblico.',
//     members: 12,
//     image: 'https://images.pexels.com/photos/1447261/pexels-photo-1447261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 3,
//     name: 'Grupo Jóvenes',
//     location: 'Zona Sur',
//     day: 'Jueves',
//     time: '8:00 PM',
//     leader: 'Daniel Morales',
//     phone: '+123 456 7892',
//     description: 'Exclusivo para jóvenes entre 18-25 años, con actividades dinámicas.',
//     members: 20,
//     image: 'https://images.pexels.com/photos/8001021/pexels-photo-8001021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 4,
//     name: 'Grupo Vida Nueva',
//     location: 'Zona Este',
//     day: 'Viernes',
//     time: '7:00 PM',
//     leader: 'Ana Martínez',
//     phone: '+123 456 7893',
//     description: 'Para matrimonios que desean fortalecer su relación a través de la fe.',
//     members: 18,
//     image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     id: 5,
//     name: 'Grupo Fortaleza',
//     location: 'Zona Oeste',
//     day: 'Sábado',
//     time: '6:00 PM',
//     leader: 'Roberto Silva',
//     phone: '+123 456 7894',
//     description: 'Grupo de estudio bíblico profundo para creyentes de todas las edades.',
//     members: 14,
//     image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
// ];

// const GruposCrecimiento = () => {
//   const { ref,  } = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     document.title = 'Iglesia Río Nuevo - Grupos de Crecimiento';
//   }, []);

//   return (
//     <div className="pt-16">
//       {/* Hero section */}
//       <div className="relative bg-celestial-800 text-white py-20">
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
//           style={{ 
//             backgroundImage: "url('https://images.pexels.com/photos/7162162/pexels-photo-7162162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
//           }}
//         ></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Grupos de Crecimiento</h1>
//             <p className="text-xl opacity-90 mb-8">
//               Encuentra tu comunidad perfecta para crecer en fe y construir relaciones significativas.
//             </p>
//             {/* <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
//               <Search size={20} className="text-gray-400 mr-2" />
//               <input 
//                 type="text" 
//                 placeholder="Buscar por ubicación, día o nombre..." 
//                 className="w-full bg-transparent text-gray-800 outline-none"
//               />
//               <button className="bg-celestial-500 hover:bg-celestial-600 text-white px-4 py-2 rounded-md ml-2">
//                 Buscar
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       {/* About section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="section-title">¿Qué son los Grupos de Crecimiento?</h2>
//             <p className="text-gray-600 mt-6">
//               Los Grupos de Crecimiento son comunidades pequeñas donde los miembros de Iglesia Río Nuevo se reúnen semanalmente en hogares para estudiar la Biblia, orar juntos, desarrollar amistades genuinas y apoyarse mutuamente en su caminar cristiano.
//             </p>
//             <p className="text-gray-600 mt-4">
//               Estos grupos son fundamentales para nuestra visión de iglesia, ya que creemos que el verdadero crecimiento espiritual ocurre en comunidad, donde podemos compartir nuestras vidas y aplicar las enseñanzas bíblicas de manera práctica.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users size={30} className="text-celestial-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Comunidad</h3>
//               <p className="text-gray-600">
//                 Construye relaciones significativas y encuentra apoyo en tu caminar espiritual.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Calendar size={30} className="text-celestial-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Crecimiento</h3>
//               <p className="text-gray-600">
//                 Profundiza en la palabra de Dios y crece en tu fe a través del estudio bíblico.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin size={30} className="text-celestial-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Cercanía</h3>
//               <p className="text-gray-600">
//                 Encuentra un grupo cerca de tu hogar y que se ajuste a tu horario.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Groups section */}
//       <section className="py-16 bg-white" ref={ref}>
//         <div className="container mx-auto px-4">
//           <h2 className="section-title mb-12">Encuentra tu Grupo</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-anim">
//             {groups.map((group) => (
//               <div 
//                 key={group.id} 
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={group.image} 
//                     alt={group.name} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
//                     <span className="bg-celestial-100 text-celestial-800 text-xs px-2 py-1 rounded-full">
//                       {group.members} miembros
//                     </span>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-2">
//                     <MapPin size={16} className="mr-2 text-celestial-500" />
//                     <span>{group.location}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-4">
//                     <Calendar size={16} className="mr-2 text-celestial-500" />
//                     <span>{group.day} • {group.time}</span>
//                   </div>
//                   <p className="text-gray-600 mb-6 text-sm">{group.description}</p>
//                   <div className="pt-4 border-t border-gray-100">
//                     <h4 className="text-sm font-medium text-gray-800 mb-1">Líder:</h4>
//                     <div className="flex justify-between items-center">
//                       <span>{group.leader}</span>
//                       <a 
//                         href={`tel:${group.phone}`} 
//                         className="text-celestial-600 hover:text-celestial-700 font-medium text-sm"
//                       >
//                         {group.phone}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-6 pb-6">
//                   <button className="w-full bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 rounded-md transition duration-300">
//                     Contactar
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <p className="text-gray-600 mb-6">
//               ¿No encuentras un grupo que se adapte a tus necesidades? Contáctanos y te ayudaremos a encontrar el grupo perfecto para ti.
//             </p>
//             <a 
//               href="#" 
//               className="btn-outline"
//             >
//               Contactar a Coordinador de Grupos
//             </a>
//           </div>
//         </div>
//       </section>
      
//       {/* Testimonials section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="section-title">Testimonios</h2>
          
//           <div className="max-w-4xl mx-auto mt-12">
//             <div className="bg-white rounded-xl shadow-md p-8 relative">
//               <div className="text-celestial-500 text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
//               <p className="text-gray-700 text-lg italic mb-6 relative z-10">
//                 Unirme a un Grupo de Crecimiento fue una de las mejores decisiones que tomé. Encontré una familia que me apoya en los momentos difíciles y celebra conmigo los momentos de alegría. Mi fe ha crecido enormemente gracias a las enseñanzas y la comunidad.
//               </p>
//               <div className="flex items-center">
//                 <img 
//                   src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                   alt="Testimonio" 
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h4 className="font-medium text-gray-800">Laura Sánchez</h4>
//                   <p className="text-sm text-gray-500">Miembro desde 2023</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GruposCrecimiento;

import React, { useEffect, useState } from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';
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
      <div className="relative bg-celestial-800 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7162162/pexels-photo-7162162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grupos de Crecimiento</h1>
            <p className="text-xl opacity-90 mb-8">
              Encuentra tu comunidad perfecta para crecer en fe y construir relaciones significativas.
            </p>
          </div>
        </div>
      </div>

      {/* About section (estática) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">¿Qué son los Grupos de Crecimiento?</h2>
            <p className="text-gray-600 mt-6">
              Los Grupos de Crecimiento son comunidades pequeñas donde los miembros de Iglesia Río Nuevo se reúnen semanalmente en hogares para estudiar la Biblia, orar juntos, desarrollar amistades genuinas y apoyarse mutuamente en su caminar cristiano.
            </p>
            <p className="text-gray-600 mt-4">
              Estos grupos son fundamentales para nuestra visión de iglesia, ya que creemos que el verdadero crecimiento espiritual ocurre en comunidad, donde podemos compartir nuestras vidas y aplicar las enseñanzas bíblicas de manera práctica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Comunidad</h3>
              <p className="text-gray-600">
                Construye relaciones significativas y encuentra apoyo en tu caminar espiritual.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Crecimiento</h3>
              <p className="text-gray-600">
                Profundiza en la palabra de Dios y crece en tu fe a través del estudio bíblico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Cercanía</h3>
              <p className="text-gray-600">
                Encuentra un grupo cerca de tu hogar y que se ajuste a tu horario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups section (dinámica) */}
      <section className="py-16 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Encuentra tu Grupo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Placeholder mientras carga
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                  </div>
                  <div className="px-6 pb-6">
                    <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              ))
            ) : grupos.length === 0 ? (
              <div className="col-span-full text-center">
                <p className="text-gray-600 mb-6">
                  No se encontraron grupos. Asegúrate de tener registros en "Grupos de Crecimiento".
                </p>
                {/* <button className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block">
                  Contactar a Coordinador de Grupos
                </button> */}
              </div>
            ) : (
              grupos.map((grupo) => (
                <div 
                  key={grupo.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={grupo.imagen || 'https://placehold.co/600x400'} 
                      alt={grupo.nombre} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{grupo.nombre}</h3>
                      <span className="bg-celestial-100 text-celestial-800 text-xs px-2 py-1 rounded-full">
                        {grupo.miembros} miembros
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-celestial-500" />
                      <span>{grupo.ubicacion}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar size={16} className="mr-2 text-celestial-500" />
                      <span>{grupo.dia} • {grupo.hora}</span>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm">
                      {extractDescription(grupo.descripcion)}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Líder:</h4>
                      <div className="flex justify-between items-center">
                        <span>{grupo.lider}</span>
                        {grupo.telefono && (
                          <a 
                            href={`tel:${grupo.telefono}`} 
                            className="text-celestial-600 hover:text-celestial-700 font-medium text-sm"
                          >
                            {grupo.telefono}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 rounded-md transition duration-300">
                      Contactar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              ¿No encuentras un grupo que se adapte a tus necesidades? Contáctanos y te ayudaremos a encontrar el grupo perfecto para ti.
            </p>
            <a 
              href="#"  
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
            >
              Contactar a Coordinador de Grupos
            </a>
          </div> */}
        </div>
      </section>

      {/* Testimonials section (estática) */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Testimonios</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-md p-8 relative">
              <div className="text-celestial-500 text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                Unirme a un Grupo de Crecimiento fue una de las mejores decisiones que tomé. Encontré una familia que me apoya en los momentos difíciles y celebra conmigo los momentos de alegría. Mi fe ha crecido enormemente gracias a las enseñanzas y la comunidad.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonio" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">Laura Sánchez</h4>
                  <p className="text-sm text-gray-500">Miembro desde 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GruposCrecimiento;