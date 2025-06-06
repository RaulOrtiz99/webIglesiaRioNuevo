import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const events = [
  {
    id: 1,
    title: 'Conferencia Familiar',
    date: '5 Mayo, 2025',
    time: '3:00 PM - 6:00 PM',
    location: 'Auditorio Principal',
    description: 'Una conferencia especial para fortalecer los valores familiares y mejorar la comunicación en el hogar.'
  },
  {
    id: 2,
    title: 'Retiro de Jóvenes',
    date: '12-14 Mayo, 2025',
    time: 'Todo el día',
    location: 'Campamento Río Nuevo',
    description: 'Un fin de semana lleno de actividades, enseñanzas y diversión para jóvenes de 13 a 25 años.'
  },
  {
    id: 3,
    title: 'Bautismos',
    date: '20 Mayo, 2025',
    time: '11:00 AM',
    location: 'Río Claro',
    description: 'Ceremonia de bautismo para nuevos creyentes que desean dar este paso de fe.'
  },
  {
    id: 4,
    title: 'Noche de Oración',
    date: '25 Mayo, 2025',
    time: '8:00 PM - 10:00 PM',
    location: 'Santuario Principal',
    description: 'Una noche especial dedicada a la oración por las necesidades de la iglesia y la comunidad.'
  }
];

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Calendario de Actividades</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Events list */}
          <div className={`md:col-span-1 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <CalendarIcon size={18} className="mr-2 text-celestial-600" /> 
                Mayo 2025
              </h3>
              <div className="space-y-2">
                {events.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className={`p-3 rounded-md cursor-pointer transition-all ${
                      selectedEvent.id === event.id 
                        ? 'bg-celestial-500 text-white' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{event.title}</h4>
                      <span className={`text-sm ${selectedEvent.id === event.id ? 'text-celestial-100' : 'text-celestial-600'}`}>
                        {event.date.split(',')[0]}
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
              <div className="h-40 bg-celestial-600 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-celestial-600 to-celestial-400 flex items-center p-6">
                  <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <CalendarIcon size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin size={18} className="mr-2 text-celestial-500" />
                  <span>{selectedEvent.location}</span>
                </div>
                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                <a 
                  href="#" 
                  className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
                >
                  Añadir al Calendario
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;