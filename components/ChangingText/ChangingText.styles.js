import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled(motion.div)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.highlight};
    padding: 48px;
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
    height: ${theme.textStyles.changingTextLineHeight}
  `}
`;
const OtherContent = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: 6rem;
  `}
`;
export const ChangingTextLayout = {
  Container,
  ChangingText,
  OtherContent,
  ChangingTextContainer,
};
