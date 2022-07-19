import { ButtonBackToTopLayout } from "./ButtonBackToTop.styles";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ButtonBackToTop = () => {
  return (
    <ButtonBackToTopLayout.Container onClick={scrollToTop}>
      back to top
    </ButtonBackToTopLayout.Container>
  );
};
