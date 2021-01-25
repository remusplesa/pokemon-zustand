import React, { useState } from "react";
import useStore from "../dataStore/store";
import Chart from "./Chart";

const PokeCard = ({ pokemon }) => {
  const selected = useStore((state) => state.selected);
  const setSelected = useStore((state) => state.setSelected);
  const language = useStore((state) => state.language);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      key={pokemon.id}
      className="card m-3"
      style={{ width: 320 }}
      onClick={() => {
        setIsSelected(!isSelected);

        if (selected.includes(pokemon)) {
          setSelected(selected.filter((e) => e !== pokemon));
        } else {
          setSelected([...selected, pokemon]);
        }
      }}
    >
      <div className="card-header">
        <h3>
          {pokemon.name[language]}
          {selected.includes(pokemon) && <span> ✅</span>}
        </h3>
      </div>
      <div className="card-body flex-row">
        <h4>
          {pokemon.type.map((t) => (
            <span
              key={pokemonTypes[t]}
              className="badge-pill badge-info mr-1 pb-1 pt-1"
            >
              {t} {pokemonTypes[t]} {"  "}
            </span>
          ))}
        </h4>
      </div>
      <div className="card-footer">
        <Chart
          hp={pokemon.base["HP"]}
          attack={pokemon.base["Attack"]}
          defense={pokemon.base["Defense"]}
          spAttack={pokemon.base["Sp. Attack"]}
          spDefense={pokemon.base["Sp. Defense"]}
          speed={pokemon.base["Speed"]}
        />
      </div>
    </div>
  );
};

const pokemonTypes = {
  Fire: "🔥",
  Water: "🌊",
  Grass: "🌳",
  Poison: "💥",
  Normal: "❔",
  Flying: "🌬",
  Bug: "🐛",
  Ground: "🌍",
  Electric: "⚡",
  Fairy: "😈",
  Fighting: "👊",
  Ice: "❄",
  Ghost: "👻",
  Dragon: "🐉",
  Steel: "⛓",
  Rock: "⛰",
  Psychic: "✨",
  Dark: "🌑",
};

export default PokeCard;
