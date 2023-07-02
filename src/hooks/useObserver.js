import { useEffect } from "react";

export const useObserver = (ref, canload, isLoading, callback) => {
  useEffect(() => {
    // debugger;
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
      }
    };
    console.log(observer.current);
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading]);
};
