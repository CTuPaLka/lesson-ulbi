import React from "react";
import { usePagesArray } from "../../../hooks/usePagesArray";

function Pagination({ totalPages, pagesNumber, changePage }) {
  const pagesArray = usePagesArray(totalPages);
  return (
    <div className="pagesNumbers">
      {pagesArray.map(i => (
        <span
          key={i}
          className={
            i === pagesNumber
              ? "pagesNumber pagesNumbersCurrent"
              : "pagesNumber"
          }
          onClick={() => changePage(i)}
        >
          {i}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
