import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    min-height: 100vh;

  `}
`;
const ChangingTextWrapper = styled(motion.div)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 100%;
  `}
`;
const H1 = styled(motion.h1)`
  ${({ theme, end, center }) => css`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textDark};
    justify-self: start;
    ${end &&
    css`
      justify-self: end;
    `}
    ${center &&
    css`
      justify-self: center;
    `}
  `}
`;

export const WebflowLayout = {
  Container,
  ChangingTextWrapper,
  H1
};
