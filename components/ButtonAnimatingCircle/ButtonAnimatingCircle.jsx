import { ButtonAnimatingCircleLayout } from "./ButtonAnimatingCircle.styles";
import { useTheme } from "styled-components";
import { useEffect, useMemo } from "react";
import { motion, useAnimationControls } from "framer-motion";
const circleVariants = {
  rest: {
    scale: 0,
  },
  animate: {},
  hover: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hoverOut: {
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const ButtonAnimatingCircle = ({ children, styleVariant }) => {
  const controls = useAnimationControls();

  const theme = useTheme();
  const circleContainerVariants = useMemo(() => {
    return {
      rest: {
        y: "110%",
      },
      hover: {
        y: ["110%", "0%"],
        transition: {
          type: "ease",
          ease: "easeIn",
          duration: 0.5,
        },
      },
      hoverOut: {
        y: ["0%", "-110%", "110%"],
      },
      animate: {
        // y: "-110%",
        // transition: {
        //   duration: 0.3,
        // },
      },
    };
  }, [theme]);
  const childrenVariants = useMemo(() => {
    return {
      hover: {
        color: theme.colors.bg,
        transition: {
          type: "ease",
          ease: "easeIn",
          duration: 0.5,
        },
      },
    };
  }, [theme]);
  return (
    <ButtonAnimatingCircleLayout.Container
      styleVariant={styleVariant}
      initial="rest"
      whileHover="hover"
      animate={controls}
      // onMouseOut={() => {
      //   console.log("hi out");

      // }}
      onMouseLeave={() => {
        console.log("hi");
        controls.start("hoverOut");
      }}
    >
      <ButtonAnimatingCircleLayout.ChildrenContainer
        variants={childrenVariants}
      >
        {children}
      </ButtonAnimatingCircleLayout.ChildrenContainer>
      <ButtonAnimatingCircleLayout.OverflowDiv>
        <ButtonAnimatingCircleLayout.CircleContainer
          variants={circleContainerVariants}
        >
          <ButtonAnimatingCircleLayout.Circle
            variants={circleVariants}
          ></ButtonAnimatingCircleLayout.Circle>
          {/* <ButtonAnimatingCircleLayout.Container>
        {children}
      </ButtonAnimatingCircleLayout.Container> */}
        </ButtonAnimatingCircleLayout.CircleContainer>
      </ButtonAnimatingCircleLayout.OverflowDiv>
    </ButtonAnimatingCircleLayout.Container>
  );
};
