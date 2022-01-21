import { css } from "@emotion/css";

export const ulStyles = css`
  display: flex;
  list-style: none;
  position: absolute;
  bottom: 0;
`;

export const liStyles = css`
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background: gray;
  }
`;

export const currentPageStyles = css`
  border: 1px solid red;
`;
