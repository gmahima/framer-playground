import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.a)`
  ${({ theme }) => css`
    justify-self: center;
    align-self: start;
  `}
`;
const Border = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 1px;
  `}
`;

export const ButtonAnimatingBorderLayout = {
  Border,
  Container,
};
