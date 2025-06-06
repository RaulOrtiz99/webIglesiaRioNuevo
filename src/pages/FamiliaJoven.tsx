import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, ChevronRight, Image, Music, Camera } from 'lucide-react';

const events = [
  {
    title: 'Noche de Adoración',
    date: '15 Mayo, 2025',
    time: '7:00 PM',
    location: 'Auditorio Principal',
    image: 'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Campamento Juvenil',
    date: '5-7 Junio, 2025',
    time: 'Todo el día',
    location: 'Montañas Verdes',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Taller de Liderazgo',
    date: '20 Mayo, 2025',
    time: '5:00 PM',
    location: 'Sala Multiusos',
    image: 'https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const sermonSeries = [
  {
    title: 'Identidad en Cristo',
    description: 'Descubre quién eres realmente en Cristo y vive de acuerdo a tu verdadera identidad.',
    episodes: 5,
    image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Relaciones Saludables',
    description: 'Aprende a construir relaciones que honren a Dios y te ayuden a crecer como persona.',
    episodes: 4,
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Fe en Acción',
    description: 'Cómo vivir una fe relevante y práctica en el mundo actual.',
    episodes: 6,
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const galleryImages = [
  'https://images.pexels.com/photos/8942790/pexels-photo-8942790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6646947/pexels-photo-6646947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/8101615/pexels-photo-8101615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/8101668/pexels-photo-8101668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const FamiliaJoven = () => {
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: eventsRef, inView: eventsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: sermonsRef, inView: sermonsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Familia Joven';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-celestial-800 text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1311244/pexels-photo-1311244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
                  src="https://images.pexels.com/photos/8101501/pexels-photo-8101501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jóvenes" 
                  className="rounded-lg shadow-md relative z-10"
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

      {/* Activities section */}
      <section id="actividades" className="py-20 bg-gray-50" ref={eventsRef}>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Próximas Actividades</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-anim">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                  <a 
                    href="#" 
                    className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center"
                  >
                    Más detalles <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="btn-outline"
            >
              Ver Todas las Actividades
            </a>
          </div>
        </div>
      </section>

      {/* Sermons section */}
      <section className="py-20 bg-white" ref={sermonsRef}>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Series de Prédicas para Jóvenes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-anim">
            {sermonSeries.map((series, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={series.image} 
                    alt={series.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white font-medium">
                      {series.episodes} episodios
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{series.title}</h3>
                  <p className="text-gray-600 mb-4">{series.description}</p>
                  <a 
                    href="#" 
                    className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 inline-block w-full text-center"
                  >
                    Ver Serie
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section className="py-20 bg-gray-50" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Galería de Imágenes</h2>
            <a 
              href="#" 
              className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center"
            >
              Ver todas <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-anim">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Galería ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full text-celestial-800">
                    <Image size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-celestial-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
                <p className="text-gray-600 mb-6">
                  ¿Tienes preguntas sobre Familia Joven? Estamos aquí para ayudarte. Ponte en contacto con nosotros.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <User size={20} className="text-celestial-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Samuel Torres</h4>
                      <p className="text-sm text-gray-500">Pastor de Jóvenes</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Mail size={20} className="text-celestial-600" />
                    </div>
                    <span className="text-gray-600">jovenes@rionuevo.org</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone size={20} className="text-celestial-600" />
                    </div>
                    <span className="text-gray-600">+123 456 7895</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-celestial-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <Instagram size={20} className="text-celestial-600" />
                    </div>
                    <span className="text-gray-600">@rionuevo.jovenes</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.pexels.com/photos/7097449/pexels-photo-7097449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Contacto" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold">Únete a Nosotros</h3>
                  <p className="text-sm opacity-90">Viernes 7:00 PM - Auditorio Joven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { User, Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default FamiliaJoven;