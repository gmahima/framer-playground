import { webflow } from "../../data";
import { ButtonAnimatingBorderIn } from "../ButtonAnimatingBorder";
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
      <WebflowHeroLayout.ContainerRight>
        <WebflowHeroLayout.ImagesContainer>
            <WebflowHeroLayout.Image src="floatingCircleBig.png" size="big"></WebflowHeroLayout.Image>
            <WebflowHeroLayout.Image src="floatingCircleSmall.png" size="small"></WebflowHeroLayout.Image>
        </WebflowHeroLayout.ImagesContainer>
        <WebflowHeroLayout.SecondaryCTAContainer>
            <WebflowHeroLayout.SecondaryCTAMessage>sdfg</WebflowHeroLayout.SecondaryCTAMessage>
            <ButtonAnimatingBorderIn></ButtonAnimatingBorderIn>
        </WebflowHeroLayout.SecondaryCTAContainer>
      </WebflowHeroLayout.ContainerRight>
    </WebflowHeroLayout.Container>
  );
};
