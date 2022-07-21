import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme, bg }) => css`
    background-color: ${bg};
    border: 1px solid ${theme.colors.highlight};
    position: relative;
    padding: 48px;
  `}
`;
export const ChangingTextLayout = { Container };
