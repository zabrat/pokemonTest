import { useMemo, useState } from "react";
import { cx } from "@emotion/css";
import { ulStyles, liStyles, currentPageStyles } from "./styles";

interface IProps {
  totalItems: number;
  itemsPerPage: number;
  getCurrentPage: (pageNumber: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  getCurrentPage,
}: IProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => totalItems / itemsPerPage,
    [totalItems, itemsPerPage]
  );

  const pagesList = useMemo(() => {
    const result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    return result;
  }, [totalPages]);

  return (
    <ul className={ulStyles}>
      {pagesList.map((pageNumber: number) => (
        <li
          className={cx(liStyles, {
            [currentPageStyles]: currentPage === pageNumber,
          })}
          key={pageNumber}
          id={pageNumber.toString()}
          onClick={() => {
            setCurrentPage(pageNumber);
            getCurrentPage(pageNumber);
          }}
        >
          {pageNumber}
        </li>
      ))}
    </ul>
  );
};

export { Pagination };
