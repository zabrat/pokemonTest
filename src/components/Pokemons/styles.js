import { css } from "@emotion/css";

export const pokemonRow = css`
  text-align: center;
  font-size: 25px;
  border-bottom: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  &:hover {
    background-color: #FFDE00;
  }
`;

export const loading = css`
  font-size: 40px;
`;

export const pokemonsListContainer = css`
  width: 30%;
`;

export const pokemonsContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
