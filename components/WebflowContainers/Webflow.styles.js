import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
  `}
`;
const BodyContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.webflowBodyMaxWidth};
    margin: auto;
    padding-top: 40px;

  `}
`;
const ChangingTextWrapper = styled(motion.div)`
  ${({ theme }) => css``}
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
  BodyContainer,
  ChangingTextWrapper,
  H1
};
