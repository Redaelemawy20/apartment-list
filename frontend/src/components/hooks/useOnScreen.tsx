import { useEffect, useRef, useState } from 'react';

interface Options extends IntersectionObserverInit {}

function useOnScreen<T extends Element>(
  options?: Options
): [React.RefObject<T>, 0 | 1] {
  const ref = useRef<T>(null);

  const [isVisible, setIsVisible] = useState<0 | 1>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && isVisible === 0) {
        if (isVisible === 0) setIsVisible(1);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref as React.RefObject<T>, isVisible];
}

export default useOnScreen;
