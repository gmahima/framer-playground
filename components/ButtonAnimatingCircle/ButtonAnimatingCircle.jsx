import { ButtonAnimatingCircleLayout } from "./ButtonAnimatingCircle.styles";
import { useTheme } from "styled-components";
import { useMemo } from "react";
export const ButtonAnimatingCircle = ({ children }) => {
  const theme = useTheme();
  const circleVariants = useMemo(() => {
    return {
      rest: {
        y: "110%",
      },
      hover: {
        y: 0,
        transition: {
          type: "ease",
          ease: "easeIn",
        },
      },
      // animate: {
      //   y: "-110%",
      //   transition: {
      //     duration: 0.3,
      //   },
      // },
    };
  }, [theme]);
  return (
    <ButtonAnimatingCircleLayout.Container
      initial="rest"
      whileHover="hover"
      animate="animate"
    >
      <ButtonAnimatingCircleLayout.ChildrenContainer>
        asdf
      </ButtonAnimatingCircleLayout.ChildrenContainer>
      <ButtonAnimatingCircleLayout.CircleContainer variants={circleVariants}>
        {/* <ButtonAnimatingCircleLayout.Circle></ButtonAnimatingCircleLayout.Circle> */}
        {/* <ButtonAnimatingCircleLayout.Container>
        {children}
      </ButtonAnimatingCircleLayout.Container> */}
      </ButtonAnimatingCircleLayout.CircleContainer>
    </ButtonAnimatingCircleLayout.Container>
  );
};
