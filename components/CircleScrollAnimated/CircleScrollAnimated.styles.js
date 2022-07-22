import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.highlight};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    transform-origin: 0%;
  `}
`;

export const CircleScrollAnimatedLayout = {
  Container,
};
