import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: 80px;
    column-gap: 96px;
  `}
`;
const ContainerLeft = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: 70px;
  `}
`;
const ContainerRight = styled(motion.div)`
  ${({ theme }) => css``}
`;
const OverflowDiv = styled(motion.div)`
  ${({ theme }) =>
    css`
      overflow: hidden;
    `}
`;
const Heading = styled(motion.h1)`
  ${({ theme }) => css`
    font-size: ${theme.textStyles.h1}; //76
    font-weight: ${theme.textStyles.semiBold}; // 500

    line-height: ${theme.textStyles.lineHeightLarge}; //1rem
  `}
`;

const CTAContainer = styled(motion.div)`
  ${({ theme }) => css`
    padding-top: 28px;
    display: grid;
    grid-template-columns: 1fr auto;
    border-top: ${theme.sizes.webflowDefaultBorderWidth} solid
      ${theme.colors.highlight};
  `}
`;
const CTAMessage = styled(motion.div)`
  ${({ theme }) => css`
    align-self: center;
    font-size: 26px;
    line-height: 24px;
    font-weight: 500;
  `}
`;
const ImagesContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    background-color: red;
    column-gap: 72px;
  `}
`;
const Image = styled(motion.img)`
  ${({ theme, size }) => css`
    width: ${size == "small" ? "231px" : "355px"};
    height: ${size == "small" ? "231px" : "355px"};
    ${size == "big" &&
    css`
      margin-top: 96px;
    `}
  `}
`;
export const WebflowHeroLayout = {
  Container,
  Heading,
  OverflowDiv,
  ContainerLeft,
  ContainerRight,
  CTAContainer,
  CTAMessage,
  Image,
  ImagesContainer,
};
