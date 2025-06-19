// import React, { useState } from 'react';
// import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';

// const events = [
//   {
//     id: 1,
//     title: 'Conferencia Familiar',
//     date: '5 Mayo, 2025',
//     time: '3:00 PM - 6:00 PM',
//     location: 'Auditorio Principal',
//     description: 'Una conferencia especial para fortalecer los valores familiares y mejorar la comunicación en el hogar.'
//   },
//   {
//     id: 2,
//     title: 'Retiro de Jóvenes',
//     date: '12-14 Mayo, 2025',
//     time: 'Todo el día',
//     location: 'Campamento Río Nuevo',
//     description: 'Un fin de semana lleno de actividades, enseñanzas y diversión para jóvenes de 13 a 25 años.'
//   },
//   {
//     id: 3,
//     title: 'Bautismos',
//     date: '20 Mayo, 2025',
//     time: '11:00 AM',
//     location: 'Río Claro',
//     description: 'Ceremonia de bautismo para nuevos creyentes que desean dar este paso de fe.'
//   },
//   {
//     id: 4,
//     title: 'Noche de Oración',
//     date: '25 Mayo, 2025',
//     time: '8:00 PM - 10:00 PM',
//     location: 'Santuario Principal',
//     description: 'Una noche especial dedicada a la oración por las necesidades de la iglesia y la comunidad.'
//   }
// ];

// const Calendar = () => {
//   const [selectedEvent, setSelectedEvent] = useState(events[0]);
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   return (
//     <section className="py-20 bg-white" ref={ref}>
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">Calendario de Actividades</h2>
        
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Events list */}
//           <div className={`md:col-span-1 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
//                 <CalendarIcon size={18} className="mr-2 text-celestial-600" /> 
//                 Mayo 2025
//               </h3>
//               <div className="space-y-2">
//                 {events.map((event) => (
//                   <div 
//                     key={event.id}
//                     onClick={() => setSelectedEvent(event)}
//                     className={`p-3 rounded-md cursor-pointer transition-all ${
//                       selectedEvent.id === event.id 
//                         ? 'bg-celestial-500 text-white' 
//                         : 'bg-white hover:bg-gray-100'
//                     }`}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h4 className="font-medium">{event.title}</h4>
//                       <span className={`text-sm ${selectedEvent.id === event.id ? 'text-celestial-100' : 'text-celestial-600'}`}>
//                         {event.date.split(',')[0]}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           {/* Event details */}
//           <div className={`md:col-span-2 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="h-40 bg-celestial-600 relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-celestial-600 to-celestial-400 flex items-center p-6">
//                   <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center text-gray-600 mb-4">
//                   <CalendarIcon size={18} className="mr-2 text-celestial-500" />
//                   <span>{selectedEvent.date}</span>
//                   <span className="mx-2">•</span>
//                   <Clock size={18} className="mr-2 text-celestial-500" />
//                   <span>{selectedEvent.time}</span>
//                 </div>
//                 <div className="flex items-center text-gray-600 mb-6">
//                   <MapPin size={18} className="mr-2 text-celestial-500" />
//                   <span>{selectedEvent.location}</span>
//                 </div>
//                 <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
//                 <a 
//                   href="#" 
//                   className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
//                 >
//                   Añadir al Calendario
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Calendar;


import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Tipado para los eventos desde Strapi
interface Evento {
  id: number;
  titulo: string;
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
}

interface EventoResponse {
  data: Evento[];
}

const Calendar = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Función para extraer texto de la descripción estructurada
  const extractTextFromDescription = (description: Array<{
    type: string;
    children: Array<{ type: string; text: string; }>;
  }>) => {
    if (!description || !Array.isArray(description)) return '';
    
    return description
      .map(block => 
        block.children
          ?.map(child => child.text)
          .join('')
      )
      .join(' ');
  };

  // Cargar datos desde Strapi
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const res = await fetch('https://portal.iglesiarionuevo.com/api/eventos');
        const json: EventoResponse = await res.json();

        console.log('Respuesta de Strapi:', json); // Para debugging

        if (json.data && Array.isArray(json.data)) {
          // Mapear los datos para que coincidan con nuestra interfaz
          const eventosFormateados = json.data.map((evento) => ({
            id: evento.id,
            titulo: evento.titulo,
            fecha: evento.fecha,
            hora: evento.hora,
            lugar: evento.lugar,
            descripcion: evento.descripcion
          }));
          
          setEventos(eventosFormateados);
          setSelectedEvent(eventosFormateados[0]); // Seleccionar el primer evento por defecto
        }
      } catch (error) {
        console.error('Error fetching events data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  // Obtener el mes actual
  const getCurrentMonth = () => {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const currentDate = new Date();
    return `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  // Mostrar mensaje de carga o error
  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Calendario de Actividades</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">{getCurrentMonth()}</h3>
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="p-3 bg-white hover:bg-gray-100 rounded-md cursor-pointer animate-pulse bg-gray-300 h-10"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-300 animate-pulse"></div>
                <div className="p-6">
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-300 animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-300 animate-pulse w-1/2"></div>
                    <div className="h-4 bg-gray-300 animate-pulse w-1/2"></div>
                    <div className="h-4 bg-gray-300 animate-pulse w-full"></div>
                    <div className="h-8 bg-gray-300 animate-pulse w-1/4 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (eventos.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Calendario de Actividades</h2>
          <div className="max-w-5xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg p-8">
            <p className="text-center text-gray-600">No se encontraron eventos. Asegúrate de tener registros en "Eventos".</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-celestial-600 text-center">Calendario de Actividades</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Events list */}
          <div className={`md:col-span-1 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <CalendarIcon size={18} className="mr-2 text-celestial-600" /> 
                {getCurrentMonth()}
              </h3>
              <div className="space-y-2">
                {eventos.map((evento) => (
                  <div 
                    key={evento.id}
                    onClick={() => setSelectedEvent(evento)}
                    className={`p-3 rounded-md cursor-pointer transition-all ${
                      selectedEvent?.id === evento.id 
                        ? 'bg-celestial-500 text-white' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{evento.titulo}</h4>
                      <span className={`text-sm ${selectedEvent?.id === evento.id ? 'text-celestial-100' : 'text-celestial-600'}`}>
                        {evento.fecha}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Event details */}
          <div className={`md:col-span-2 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 relative">
                <img 
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={selectedEvent?.titulo || 'Evento destacado'} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-celestial-600/80 to-celestial-400/80 flex items-center p-6">
                  <h3 className="text-2xl font-bold text-white">{selectedEvent?.titulo}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <CalendarIcon size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent?.fecha}</span>
                  <span className="mx-2">•</span>
                  <Clock size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent?.hora}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent?.lugar}</span>
                </div>
                <p className="text-gray-700 mb-6">
                  {selectedEvent ? extractTextFromDescription(selectedEvent.descripcion) : ''}
                </p>
                {/* <a 
                  href="#" 
                  className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  Añadir al Calendario <ArrowRight size={18} className="ml-2" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
