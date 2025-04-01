import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [search, setSearch] = useState('');
  const [character, setCharacter] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [portalVisible, setPortalVisible] = useState(true);
  

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setLoading(true);
    setCharacter(null);
    setNotFound(false);
    setPortalVisible(true);

    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}`
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        setCharacter(data.results[0]);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 pt-[15vh] text-center flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-lime-300 mb-6 animate-pulse">
        ¡Busca tu personaje favorito!
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Ej: Rick, Morty..."
          className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-lime-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-lime-500 transition"
        >
          Buscar
        </button>
      </form>

      {loading && <p className="text-lime-300">Abriendo portal...</p>}

      {notFound && (
        <p className="text-red-400">Ese personaje está en otra dimensión...</p>
      )}

      {character && (
        <div className="relative flex flex-col items-center  mt-[4vh]">
          {/* Portal */}
          {portalVisible && (
            <motion.img
              src="portal.gif"
              alt="Portal"
              className="w-[480px] h-[480px] object-contain z-10"
              initial={{ scale: 1, rotate: 0, opacity: 1 }}
              animate={{ scale: 0.3, rotate: -720 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 3.5 }}
            />
          )}

          {/* Card saliendo del portal */}
          <motion.div
            className="absolute z-20 w-72 bg-gray-800 text-white rounded-xl shadow-[0_0_25px_#84cc16] p-4"
            initial={{ scale: 0.3, rotate: 0, opacity: 0 }}
            animate={{ scale: 1, rotate: 720, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut', delay: 1 }}
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-auto rounded-t-xl mb-3"
            />
            <h2 className="text-lime-300 text-xl font-bold">
              {character.name}
            </h2>
            <p>
              Estado: {character.status === 'Alive' ? 'Vivo' : character.status}
            </p>
            <p>
              Especie:{' '}
              {character.species === 'Human' ? 'Humano' : character.species}
            </p>
            <p>
              Origen:{' '}
              {character.origin.name === 'unknown'
                ? 'Desconocido'
                : character.origin.name}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
