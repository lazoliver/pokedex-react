import React, { useState } from 'react';
import api from './services/api'

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [ error, setError ] = useState(null);
  const [ typedPokemon, setTypedPokemon ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!typedPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${typedPokemon}`);
      setPokemon(response.data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError("Pokemon não encontrado!");
      setIsLoading(false);
      setPokemon(null);
    }
  };
  return(
    <div>
      <h1>Pokedex Api do Mestre Wilian</h1>
        <p>
          Digite o nome ou id do pokemon para começar!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            value={typedPokemon}
            placeholder="Nome do Pokemon ou ID"
            onChange={handleChange}  
          />
          <button type="submit">
            {isLoading ? (
              <span>Carregando...</span>
            ) : (
              <>
                Buscar
              </>
            )}
          </button>
        </form>
        {
          pokemon && (
            <div key={pokemon.id}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div>
                    <h2>{pokemon.name}</h2>
                    <img
                      src={pokemon.sprites['front-default']}
                      alt={pokemon.name}
                    />
                  </div>
                  <div>
                    <span>
                      <strong>Type</strong> : {pokemon.types[0].type.name}
                    </span>
                    <span>
                      <strong>ID</strong> : {pokemon.id}
                    </span>
                  </div>
                </>
              )}
            </div>
          )
        }
    </div>
  )
};

export default App;