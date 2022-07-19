import { AnimatePresence } from "framer-motion";
import { useWindowScrollPosition } from "../../hooks";
import { ButtonBackToTopLayout } from "./ButtonBackToTop.styles";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ButtonBackToTop = () => {
  let scrollPosition = useWindowScrollPosition();
  return (
    <AnimatePresence>
      {scrollPosition.scrollY > 200 && (
        <ButtonBackToTopLayout.Container
          onClick={scrollToTop}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          back to top
        </ButtonBackToTopLayout.Container>
      )}
    </AnimatePresence>
  );
};
