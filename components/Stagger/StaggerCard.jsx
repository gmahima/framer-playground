import { StaggerLayout } from "./Stagger.styles";

export const StaggerCard = ({ children }) => {
  return (
    <StaggerLayout.StaggerCardContainer>
      {children}
    </StaggerLayout.StaggerCardContainer>
  );
};
