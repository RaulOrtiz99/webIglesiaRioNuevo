import React from 'react';
import { DollarSign, CreditCard, Landmark, Heart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const donationOptions = [
  {
    id: 1,
    title: 'Diezmos y Ofrendas',
    icon: <DollarSign size={24} className="text-celestial-500" />,
    description: 'Apoya el ministerio de la iglesia y sus actividades regulares.',
  },
  {
    id: 2,
    title: 'Misiones',
    icon: <Heart size={24} className="text-celestial-500" />,
    description: 'Contribuye a nuestros proyectos misioneros en diferentes partes del mundo.',
  },
  {
    id: 3,
    title: 'Construcción',
    icon: <Landmark size={24} className="text-celestial-500" />,
    description: 'Apoya la expansión y mejora de nuestras instalaciones.',
  }
];

const Donation = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-celestial-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Apoya Nuestra Misión</h2>
          <p className="text-gray-600 mt-4">
            Tu generosidad hace posible que continuemos compartiendo el mensaje de esperanza y amor a nuestra comunidad y más allá.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 scale-95'}`}>
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-full">
              <img 
                src="https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Donación" 
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sembrando Semillas de Fe</h3>
                <p className="mb-0">Tu donación tiene un impacto eterno</p>
              </div>
            </div>
            
            {/* Donation form */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Selecciona un Fondo</h3>
              
              <div className="space-y-4 mb-6">
                {donationOptions.map((option) => (
                  <div 
                    key={option.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-start hover:border-celestial-500 transition-colors cursor-pointer"
                  >
                    <div className="mr-4 mt-1">{option.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{option.title}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <a 
                  href="#" 
                  className="bg-celestial-500 hover:bg-celestial-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center w-full"
                >
                  <CreditCard size={18} className="mr-2" /> Donar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;