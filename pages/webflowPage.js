import { ChangingText, WebflowLayout } from "../components";
import { ButtonBorderBottom } from "../components";
import { lorem } from "../data";

export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <ButtonBorderBottom>{"something"}</ButtonBorderBottom>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
