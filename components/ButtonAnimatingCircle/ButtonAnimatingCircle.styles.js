import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const CircleContainer = styled(motion.a)`
  ${({ theme }) => css`
    position: absolute;
    left: 0%;
    bottom: 0px;
    height: 100%;
    top: auto;
    right: 0%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 
    background-color: ${theme.colors.primary}; */

    width: 100%;
  `}
`;
const Circle = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.highlight};
    width: 200px;
    height: 200px;
    border-radius: 100px;
  `}
`;
const Container = styled(motion.div)`
  ${({ theme, styleVariant }) => css`
    min-height: 60px;
    display: inline-block;

    text-transform: uppercase;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: flex;
    min-width: 150px;
    justify-content: center;
    align-items: center;
    justify-self: start;
    max-width: 100%;
    ${styleVariant == "primary" &&
    `background-color: ${theme.colors.primary}; color: ${theme.colors.bg};`}
    ${styleVariant == "secondary" &&
    `border: ${theme.sizes.webflowDefaultBorderWidth} solid ${theme.colors.highlight}; min-height: 45px;`}
  
  `}
`;
const ChildrenContainer = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
  `}
`;
const OverflowDiv = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;
export const ButtonAnimatingCircleLayout = {
  CircleContainer,
  Container,
  Circle,
  ChildrenContainer,
  OverflowDiv,
};
