import { useState, useCallback } from "react";
import useSWR from "swr";
import axios from "axios";
import { Pagination } from "../Pagination";
import { Pokemons } from "../Pokemons";

const pokemonFetcher = (url: string) => axios.get(url).then((res) => res.data);

const MainPage = (): JSX.Element => {
  const [currentOffset, setCurrentOffset] = useState(20);

  const { data } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}`,
    pokemonFetcher
  );

  const changeOffset = useCallback((pageNumber: number) => {
    setCurrentOffset(pageNumber * 20);
  }, []);

  return (
    <>
      <Pokemons pokemonsData={data?.results} />
      <Pagination
        totalItems={data?.count}
        itemsPerPage={20}
        getCurrentPage={changeOffset}
      />
    </>
  );
};

export { MainPage };
