import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    icon: <MapPin size={24} className="text-celestial-500" />,
    title: 'Dirección',
    details: ['Av. Principal 123', 'Ciudad, País', 'CP 12345']
  },
  {
    icon: <Phone size={24} className="text-celestial-500" />,
    title: 'Teléfono',
    details: ['+123 456 7890', '+123 456 7891']
  },
  {
    icon: <Mail size={24} className="text-celestial-500" />,
    title: 'Email',
    details: ['contacto@rionuevo.org', 'info@rionuevo.org']
  },
  {
    icon: <Clock size={24} className="text-celestial-500" />,
    title: 'Horarios',
    details: ['Lun - Vie: 9:00 AM - 5:00 PM', 'Sáb - Dom: Cerrado']
  }
];

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contacto y Ubicación</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Envíanos un Mensaje</h3>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-celestial-500 focus:border-celestial-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-celestial-500 focus:border-celestial-500"
                      placeholder="Tu email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-celestial-500 focus:border-celestial-500"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-celestial-500 focus:border-celestial-500"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact info and map */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
                  <div className="text-sm text-gray-600">
                    {item.details.map((detail, i) => (
                      <p key={i} className="mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-64 md:h-72">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin size={40} className="mx-auto mb-2 text-celestial-500" />
                  <p className="text-gray-600">Mapa interactivo no disponible en esta vista previa.</p>
                  <p className="text-sm text-gray-500">Visita nuestra iglesia en Av. Principal 123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;