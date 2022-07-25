import { webflow } from "../../data";
import { ButtonAnimatingCircle } from "../ButtonAnimatingCircle";
import { WebflowHeroLayout } from "./WebflowHero.styles";

export const WebflowHero = () => {
  return (
    <WebflowHeroLayout.Container>
      <WebflowHeroLayout.ContainerLeft>
        <WebflowHeroLayout.OverflowDiv>
          <WebflowHeroLayout.Heading>
            {webflow.heroHeading}
          </WebflowHeroLayout.Heading>
        </WebflowHeroLayout.OverflowDiv>
        <WebflowHeroLayout.OverflowDiv>
          <WebflowHeroLayout.CTAContainer>
            <WebflowHeroLayout.CTAMessage>{webflow.heroCtaMessage}</WebflowHeroLayout.CTAMessage>
            <ButtonAnimatingCircle styleVariant={"primary"}>
              join
            </ButtonAnimatingCircle>
          </WebflowHeroLayout.CTAContainer>
        </WebflowHeroLayout.OverflowDiv>
      </WebflowHeroLayout.ContainerLeft>
    </WebflowHeroLayout.Container>
  );
};
