import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
    min-height: 100vh;
    display: grid;
  `}
`;
const ChangingTextWrapper = styled(motion.div)`
 ${({theme}) => css`
    align-self: end;
 `}
`
const ButtonBorderBottomContainer = styled(motion.a)`${({theme}) => css`
    justify-self: center;
    align-self: start;

`}`
const ButtonBorderBottomBorder = styled(motion.div)`
${({theme}) => css`
    background-color: ${theme.colors.primary};
    height: 1px;

`}
`

export const WebflowLayout = {
  Container, ChangingTextWrapper, ButtonBorderBottomBorder, ButtonBorderBottomContainer
};
