import styled, { css } from "styled-components";
import { motion } from "framer-motion";
const StaggerCardContainer = styled(motion.div)`
  ${({ theme }) => css`
    width: ${theme.sizes.staggerCardWidth};
    height: ${theme.sizes.staggerCardHeight};
    background-color: ${theme.colors.primary};
    margin-top: 5px;

`}
`;

const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(${theme.sizes.staggerCardWidth}, 1fr)
    );
    gap: 16px;
  `}
`;

export const StaggerLayout = {
  StaggerCardContainer,
  Container,
};
