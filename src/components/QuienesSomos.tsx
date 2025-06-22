import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, BookOpen, Globe } from 'lucide-react';

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
      icon: <Heart className="h-6 w-6 text-celestial-600" />
    },
    {
      id: 2,
      title: "Comunidad",
      description: "Vivimos en conexión unos con otros, apoyándonos mutuamente",
      icon: <Users className="h-6 w-6 text-celestial-600" />
    },
    {
      id: 3,
      title: "Enseñanza Bíblica",
      description: "La Palabra de Dios es nuestro fundamento y guía",
      icon: <BookOpen className="h-6 w-6 text-celestial-600" />
    },
    {
      id: 4,
      title: "Impacto Social",
      description: "Buscamos transformar nuestra sociedad con el amor de Cristo",
      icon: <Globe className="h-6 w-6 text-celestial-600" />
    }
  ];

  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: historyRef, inView: historyInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    // Simulación de fetch para datos de líderes
    const mockLeaders = [
      {
        id: 1,
        name: "Pastor Juan Pérez",
        role: "Pastor Principal",
        bio: "Más de 20 años sirviendo a la comunidad con pasión y dedicación.",
        image_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ];
    setLeaders(mockLeaders);
  }, []);

  return (
    <div className="py-12 md:py-20">
      {/* Sección Quienes Somos */}
      <section className="relative bg-white py-12 md:py-20" ref={introRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-celestial-50/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            {/* <span className="inline-block mb-3 text-celestial-600 font-semibold">Nuestra identidad</span> */}
            <h2 className="text-3xl md:text-4xl font-bold text-celestial-600 mb-4">
              Nuestra identidad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una comunidad de fe donde cada persona encuentra propósito, familia y transformación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`transition-all duration-700 ease-out ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Comunidad de la iglesia" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-out delay-150 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600">
                  Iglesia Río Nuevo nació del anhelo profundo de ver a Dios obrar con poder. Lo que comenzó como una reunión sencilla entre creyentes hambrientos de la presencia de Dios, hoy es una comunidad llena de vida, esperanza y transformación.
                </p>
                <p className="text-gray-600">
                  El nombre "Río Nuevo" proviene de la visión de Ezequiel 47, donde un río de vida fluye desde el templo, llevando sanidad y restauración a todo lo que toca.
                </p>
                <div className="pt-4">
                  {/* <button className="inline-flex items-center text-celestial-600 hover:text-celestial-700 font-medium transition-colors">
                    Ver nuestra historia completa
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Fe */}
      <section className="bg-gray-50 py-12 md:py-20" ref={historyRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block mb-3 text-celestial-600 font-semibold">Nuestros fundamentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que creemos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las doctrinas fundamentales que guían nuestra fe y práctica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className={`transition-all duration-700 ease-out ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-celestial-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">La Biblia</h3>
                    <p className="text-gray-600">
                      Creemos que la Biblia es la Palabra de Dios, inspirada e infalible, autoridad suprema para fe y conducta.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-celestial-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Jesucristo</h3>
                    <p className="text-gray-600">
                      Creemos en Jesucristo como Hijo de Dios, su nacimiento virginal, vida sin pecado, milagros, muerte expiatoria y resurrección.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 ease-out delay-150 ${historyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6">
                <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-celestial-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">La Iglesia</h3>
                    <p className="text-gray-600">
                      Creemos en la Iglesia como cuerpo de Cristo, llamada a adorar, servir y proclamar el Evangelio hasta lo último de la tierra.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-celestial-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-celestial-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">La Salvación</h3>
                    <p className="text-gray-600">
                      Creemos que la salvación es por gracia mediante la fe en Cristo, no por obras, y resulta en una vida transformada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-12 md:py-20" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block mb-3 text-celestial-600 font-semibold">Nuestra esencia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valores fundamentales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Principios que guían todo lo que hacemos como comunidad
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-out ${valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {values.map(value => (
              <div 
                key={value.id} 
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-celestial-200 hover:shadow-md transition-all"
              >
                <div className="bg-celestial-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuienesSomos;