import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Users, Heart, BookOpen, Globe } from 'lucide-react';

interface Leadership {
  id: number;
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const QuienesSomos = () => {
  const [, setLeaders] = useState<Leadership[]>([]);
  
  // Definición de valores
  const values: Value[] = [
    {
      id: 1,
      title: "Fe Auténtica",
      description: "Creemos en una relación genuina con Dios que transforma vidas",
      icon: <Heart size={24} className="text-celestial-500" />
    },
    {
      id: 2,
      title: "Comunidad",
      description: "Vivimos en conexión unos con otros, apoyándonos mutuamente",
      icon: <Users size={24} className="text-celestial-500" />
    },
    {
      id: 3,
      title: "Enseñanza Bíblica",
      description: "La Palabra de Dios es nuestro fundamento y guía",
      icon: <BookOpen size={24} className="text-celestial-500" />
    },
    {
      id: 4,
      title: "Impacto Social",
      description: "Buscamos transformar nuestra sociedad con el amor de Cristo",
      icon: <Globe size={24} className="text-celestial-500" />
    }
  ];

  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: historyRef, inView: historyInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });
//   const { ref: leadersRef, inView: leadersInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Quiénes Somos';

    // Simulación de fetch para datos de líderes
    const mockLeaders = [
      {
        id: 1,
        name: "Pastor Juan Pérez",
        role: "Pastor Principal",
        bio: "Más de 20 años sirviendo a la comunidad con pasión y dedicación.",
        image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 2,
        name: "Pastora María Gómez",
        role: "Pastora de Alabanza",
        bio: "Liderando el ministerio de adoración con excelencia y corazón.",
        image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 3,
        name: "Pastor Carlos Ríos",
        role: "Pastor de Jóvenes",
        bio: "Guiando a la nueva generación con visión y creatividad.",
        image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ];
    setLeaders(mockLeaders);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero section */}
      {/* <div className="relative bg-celestial-800 text-white py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Iglesia Río Nuevo</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Una comunidad de fe donde cada persona encuentra propósito, familia y transformación.
            </p>
          </div>
        </div>
      </div> */}

      {/* Introducción */}
      <section className="py-20 bg-white" ref={introRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
              <h2 className="text-3xl font-bold mb-6 text-celestial-600">Quienes Somos</h2>
              <p className="text-gray-600 mb-4">
                Iglesia Río Nuevo nació del anhelo profundo de ver a Dios obrar con poder. Más que una fecha o un lugar, su origen está en la fe de unos pocos que creyeron en el mover del Espíritu. Lo que comenzó como una reunión sencilla entre creyentes hambrientos de la presencia de Dios, hoy es una comunidad llena de vida, esperanza y transformación.

El nombre "Río Nuevo" no es casualidad: nace de la visión profética de Ezequiel 47, donde un río fluye desde el templo trayendo sanidad, vida y restauración a todo lo que toca. Así también creemos que el Espíritu de Dios fluye entre nosotros, renovando corazones, familias y ciudades.
              </p>
              <p className="text-gray-600 mb-6">
                El nombre "Río Nuevo" proviene de la visión de Ezequiel 47, donde un río de vida fluye desde el templo, 
                llevando sanidad y restauración a todo lo que toca.
              </p>
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-celestial-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-celestial-600">25+</p>
                  <p className="text-gray-600">Años de ministerio</p>
                </div>
                <div className="bg-celestial-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-celestial-600">1,200+</p>
                  <p className="text-gray-600">Miembros activos</p>
                </div>
              </div> */}
            </div>
            <div className={`transition-all duration-1000 delay-300 ${introInView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
              <div className="relative">
                <div className="bg-celestial-100 rounded-lg absolute -top-4 -left-4 w-full h-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Historia de la iglesia" 
                  className="rounded-lg shadow-md relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Fe */}
      <section className="py-20 bg-gray-50" ref={historyRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-celestial-600 mb-4">Nuestra Fe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creemos en las doctrinas fundamentales del cristianismo histórico
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${historyInView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Dios:</span> Creemos en un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Jesucristo:</span> Creemos en Jesucristo como Hijo de Dios, su nacimiento virginal, vida sin pecado, milagros, muerte expiatoria, resurrección corporal y ascensión.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Biblia:</span> Creemos que la Biblia es la Palabra de Dios, inspirada e infalible, autoridad suprema para fe y conducta.
                  </p>
                </div>
                <div className="flex items-start">
                  <ChevronRight size={20} className="text-celestial-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-medium">Salvación:</span> Creemos que la salvación es por gracia mediante la fe en Cristo, no por obras, y resulta en una vida transformada.
                  </p>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${historyInView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-celestial-600 mb-4">Nuestra Declaración de Fe</h3>
                <p className="text-gray-600 mb-6">
                  Como parte de la comunidad cristiana mundial, suscribimos al Credo de los Apóstoles y mantenemos las doctrinas centrales del protestantismo histórico.
                </p>
                <div className="bg-celestial-50 p-4 rounded-lg border border-celestial-100">
                  <p className="text-gray-700 italic">
                    "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna." - Juan 3:16
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-celestial-600 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principios fundamentales que guían todo lo que hacemos
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${valuesInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {values.map(value => (
              <div key={value.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderazgo */}
      {/* <section className="py-20 bg-gray-50" ref={leadersRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a quienes Dios ha puesto para guiar esta comunidad
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${leadersInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {leaders.map(leader => (
              <div key={leader.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image_url} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                  <p className="text-celestial-600 mb-3">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Llamado a acción */}
      {/* <section className="py-16 bg-celestial-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para ser parte de nuestra familia?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Te invitamos a visitarnos este domingo y descubrir cómo puedes crecer en tu fe y servir a otros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contacto" 
              className="bg-white text-celestial-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Visítanos
            </a>
            <a 
              href="/ministerios" 
              className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Conoce nuestros ministerios
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default QuienesSomos;