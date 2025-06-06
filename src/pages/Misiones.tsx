import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Globe, Heart, Award, Users, ArrowRight, MapPin } from 'lucide-react';

const missionaries = [
  {
    name: 'Familia Rodríguez',
    location: 'Perú',
    since: '2018',
    focus: 'Plantación de iglesias',
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Trabajando en comunidades rurales para establecer iglesias y centros de formación para líderes locales.'
  },
  {
    name: 'Carlos y María Gómez',
    location: 'India',
    since: '2020',
    focus: 'Educación y desarrollo comunitario',
    image: 'https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Estableciendo escuelas y programas de desarrollo para comunidades vulnerables en zonas rurales.'
  },
  {
    name: 'Elena Martínez',
    location: 'Marruecos',
    since: '2021',
    focus: 'Trabajo con mujeres',
    image: 'https://images.pexels.com/photos/4350096/pexels-photo-4350096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Capacitando a mujeres en habilidades laborales y brindando apoyo espiritual a través de grupos pequeños.'
  }
];

const projects = [
  {
    title: 'Agua Limpia',
    location: 'África Oriental',
    description: 'Perforación de pozos y sistemas de purificación de agua en comunidades sin acceso a agua potable.',
    goal: '$15,000',
    raised: '$9,500',
    image: 'https://images.pexels.com/photos/6647135/pexels-photo-6647135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Educación para Todos',
    location: 'Centroamérica',
    description: 'Construcción de escuelas y provisión de materiales educativos para niños en zonas marginadas.',
    goal: '$20,000',
    raised: '$14,800',
    image: 'https://images.pexels.com/photos/8422136/pexels-photo-8422136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Ayuda Humanitaria',
    location: 'Oriente Medio',
    description: 'Distribución de alimentos, medicinas y artículos de primera necesidad en zonas de conflicto.',
    goal: '$12,000',
    raised: '$5,200',
    image: 'https://images.pexels.com/photos/6646982/pexels-photo-6646982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Misiones = () => {
  const { ref: introRef, inView: introInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: missionariesRef, inView: missionariesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Misiones';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero section */}
      <div className="relative bg-celestial-800 text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1029224/pexels-photo-1029224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Misiones</h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl">
              Iglesia Río Nuevo, una comunidad comprometida con llevar esperanza y transformación a todas las naciones.
            </p>
            <a 
              href="#proyectos" 
              className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Nuestros Proyectos
            </a>
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Nuestra Visión Misionera</h2>
            <p className="text-gray-600 mt-6">
              En Iglesia Río Nuevo creemos que estamos llamados a compartir el amor de Dios más allá de nuestras fronteras. Nuestra visión es ver transformación espiritual, social y económica en comunidades alrededor del mundo a través del poder del evangelio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-100 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Alcance Global</h3>
              <p className="text-gray-600">
                Apoyamos misioneros en diferentes continentes, llevando el mensaje de esperanza a diversas culturas y contextos.
              </p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-300 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Servicio Integral</h3>
              <p className="text-gray-600">
                Nuestros proyectos atienden tanto necesidades espirituales como físicas, reflejando el amor completo de Cristo.
              </p>
            </div>
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 delay-500 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Participación Local</h3>
              <p className="text-gray-600">
                Cada miembro de nuestra iglesia puede involucrarse a través de oración, donaciones o viajes misioneros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missionaries section */}
      <section className="py-20 bg-gray-50" ref={missionariesRef}>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nuestros Misioneros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-anim">
            {missionaries.map((missionary, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={missionary.image} 
                    alt={missionary.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{missionary.name}</h3>
                    <span className="bg-celestial-100 text-celestial-800 text-xs px-2 py-1 rounded-full">
                      Desde {missionary.since}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-celestial-500" />
                    <span>{missionary.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{missionary.description}</p>
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Enfoque:</span> {missionary.focus}
                    </p>
                  </div>
                  <a 
                    href="#" 
                    className="text-celestial-600 hover:text-celestial-700 font-medium flex items-center"
                  >
                    Conocer más <ArrowRight size={16} className="ml-1" />
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
              Ver Todos los Misioneros
            </a>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="proyectos" className="py-20 bg-white" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <h2 className="section-title">Proyectos Misioneros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-anim">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-celestial-500" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Recaudado: {project.raised}</span>
                      <span className="text-sm font-medium text-gray-700">Meta: {project.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-celestial-500 h-2.5 rounded-full" 
                        style={{ width: `${(parseInt(project.raised.replace('$', '').replace(',', '')) / parseInt(project.goal.replace('$', '').replace(',', ''))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 inline-block w-full text-center"
                  >
                    Donar a este Proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved section */}
      <section className="py-20 bg-celestial-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">¿Cómo Involucrarte?</h2>
            <p className="text-gray-600 mt-6">
              Hay muchas maneras en las que puedes ser parte de nuestra visión misionera. Cada contribución, sea grande o pequeña, es significativa para el avance del Reino de Dios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Orar</h3>
              <p className="text-gray-600 mb-4">
                Comprométete a orar regularmente por nuestros misioneros y proyectos en diferentes partes del mundo.
              </p>
              <a 
                href="#" 
                className="text-celestial-600 hover:text-celestial-700 font-medium"
              >
                Guía de Oración
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Donar</h3>
              <p className="text-gray-600 mb-4">
                Apoya financieramente a nuestros misioneros y proyectos para que puedan continuar su labor en el campo.
              </p>
              <a 
                href="#" 
                className="text-celestial-600 hover:text-celestial-700 font-medium"
              >
                Donar Ahora
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-celestial-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={30} className="text-celestial-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Ir</h3>
              <p className="text-gray-600 mb-4">
                Únete a uno de nuestros viajes misioneros de corto plazo o considera si Dios te está llamando al campo misionero.
              </p>
              <a 
                href="#" 
                className="text-celestial-600 hover:text-celestial-700 font-medium"
              >
                Próximos Viajes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-celestial-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Testimonio" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Transformación en Acción</h3>
                <p className="text-gray-600 italic mb-6">
                  "Gracias al pozo de agua que construyó la Iglesia Río Nuevo en nuestra aldea, ya no tenemos que caminar 5 kilómetros cada día para conseguir agua. Nuestros niños ahora pueden asistir a la escuela y las enfermedades han disminuido. Estamos eternamente agradecidos por su generosidad."
                </p>
                <p className="font-medium text-gray-800">
                  — Amina, beneficiaria del Proyecto Agua Limpia en Etiopía
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Misiones;