import { ChangingText, WebflowLayout } from "../components";
import { lorem } from "../data";

export default function WebflowPage() {
  return (
    <WebflowLayout.Container>
      <div>{lorem.long}</div>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
