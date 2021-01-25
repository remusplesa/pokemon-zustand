import React, { useEffect } from "react";

import useStore from "../dataStore/store";
import PokeCard from "./PokeCard";

const pokemonsURL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

const Pokemons = () => {
  const setPokemons = useStore((state) => state.setPokemons);
  const results = useStore((state) => state.results());
  const selected = useStore((state) => state.selected);

  useEffect(() => {
    fetch(pokemonsURL)
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemons(pokemon);
        console.log(pokemon);
      });
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap  justify-content-center">
        {results.map((p) => (
          <PokeCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
