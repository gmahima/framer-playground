import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
  ButtonAnimatingCircle,
  DivAnimatingToScroll,
} from "../components";
import { lorem } from "../data";

export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
