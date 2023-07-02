import { useEffect, useRef } from "react";

export const useObserver = (ref, canload, isLoading, callback) => {
  const observer = useRef();
  useEffect(() => {
    // debugger;
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canload) {
        callback();
      }
    };
    console.log(observer.current);
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
