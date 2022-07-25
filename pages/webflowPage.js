import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
  ButtonAnimatingCircle,
  DivAnimatingToScroll,
  WebflowNavbar,
  WebflowHero,
} from "../components";
import { lorem, webflow } from "../data";
export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <WebflowLayout.BodyContainer>
        <WebflowNavbar></WebflowNavbar>
        <WebflowHero></WebflowHero>
      </WebflowLayout.BodyContainer>
      {/* <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper> */}
    </WebflowLayout.Container>
  );
}
