import { useMemo } from "react";

export const usePagesArray = totalPages => {
  const array = [];
  const pagesArray = useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      array.push(i + 1);
    }
    return array;
  }, [totalPages]);
  return pagesArray;
};
