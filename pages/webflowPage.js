import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
  ButtonAnimatingCircle,
  DivAnimatingToScroll,
} from "../components";
import { useBoundingclientrectRef } from "rooks";
import { lorem } from "../data";
export default function WebflowPage() {
  const [ref1, boundingClientRect1] = useBoundingclientrectRef();
  const [ref2, boundingClientRect2] = useBoundingclientrectRef();
  const [ref3, boundingClientRect3] = useBoundingclientrectRef();
  console.log(boundingClientRect1);
  return (
    <WebflowLayout.Container>
      {boundingClientRect1 && (
        <CircleScrollAnimated
          xa={[
            boundingClientRect1.x,
            boundingClientRect2.x,
            boundingClientRect3.x,
          ]}
          ya={[
            boundingClientRect1.y,
            boundingClientRect2.y,
            boundingClientRect3.y,
          ]}
        ></CircleScrollAnimated>
      )}
      <WebflowLayout.H1 ref={ref1}>hi</WebflowLayout.H1>
      <div>{lorem.long}</div>
      <DivAnimatingToScroll></DivAnimatingToScroll>
      <WebflowLayout.H1 end ref={ref2}>
        hi2
      </WebflowLayout.H1>
      <div>{lorem.long}</div>
      <DivAnimatingToScroll></DivAnimatingToScroll>
      <WebflowLayout.H1 ref={ref3} center>
        hi3
      </WebflowLayout.H1>

      <ButtonAnimatingCircle>{"circ"}</ButtonAnimatingCircle>
      <ButtonAnimatingBorderOut>{"out"}</ButtonAnimatingBorderOut>
      <ButtonAnimatingBorderIn>{"in"}</ButtonAnimatingBorderIn>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
