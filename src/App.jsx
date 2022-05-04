import React, { useState } from 'react';

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ typedPokemon, setTypedPokemon ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
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

}