import { ChangingText, WebflowLayout } from "../components";
import { ButtonAnimatingBorderOut, ButtonAnimatingBorderIn } from "../components";
import { lorem } from "../data";

export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <ButtonAnimatingBorderOut>{"out"}</ButtonAnimatingBorderOut>
      <ButtonAnimatingBorderIn>{"in"}</ButtonAnimatingBorderIn>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
