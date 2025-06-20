// import React, { useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import {
//   Calendar,
//   ArrowRight,
//   Clock,
//   MapPin,
//   ChevronRight} from 'lucide-react';

// interface Activity {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   image_url: string;
// }

// interface SermonSeries {
//   id: number;
//   title: string;
//   description: string;
//   episodes: number;
//   image_url: string;
// }

// const FamiliaJoven = () => {
//   const [activities, setActivities] = useState<Activity[]>([]);
//   const [series, setSeries] = useState<SermonSeries[]>([]);
  

//   // Add introInView and introRef for the introduction section
//   const { ref: introRef, inView: introInView } = useInView({ threshold: 0.1, triggerOnce: true });
//   const { ref: eventsRef } = useInView({ threshold: 0.1, triggerOnce: true });
//   const { ref: sermonsRef } = useInView({ threshold: 0.1, triggerOnce: true });
//   useInView({ threshold: 0.1, triggerOnce: true });

//   useEffect(() => {
//     document.title = 'Iglesia Río Nuevo - Familia Joven';

//     fetch('http://localhost:1337/api/actividads')
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setActivities(data.data);
//         }
//       });

//     fetch('http://localhost:1337/api/serie-predicas')
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data.data)) {
//           setSeries(data.data);
//         }
//       });
//   }, []);

//   return (
//      <div className="pt-16">
//       {/* Hero section */}
//       <div className="relative bg-celestial-800 text-white py-24">
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0" 
//           style={{ 
//             backgroundImage: "url('https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
//         </div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Familia Joven</h1>
//             <p className="text-xl opacity-90 mb-8 max-w-2xl">
//               Somos la generación de jóvenes que marca la diferencia a través de una fe auténtica y relevante.
//             </p>
//             <a 
//               href="#actividades" 
//               className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
//             >
//               Nuestras Actividades
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Introduction section */}
//       <section className="py-20 bg-white" ref={introRef}>
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className={`transition-all duration-1000 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
//               <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Quiénes Somos?</h2>
//               <p className="text-gray-600 mb-4">
//                 Familia Joven es el ministerio juvenil de Iglesia Río Nuevo, un espacio donde los jóvenes entre 13 y 25 años pueden encontrar comunidad, propósito y una fe relevante para sus vidas.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 Creemos que esta generación está llamada a hacer historia, a vivir con pasión por Dios y a transformar el mundo a través de sus talentos y dones únicos.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
//                   <p className="text-gray-700"><span className="font-medium">Visión:</span> Formar una generación de jóvenes que vivan su fe de manera auténtica y transformadora.</p>
//                 </div>
//                 <div className="flex items-start">
//                   <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
//                   <p className="text-gray-700"><span className="font-medium">Misión:</span> Equipar, inspirar y acompañar a los jóvenes en su caminar con Dios y en el descubrimiento de su propósito.</p>
//                 </div>
//                 <div className="flex items-start">
//                   <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
//                   <p className="text-gray-700"><span className="font-medium">Valores:</span> Autenticidad, comunidad, excelencia, pasión y servicio.</p>
//                 </div>
//               </div>
//             </div>
//             <div className={`transition-all duration-1000 delay-300 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
//               <div className="relative">
//                 <div className="bg-celestial-100 rounded-lg absolute -top-4 -left-4 w-full h-full z-0"></div>
//                 <img 
//                   src="https://images.pexels.com/photos/5199746/pexels-photo-5199746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  " 
//                   alt="Jóvenes" 
//                   className="rounded-lg shadow-md relative z-10"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
//                   <p className="text-lg font-bold text-celestial-600">+120</p>
//                   <p className="text-sm text-gray-600">Jóvenes activos</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>




//     <div className="pt-16">
//       {/* Actividades */}
//       <section id="actividades" className="py-20 bg-gray-50" ref={eventsRef}>
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Próximas Actividades</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {activities.map(event => (
//               <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={event.image_url}
//                     alt={event.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
//                   <div className="flex items-center text-gray-600 mb-1">
//                     <Calendar size={16} className="mr-2 text-celestial-500" />
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-1">
//                     <Clock size={16} className="mr-2 text-celestial-500" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-4">
//                     <MapPin size={16} className="mr-2 text-celestial-500" />
//                     <span>{event.location}</span>
//                   </div>
//                   <a href="#" className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center">
//                     Más detalles <ArrowRight size={16} className="ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Series de prédicas */}
//       <section className="py-20 bg-white" ref={sermonsRef}>
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Series de Prédicas</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {series.map(serie => (
//               <div key={serie.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="h-48 overflow-hidden relative">
//                   <img src={serie.image_url} alt={serie.title} className="w-full h-full object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
//                     <span className="text-white font-medium">{serie.episodes} episodios</span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{serie.title}</h3>
//                   <p className="text-gray-600 mb-4">{serie.description}</p>
//                   <a
//                     href="#"
//                     className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-4 rounded-md block text-center"
//                   >
//                     Ver Serie
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// }

// export default FamiliaJoven;
import React, { useEffect, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  ArrowRight,
  Clock,
  MapPin,
  ChevronRight} from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
}

interface SermonSeries {
  id: number;
  title: string;
  description: string;
  episodes: number;
  image_url: string;
}

// Componente optimizado para actividades
const ActivityCard = React.memo(({ event }: { event: Activity }) => (
  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img
        src={event.image_url}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
      <div className="flex items-center text-gray-600 mb-1">
        <Calendar size={16} className="mr-2 text-celestial-500" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-1">
        <Clock size={16} className="mr-2 text-celestial-500" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin size={16} className="mr-2 text-celestial-500" />
        <span>{event.location}</span>
      </div>
      <a href="#" className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center">
        Más detalles <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </div>
));

// Componente optimizado para series
const SeriesCard = React.memo(({ serie }: { serie: SermonSeries }) => (
  <div key={serie.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={serie.image_url} 
        alt={serie.title} 
        className="w-full h-full object-cover" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
        <span className="text-white font-medium">{serie.episodes} episodios</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{serie.title}</h3>
      <p className="text-gray-600 mb-4">{serie.description}</p>
      <a
        href="#"
        className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-4 rounded-md block text-center"
      >
        Ver Serie
      </a>
    </div>
  </div>
));

const FamiliaJoven = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [series, setSeries] = useState<SermonSeries[]>([]);
  
  // Optimizar IntersectionObserver config
  const observerConfig = useMemo(() => ({ threshold: 0.1, triggerOnce: true }), []);
  
  const { ref: introRef, inView: introInView } = useInView(observerConfig);
  const { ref: eventsRef } = useInView(observerConfig);
  const { ref: sermonsRef } = useInView(observerConfig);

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Familia Joven';

    // Fetch en paralelo para mayor velocidad
    Promise.all([
      fetch('https://portal.iglesiarionuevo.com/api/actividads').then(res => res.json()),
      fetch('https://portal.iglesiarionuevo.com/api/serie-predicas').then(res => res.json())
    ]).then(([activitiesData, seriesData]) => {
      if (Array.isArray(activitiesData.data)) {
        setActivities(activitiesData.data);
      }
      if (Array.isArray(seriesData.data)) {
        setSeries(seriesData.data);
      }
    });
  }, []);

  return (
     <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-celestial-800 text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Familia Joven</h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl">
              Somos la generación de jóvenes que marca la diferencia a través de una fe auténtica y relevante.
            </p>
            <a 
              href="#actividades" 
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Nuestras Actividades
            </a>
          </div>
        </div>
      </div>
      {/* Introduction section */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">¿Quiénes Somos?</h2>
              <p className="text-gray-600 mb-4">
                Familia Joven es el ministerio juvenil de Iglesia Río Nuevo, un espacio donde los jóvenes entre 13 y 25 años pueden encontrar comunidad, propósito y una fe relevante para sus vidas.
              </p>
              <p className="text-gray-600 mb-6">
                Creemos que esta generación está llamada a hacer historia, a vivir con pasión por Dios y a transformar el mundo a través de sus talentos y dones únicos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-medium">Visión:</span> Formar una generación de jóvenes que vivan su fe de manera auténtica y transformadora.</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-medium">Misión:</span> Equipar, inspirar y acompañar a los jóvenes en su caminar con Dios y en el descubrimiento de su propósito.</p>
                </div>
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><span className="font-medium">Valores:</span> Autenticidad, comunidad, excelencia, pasión y servicio.</p>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
              <div className="relative">
                <div className="bg-celestial-100 rounded-lg absolute -top-4 -left-4 w-full h-full z-0"></div>
                <img 
                  src="https://images.pexels.com/photos/5199746/pexels-photo-5199746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jóvenes" 
                  className="rounded-lg shadow-md relative z-10"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
                  <p className="text-lg font-bold text-celestial-600">+120</p>
                  <p className="text-sm text-gray-600">Jóvenes activos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-16">
        {/* Actividades */}
        <section id="actividades" className="py-20 bg-gray-50" ref={eventsRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Próximas Actividades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activities.map(event => (
                <ActivityCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Series de prédicas */}
        <section className="py-20 bg-white" ref={sermonsRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Series de Prédicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {series.map(serie => (
                <SeriesCard key={serie.id} serie={serie} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FamiliaJoven;