import { StaggerLayout } from "./Stagger.styles";
import { motion } from "framer-motion";
export const StaggerCard = ({ children, ...props }) => {
  return (
    <StaggerLayout.StaggerCardContainer {...props}>
      {children}
    </StaggerLayout.StaggerCardContainer>
  );
};
