import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.p)`
  ${({ theme }) => css`
    margin: 10rem;
    padding: 0;
    color: ${theme.colors.primary};
  `}
`;

export const LandingParaLayout = {
    Container
}
