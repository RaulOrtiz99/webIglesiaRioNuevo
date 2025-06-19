import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    icon: <MapPin size={24} className="text-celestial-500" />,
    title: 'Dirección',
    details: ['Av. Landivar', 'Santa Cruz de la Sierra', 'Calle Ichilo']
  },
  {
    icon: <Phone size={24} className="text-celestial-500" />,
    title: 'Teléfono',
    details: ['+591 7889893']
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

  // Coordenadas exactas proporcionadas
  const latitude = -17.783873546591817;
  const longitude = -63.19020793719862;
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.954920148987!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ3JzAyLjAiUyA2M8KwMTEnMjQuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`;

  return (
    <section className="min-h-screen py-12 bg-white w-full" ref={ref}>
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-celestial-500 mb-4">Contacto y Ubicación</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Contact Info */}
          <div className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <div className="text-gray-600 space-y-2">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-base">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Map */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full min-h-[400px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl"
                title="Ubicación de la Iglesia"
              ></iframe>
              <div className="p-4 text-center bg-gray-50 border-t">
                <a 
                  href="https://maps.app.goo.gl/B1SuGXx7JkpsWrXBA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-celestial-500 hover:text-celestial-600 font-medium"
                >
                  <MapPin size={18} className="mr-2" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;