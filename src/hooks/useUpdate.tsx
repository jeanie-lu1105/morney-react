import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps);
};

export { useUpdate };
