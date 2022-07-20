import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: ${theme.sizes.tabSliderWidth};
    margin: auto;
    margin-top: 12rem;
    padding: 0.5rem;
  `}
`;
const CardContainer = styled(motion.div)`
  ${({ theme }) => css``}
`;
const TabsContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
  `}
`;

export const TabSliderLayout = {
  Container,
  CardContainer,
  TabsContainer,
};
