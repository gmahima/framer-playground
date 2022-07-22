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
    align-self: center;
    justify-self: start;
    overflow: hidden;

`}`
const ButtonBorderBottomBorder = styled(motion.div)`
${({theme}) => css`

    width: 100%;
    background-color: ${theme.colors.primary};
    height: 3px;

`}
`

export const WebflowLayout = {
  Container, ChangingTextWrapper, ButtonBorderBottomBorder, ButtonBorderBottomContainer
};
