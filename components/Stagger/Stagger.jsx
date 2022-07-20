import { StaggerLayout } from "./Stagger.styles";
import { StaggerCard } from "./StaggerCard";

export const Stagger = () => {
  return (
    <StaggerLayout.Container>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
    </StaggerLayout.Container>
  );
};
