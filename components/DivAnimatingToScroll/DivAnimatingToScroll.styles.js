import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    width: 100px;
    height: 150px;
    background-color: ${theme.colors.primary};
  `}
`;
export const DivAnimatingToScrollLayout = { Container };
