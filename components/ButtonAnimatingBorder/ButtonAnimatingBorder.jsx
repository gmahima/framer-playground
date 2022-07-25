import { ButtonAnimatingBorderLayout } from "./ButtonAnimatingBorder.styles";
const borderVariantsOut = {
    rest: {
      scaleX: 0,
      transition: {
        duration: 0.1,
        type: "ease",
        ease: "easeIn"
      }
    },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.1,
        type: "ease",
        ease: "easeOut"
      }
    }
  };
  const borderVariantsIn = {
    rest: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        type: "ease",
        ease: "easeIn"
      }
    },
    hover: {
      scaleX: 0,
      transition: {
        duration: 0.3,
        type: "ease",
        ease: "easeOut"
      }
    }
  };
export const ButtonAnimatingBorderOut = ({ children }) => {
  return (
    <ButtonAnimatingBorderLayout.Container
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <ButtonAnimatingBorderLayout.Border
        variants={borderVariantsOut}
      ></ButtonAnimatingBorderLayout.Border>
    </ButtonAnimatingBorderLayout.Container>
  );
};
export const ButtonAnimatingBorderIn = ({ children }) => {
  return (
    <ButtonAnimatingBorderLayout.Container
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <ButtonAnimatingBorderLayout.Border
        variants={borderVariantsIn}
      ></ButtonAnimatingBorderLayout.Border>
    </ButtonAnimatingBorderLayout.Container>
  );
};
