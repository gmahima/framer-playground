import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
  ButtonAnimatingCircle,
  DivAnimatingToScroll,
  WebflowNavbar
} from "../components";
import { lorem, webflow } from "../data";
export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <WebflowLayout.BodyContainer>
        <WebflowNavbar></WebflowNavbar>
      </WebflowLayout.BodyContainer>
      {/* <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper> */}
    </WebflowLayout.Container>
  );
}
