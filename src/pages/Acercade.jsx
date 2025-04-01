import React from 'react';
export default function Acerca() {
    return (
      <div className="max-w-2xl mx-auto text-center font-inter text-lime-300 p-8">
      <h1 className="text-4xl font-extrabold mb-4">Acerca de</h1>
      <p className="mb-6">
        Esta aplicación conecta con la API oficial de Rick and Morty y abre portales
        interdimensionales para mostrarte personajes de todo el multiverso.
      </p>
      <p className="mb-6">
        Ha sido desarrollada en React con una pizca de Tailwind, framer-motion y muchas referencias
        que Rick nunca aprobaría sobrio.
      </p>
      <h2 className="text-2xl  font-bold mt-36 mb-2  font-orbitron ">🧪 Curiosidades multiversales:</h2>
      <ul className="text-left space-y-4 mt-6 font-inter">
  {[
    'El portal ha sido abierto más veces que el microondas de la Ciudadela.',
    'Morty sigue sin saber cómo funciona esta app.',
    'Rick dijo “Wubba Lubba Dub Dub” y eso lo tomamos como visto bueno.',
    'Esta es la dimensión donde tu búsqueda sí tiene sentido.'
  ].map((linea, i) => (
    <li
      key={i}
      className="flex items-start gap-2 text-lime-200 hover:text-white hover:translate-x-1 transition-all duration-300"
    >
      <span className="text-xl">🧪</span>
      <span>{linea}</span>
    </li>
  ))}
</ul>


    </div>
    
    )
  }
  