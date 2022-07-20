import { StaggerLayout } from "./Stagger.styles";
import { motion } from "framer-motion";
export const StaggerCard = ({ children, variants }) => {
  return (
    <StaggerLayout.StaggerCardContainer variants={variants}>
      {children}
    </StaggerLayout.StaggerCardContainer>
  );
};
