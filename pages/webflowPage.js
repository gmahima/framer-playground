import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
  ButtonAnimatingCircle,
  DivAnimatingToScroll,
} from "../components";
import { lorem, webflow } from "../data";
export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <WebflowLayout.BodyContainer>
        <WebflowLayout.Navbar>
          <WebflowLayout.NavHome
            src={"logo.svg"}
            alt="logo"
          ></WebflowLayout.NavHome>
          <WebflowLayout.NavLinks>
            {webflow.navLinks.map((l) => (
              <ButtonAnimatingBorderOut key={l.id}>
                {l.name}
              </ButtonAnimatingBorderOut>
            ))}
          </WebflowLayout.NavLinks>
          <ButtonAnimatingCircle>Log In</ButtonAnimatingCircle>
        </WebflowLayout.Navbar>
      </WebflowLayout.BodyContainer>
      {/* <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper> */}
    </WebflowLayout.Container>
  );
}
