import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: ${theme.colors.primary};
    z-index: -1;
  `}
`;

export const ParticlesLayout = {
  Container,
};
