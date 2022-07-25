import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
const ContainerLeft = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "heading heading"
    "price cta";
`;
const ContainerRight = styled.div`
  
`;
export const WebflowHeroLayout = {
  Container,
};
