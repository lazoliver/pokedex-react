import React, { useState } from 'react';
import api from './services/api'

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ typedPokemon, setTypedPokemon ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.prevent.default();
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
  </div>
};

export default App;