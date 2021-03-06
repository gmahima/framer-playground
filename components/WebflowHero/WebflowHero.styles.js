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
  ${({ theme }) =>
    css`
      display: grid;
    `}
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
const CTAMessage = styled(motion.h4)`
  ${({ theme }) => css`
    align-self: center;
    font-size: ${theme.textStyles.h4};
    line-height: ${theme.textStyles.lineHeightMedium};
    margin: 0px;
    font-weight: ${theme.textStyles.semiBold};
  `}
`;
const ImagesContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    column-gap: 72px;
  `}
`;
const Image = styled(motion.img).attrs({
    draggable: false
})`
  ${({ theme, size }) => css`
    width: ${size == "small" ? "231px" : "355px"};
    height: ${size == "small" ? "231px" : "355px"};
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    ${size == "big" &&
    css`
      margin-top: 96px;
    `}
    border-radius: 50%;
    box-shadow: ${theme.effects.webflowHeroImageShadow};
  `}
  
`;
const SecondaryCTAContainer = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: -20px;
    max-width: ${theme.sizes.webflowHeroSecondaryCtaWidth};
    justify-self: end;
  `}
`;
const SecondaryCTAMessage = styled(motion.h3)`
  ${({ theme }) => css`
    margin-bottom: 24px;
    margin-top: 0px;
    font-size: ${theme.textStyles.h3};
    line-height: ${theme.textStyles.lineHeightLarge};
    font-weight: ${theme.textStyles.semiBold};
  `}
`;
const SecondaryCTA = styled(motion.div)`
  width: auto;
  display: grid;
  justify-content: start;
`;
const SecondaryCTAText = styled(motion.span)`
  ${({ theme }) =>
    css`
      text-transform: uppercase;
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
  SecondaryCTAContainer,
  SecondaryCTAMessage,
  SecondaryCTA,
  SecondaryCTAText,
};
