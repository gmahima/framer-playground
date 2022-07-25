import { motion } from "framer-motion";
import styled, { css } from "styled-components";

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
  ${({ theme }) => css``}
`;
export const WebflowNavbarLayout = {
  Navbar,
  NavHome,
  NavLinks,
  NavCTA,
};
