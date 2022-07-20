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
const TabBar = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
  `}
`;
const TabContainer = styled(motion.div)`
  ${({ theme }) => css`

  `}
`;
const Tab = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
  `}
`;
const TabUnderline = styled(motion.div)`
  ${({ theme, isItemSelected }) => css`
    height: ${theme.sizes.tabUnderlineHeight};
    width: 100%;
    background-color: ${theme.colors.bg};
    display: ${isItemSelected ? "block" : "none"};
  `}
`;
export const TabSliderLayout = {
  Container,
  CardContainer,
  TabBar,
  TabContainer,
  Tab,
  TabUnderline,
};
