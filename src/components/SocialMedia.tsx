import React from 'react';
import { Facebook, Instagram, Youtube, Video } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: <Facebook size={24} className="text-white" />,
    username: '@iglesiarionuevo',
    color: 'bg-blue-600',
    description: 'Actualizaciones diarias y eventos'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram size={24} className="text-white" />,
    username: '@iglesiarionuevo',
    color: 'bg-pink-600',
    description: 'Fotos y momentos especiales'
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    icon: <Youtube size={24} className="text-white" />,
    username: 'Iglesia Río Nuevo',
    color: 'bg-red-600',
    description: 'Predicas y enseñanzas completas'
  },
  {
    platform: 'TikTok',
    url: 'https://tiktok.com',
    icon: <Video size={24} className="text-white" />,
    username: '@familiajoven',
    color: 'bg-black',
    description: 'Contenido juvenil y dinámico'
  }
];

const SocialMedia = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Síguenos en Redes Sociales</h2>
          <p className="text-gray-600 mt-4">
            Mantente conectado con nosotros y recibe contenido inspirador a diario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto stagger-anim">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                <div className={`${social.color} p-6 flex justify-between items-center`}>
                  <span className="text-lg font-bold text-white">{social.platform}</span>
                  {social.icon}
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-800 font-medium mb-2">{social.username}</p>
                  <p className="text-gray-600 text-sm">{social.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-2 border-2 border-gray-300 rounded-md text-gray-700 font-medium transition-colors group-hover:border-celestial-500 group-hover:text-celestial-600">
                    Seguir
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Comparte tus experiencias usando el hashtag <span className="font-bold text-celestial-600">#RíoNuevo</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;