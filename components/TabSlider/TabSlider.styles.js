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
const Card = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary}
  `}
`;
export const TabSliderLayout = {
  Container,
  Card,
};
