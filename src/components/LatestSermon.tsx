// import React from 'react';
// import { Play, Calendar, Clock } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';

// const LatestSermon = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: true
//   });

//   return (
//     <section className="py-20 bg-white" ref={ref}>
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">Última Prédica</h2>
        
//         <div className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
//           <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
//             <div className="grid md:grid-cols-2">
//               {/* Video thumbnail */}
//               <div className="relative group">
//                 <img 
//                   src="https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                   alt="Última prédica" 
//                   className="w-full h-full object-cover object-center"
//                   style={{ minHeight: '300px' }}
//                 />
//                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                   <button className="bg-celestial-500 hover:bg-celestial-600 w-16 h-16 rounded-full flex items-center justify-center transition duration-300 transform group-hover:scale-110">
//                     <Play size={30} className="text-white ml-1" />
//                   </button>
//                 </div>
//               </div>
              
//               {/* Sermon info */}
//               <div className="p-6 md:p-8 flex flex-col justify-center">
//                 <div className="flex items-center space-x-2 text-celestial-600 mb-3">
//                   <Calendar size={18} />
//                   <span className="text-sm">30 Abril, 2025</span>
//                   <span className="mx-2">•</span>
//                   <Clock size={18} />
//                   <span className="text-sm">45:30</span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3 text-gray-800">El Poder del Espíritu Santo en Nuestras Vidas</h3>
//                 <p className="text-gray-600 mb-6">
//                   Descubre cómo el Espíritu Santo puede guiarte, fortalecerte y transformar tu vida diaria a través de su presencia constante.
//                 </p>
//                 <div className="mt-auto">
//                   <div className="flex items-center space-x-4">
//                     <img 
//                       src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                       alt="Pastor" 
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <h4 className="font-medium text-gray-800">Pastor Daniel Morales</h4>
//                       <p className="text-sm text-gray-500">Pastor Principal</p>
//                     </div>
//                   </div>
//                 </div>
//                 <a 
//                   href="#" 
//                   className="mt-6 bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block text-center"
//                 >
//                   Ver Prédica
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className={`text-center mt-10 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
//           <a 
//             href="https://youtube.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-celestial-600 hover:text-celestial-700 font-medium inline-flex items-center"
//           >
//             Ver mensajes anteriores <ArrowRight size={18} className="ml-2" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { ArrowRight } from 'lucide-react';

// export default LatestSermon;

import React, { useEffect, useState } from 'react';
import { Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Tipado actualizado para el contenido editable desde Strapi
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
}

const LatestSermon = () => {
  const [data, setData] = useState<Predica | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Cargar datos desde Strapi
  useEffect(() => {
    const fetchSermonData = async () => {
      try {
        const res = await fetch('https://portal.iglesiarionuevo.com/api/predicas');
        const json = await res.json();

        console.log('📦 Respuesta completa de Strapi:', json);

        if (json.data && Array.isArray(json.data) && json.data.length > 0) {
          const predicaData = json.data[0];
          
          console.log('🔍 Datos de la prédica:', predicaData);
          console.log('🔗 Enlace prédica:', predicaData.enlacePredica);
          console.log('🔗 Enlace anteriores:', predicaData.enlaceAnteriores);
          console.log('🖼️ Imagen pastor:', predicaData.imagenPastor);
          console.log('🖼️ Imagen prédica:', predicaData.imagenPredica);

          setData({
            id: predicaData.id,
            documentId: predicaData.documentId,
            titulo: predicaData.titulo,
            descripcion: predicaData.descripcion,
            fecha: predicaData.fecha,
            duracion: predicaData.duracion,
            nombrePastor: predicaData.nombrePastor,
            cargoPastor: predicaData.cargoPastor,
            enlacePredica: predicaData.enlacePredica,
            enlaceAnteriores: predicaData.enlaceAnteriores,
            imagenPastor: predicaData.imagenPastor,
            imagenPredica: predicaData.imagenPredica
          });

          console.log('✅ Datos mapeados correctamente');
        }
      } catch (error) {
        console.error('❌ Error fetching sermon data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSermonData();
  }, []);

  // Función para formatear URL
  const formatUrl = (url: string) => {
    if (!url) {
      console.log('⚠️ URL vacía');
      return '#';
    }
    
    console.log('🔗 Formateando URL:', url);
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    const formattedUrl = `https://${url}`;
    console.log('🔗 URL formateada:', formattedUrl);
    return formattedUrl;
  };

  // Función para manejar clics en enlaces
  const handleLinkClick = (url: string, type: string) => {
    const formattedUrl = formatUrl(url);
    console.log(`🎯 Intentando abrir ${type}:`, formattedUrl);
    
    if (formattedUrl !== '#') {
      window.open(formattedUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.log('❌ No se puede abrir URL vacía');
    }
  };

  // Función para formatear fecha
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

  // Función para manejar errores de imágenes
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('❌ Error cargando imagen:', e.currentTarget.src);
    // Imagen de fallback
    e.currentTarget.src = 'https://images.pexels.com/photos/8540991/pexels-photo-8540991.jpeg?auto=compress&cs=tinysrgb&w=600';
  };

  // Mostrar mensaje de carga
  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Última Prédica</h2>
          <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 bg-gray-300 animate-pulse" />
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse" />
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-6 animate-pulse" />
                <div className="h-10 bg-gray-300 rounded w-1/4 mb-4 animate-pulse" />
                <div className="h-8 bg-gray-300 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mostrar mensaje si no hay datos
  if (!data) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Última Prédica</h2>
          <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg p-8">
            <p className="text-center text-gray-600">No se encontraron prédicas. Asegúrate de tener un registro en "Prédicas".</p>
          </div>
        </div>
      </section>
    );
  }
//bianquito rules
  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Última Prédica</h2>
        
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Video thumbnail */}
              <div className="relative group">
                <img 
                  src={data.imagenPredica || 'https://images.pexels.com/photos/8540991/pexels-photo-8540991.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={data.titulo} 
                  className="w-full h-64 object-cover object-center"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <button 
                    onClick={() => handleLinkClick(data.enlacePredica, 'prédica')}
                    className="bg-celestial-500 hover:bg-celestial-600 w-16 h-16 rounded-full flex items-center justify-center transition duration-300 transform group-hover:scale-110"
                  >
                    <Play size={30} className="text-white ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Sermon info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-celestial-600 mb-3">
                  <Calendar size={18} />
                  <span className="text-sm">{formatDate(data.fecha)}</span>
                  <span className="mx-2">•</span>
                  <Clock size={18} />
                  <span className="text-sm">{data.duracion}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{data.titulo}</h3>
                <p className="text-gray-600 mb-6">
                  {data.descripcion}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={data.imagenPastor || 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150'}
                      alt={data.nombrePastor} 
                      className="w-12 h-12 rounded-full object-cover"
                      onError={handleImageError}
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">{data.nombrePastor}</h4>
                      <p className="text-sm text-gray-500">{data.cargoPastor}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => handleLinkClick(data.enlacePredica, 'prédica')}
                  className="mt-6 bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block text-center w-full sm:w-auto"
                >
                  Ver Prédica
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`text-center mt-10 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => handleLinkClick(data.enlaceAnteriores, 'mensajes anteriores')}
            className="text-celestial-600 hover:text-celestial-700 font-medium inline-flex items-center"
          >
            Ver mensajes anteriores <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;