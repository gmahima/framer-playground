import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const CircleContainer = styled(motion.a)`
  ${({ theme }) => css`
    justify-self: center;
    align-self: start;
    /* background-color: ${theme.colors.primary}; */
    display: flex;
    justify-items: center;
    align-items: center;
    position: absolute;
    left: 0%;
    bottom: 0px;
    height: 100%;
    top: auto;
    right: 0%;
    z-index: 0;
  `}
`;
const Circle = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    width: 200px;
    height: 200px;
    border-radius: 100%;
  `}
`;
const Container = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    justify-self: start;
    min-height: 20px;
    background-color: ${theme.colors.highlight};
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-items: center;
  `}
`;
const ChildrenContainer = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    z-index: 100;
  `}
`;
export const ButtonAnimatingCircleLayout = {
  CircleContainer,
  Container,
  Circle,
  ChildrenContainer,
};
