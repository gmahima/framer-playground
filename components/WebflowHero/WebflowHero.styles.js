import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
  `}
`;
const ContainerLeft = styled.div`
  ${({ theme }) => css`
    margin-top: 70px;
  `}
`;
const ContainerRight = styled.div`
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

const CTAContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    border-top: 2px solid ${theme.colors.highlight}
  `}
`;
const CTAMessage = styled.div`
  ${({ theme }) => css``}
`;
export const WebflowHeroLayout = {
  Container,
  Heading,
  OverflowDiv,
  ContainerLeft,
  ContainerRight,
  CTAContainer,
  CTAMessage
};
