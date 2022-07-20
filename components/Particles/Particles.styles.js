import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    background-color: ${theme.colors.primary}
  `}
`;

export const ParticlesLayout = {
  Container,
};
