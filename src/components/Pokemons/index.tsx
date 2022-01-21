import React from "react";
import {
  pokemonRow,
  loading,
  pokemonsContainer,
  pokemonsListContainer,
} from "./styles";

interface IPokemonData {
  name: string;
  url: string;
}

interface IProps {
  pokemonsData: IPokemonData[];
}

const Pokemons = ({ pokemonsData }: IProps): JSX.Element => {
  if (!pokemonsData)
    return (
      <div className={pokemonsContainer}>
        <p className={loading}>...loading</p>
      </div>
    );

  return (
    <div className={pokemonsContainer}>
      <div className={pokemonsListContainer}>
        {pokemonsData?.map((pokemonData: IPokemonData) => {
          return (
            <p key={pokemonData.name} className={pokemonRow}>
              {pokemonData.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export { Pokemons };
