import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const MainContainer = styled(motion.div)`
  ${({ theme }) => css``}
`;
const Container = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    overflow: hidden;
    display: grid;
    grid-template-columns: auto 1fr;
  `}
`;
const LeftContainer = styled(motion.div)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.bg};
    max-width: 200px;
  `}
`;
const RightContainer = styled(motion.div)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.bg};
  `}
`;
const ChangingText = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    bottom: 0px;
    font-weight: ${theme.textStyles.changingTextFontWeight};
    font-size: ${theme.textStyles.changingTextFontSize};
    line-height: ${theme.textStyles.changingTextLineHeight};
  `}
`;
const ChangingTextContainer = styled(motion.div)`
  ${({ theme }) => css`
    overflow: hidden;
    height: ${theme.textStyles.changingTextLineHeight};
  `}
`;
const FixedContent = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.other};
    display: grid;
    grid-auto-flow: column;
    color: ${theme.colors.textDark};
    padding: 4px;
  `}
`;
export const ChangingTextLayout = {
  MainContainer,
  Container,
  ChangingText,
  FixedContent,
  ChangingTextContainer,
  LeftContainer,
  RightContainer
};
