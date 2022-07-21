import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme, bg }) => css`
    background-color: ${theme.colors[bg]};
    border: 1px solid ${theme.colors.highlight};
  `}
`;
export const ChangingTextLayout = { Container };
