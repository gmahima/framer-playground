import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
} from "../components";
import { lorem } from "../data";

export default function WebflowPage() {

  return (
    <WebflowLayout.Container>
      <CircleScrollAnimated></CircleScrollAnimated>
      <div>{lorem.long}</div>
      <ButtonAnimatingBorderOut>{"out"}</ButtonAnimatingBorderOut>
      <ButtonAnimatingBorderIn>{"in"}</ButtonAnimatingBorderIn>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
