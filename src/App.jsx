import React, { useState } from 'react';

const App = () => {
  const [ pokemon, setPokemon ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ typedPokemon, setTypedPokemon ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };

  

}