import { WebflowLayout } from "./Webflow.styles";
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
        duration: 0.1,
        type: "ease",
        ease: "easeIn"
      }
    },
    hover: {
      scaleX: 0,
      transition: {
        duration: 0.1,
        type: "ease",
        ease: "easeOut"
      }
    }
  };
export const ButtonAnimatingBorderOut = ({ children }) => {
  return (
    <WebflowLayout.ButtonBorderBottomContainer
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <WebflowLayout.ButtonBorderBottomBorder
        variants={borderVariantsOut}
      ></WebflowLayout.ButtonBorderBottomBorder>
    </WebflowLayout.ButtonBorderBottomContainer>
  );
};
export const ButtonAnimatingBorderIn = ({ children }) => {
  return (
    <WebflowLayout.ButtonBorderBottomContainer
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <WebflowLayout.ButtonBorderBottomBorder
        variants={borderVariantsIn}
      ></WebflowLayout.ButtonBorderBottomBorder>
    </WebflowLayout.ButtonBorderBottomContainer>
  );
};
