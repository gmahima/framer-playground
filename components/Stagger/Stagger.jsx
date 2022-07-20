import { StaggerLayout } from "./Stagger.styles";
import { StaggerCard } from "./StaggerCard";

export const Stagger = () => {
  return (
    <StaggerLayout.Container initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4, duration: 1}}>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
      <StaggerCard></StaggerCard>
    </StaggerLayout.Container>
  );
};
