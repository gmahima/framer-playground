import { StaggerLayout } from "./Stagger.styles";
import { StaggerCard } from "./StaggerCard";
import { animationVariants } from "./staggerVariants";

export const Stagger = () => {
  return (
    <StaggerLayout.Container
      variants={animationVariants.container}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
      <StaggerCard variants={animationVariants.card}></StaggerCard>
    </StaggerLayout.Container>
  );
};
