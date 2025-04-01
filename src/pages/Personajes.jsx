import React, { useEffect, useState } from 'react';

export default function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar personajes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-xl mt-8">Cargando personajes...</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl text-center text-lime-300 mb-10 animate-pulse tracking-wider"  style={{ fontFamily: 'Get Schwifty' }}>
        Personajes del Multiverso
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {personajes.map((personaje) => (
          <div
            key={personaje.id}
             className="bg-gray-800 text-white rounded-xl border border-gray-700 ring-2 ring-lime-400/20 shadow-[inset_0_-3px_0_rgba(0,0,0,0.6),0_8px_20px_rgba(0,0,0,0.6),0_12px_30px_rgba(132,204,22,0.3)] hover:shadow-[inset_0_-3px_0_rgba(0,0,0,0.6),0_12px_25px_rgba(0,0,0,0.7),0_18px_40px_rgba(132,204,22,0.6)] transition-transform duration-300 transform hover:-translate-y-2 hover:scale-[1.05] hover:rotate-[1deg] mx-auto w-full max-w-[200px] cursor-pointer"
          >
            <img
              src={personaje.image}
              alt={personaje.name}
              className="w-full h-auto object-contain rounded-t-xl"
            />
            <div className="p-3 text-xs space-y-1">
              <h2 className="text-base font-semibold text-lime-300 text-center">
                {personaje.name}
              </h2>
              <p className="text-center">Estado: {personaje.status === 'Alive' ? 'Viv@' : personaje.status}</p>
              <p className="text-center">Especie: {personaje.species === 'Human' ? 'Humano' : personaje.species}</p>
              <p className="text-center">Origen: {personaje.origin.name === 'unknown' ? 'Desconocido' : personaje.origin.name }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
