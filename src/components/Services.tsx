import React from 'react';
import { Heart, Users, Book, Music } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const serviceItems = [
  {
    icon: <Book size={40} className="text-celestial-500" />,
    title: 'Estudio Bíblico',
    description: 'Profundizamos en la palabra de Dios para encontrar sabiduría y dirección para nuestras vidas.',
    day: 'Miércoles',
    time: '7:00 PM'
  },
  {
    icon: <Heart size={40} className="text-celestial-500" />,
    title: 'Culto de Adoración',
    description: 'Unimos nuestros corazones para adorar y agradecer a Dios por su amor y bondad.',
    day: 'Domingo',
    time: '10:00 AM'
  },
  {
    icon: <Users size={40} className="text-celestial-500" />,
    title: 'Grupos Familiares',
    description: 'Nos reunimos en hogares para compartir, estudiar la Biblia y apoyarnos mutuamente.',
    day: 'Viernes',
    time: '7:00 PM'
  },
  {
    icon: <Music size={40} className="text-celestial-500" />,
    title: 'Noche de Alabanza',
    description: 'Una noche especial dedicada a la alabanza y adoración a través de la música.',
    day: 'Último Sábado',
    time: '6:00 PM'
  }
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nuestros Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-anim">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-celestial-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{service.day}</span>
                  <span className="bg-celestial-100 text-celestial-800 px-3 py-1 rounded-full text-sm">
                    {service.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;