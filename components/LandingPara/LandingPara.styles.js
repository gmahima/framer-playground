import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.p)`
  ${({ theme,dir }) => css`
    margin: 10rem;
    padding: 0;
    color: ${theme.colors.primary};
    text-align: ${dir};
    width: ${theme.sizes.landingParaWidth};
    margin-left: ${dir == "left"? 0: 'auto'};
  `}
`;

export const LandingParaLayout = {
    Container
}
