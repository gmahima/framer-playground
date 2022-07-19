import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.button)`
  ${({ theme}) => css`
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 1rem;
    cursor: pointer;
  `}
`;

export const ButtonBackToTopLayout = {
    Container
}
