import { useState, useEffect } from "react";

const computeScrollPosition = () => {
  if (typeof window === "undefined") {
    return {
      scrollX: 0,
      scrollY: 0,
    };
  } else {
    return {
      scrollX: window.scrollX || window.pageXOffset,
      scrollY: window.scrollY || window.pageYOffset,
    };
  }
};

/**
 *
 * useWindowScrollPosition hook
 * A React hook to get the scroll position of the window
 *
 * @returns an object containing scrollX and scrollY values
 */
function useWindowScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(computeScrollPosition);
  /**
   * Recalculate on scroll
   */
  const handleScrollPositionChange = () => {
    let s = computeScrollPosition();
    setScrollPosition(s);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPositionChange);

    return () =>
      window.removeEventListener("scroll", handleScrollPositionChange);
  }, []);
  /**
   * Recalculate on resize
   */
  useEffect(() => {
    window.addEventListener("resize", handleScrollPositionChange);

    return () =>
      window.removeEventListener("resize", handleScrollPositionChange);
  }, []);

  return scrollPosition;
}

export { useWindowScrollPosition };
