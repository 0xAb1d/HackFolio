import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Custom hook that uses the Intersection Observer API to detect when an element 
 * is visible in the viewport.
 * 
 * @param options - Intersection Observer options
 * @returns A tuple with [ref, isIntersecting] where ref is the element reference
 *          and isIntersecting is a boolean indicating if the element is visible
 */
export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  once = true,
}: UseIntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Handler for intersection changes
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);
      
      // If element has intersected and we only want to observe once, disconnect
      if (once && entry.isIntersecting) {
        observerRef.current?.disconnect();
      }
    };

    // Create and setup new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root,
      rootMargin,
      threshold,
    });
    
    observerRef.current.observe(currentElement);

    return () => {
      // Clean up observer on unmount
      observerRef.current?.disconnect();
    };
  }, [root, rootMargin, threshold, once]);

  return [elementRef, isIntersecting];
}

export default useIntersectionObserver; 