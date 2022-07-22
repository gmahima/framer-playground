import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.highlight};
    position: fixed;

    height: 100px;
    width: 100px;
    z-index: 0;
  `}
`;

export const CircleScrollAnimatedLayout = {
  Container,
};
