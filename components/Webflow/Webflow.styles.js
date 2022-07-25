import { motion } from "framer-motion";
import styled, { css } from "styled-components";
const Container = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg};
  `}
`;
const BodyContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.webflowBodyMaxWidth};
    margin: auto;
    padding-top: 40px;

  `}
`;
const ChangingTextWrapper = styled(motion.div)`
  ${({ theme }) => css``}
`;
const H1 = styled(motion.h1)`
  ${({ theme, end, center }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textDark};
    justify-self: start;
    ${end &&
    css`
      justify-self: end;
    `}
    ${center &&
    css`
      justify-self: center;
    `}
  `}
`;
const Navbar = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: end;
  `}
`;
const NavHome = styled(motion.img)`
  ${({ theme }) => css`
    user-select: none;
  `}
`;
const NavLinks = styled(motion.div)`
  ${({ theme }) => css`
    display: grid;
    grid-auto-flow: column;
    column-gap: 4rem;
    align-self: center;
  `}
`;
const NavCTA = styled(motion.div)`
  ${({ theme }) => css`
    
  `}
`;
export const WebflowLayout = {
  Container,
  BodyContainer,
  ChangingTextWrapper,
  H1,
  Navbar,
  NavHome,
  NavLinks,
  NavCTA,
};
