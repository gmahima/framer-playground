import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
} from "../components";
import { useBoundingclientrectRef } from "rooks";
import { lorem } from "../data";
import { useRef } from "react";
export default function WebflowPage() {
  const [ref1, boundingClientRect1] = useBoundingclientrectRef();
  const [ref2, boundingClientRect2] = useBoundingclientrectRef();
  const [ref3, boundingClientRect3] = useBoundingclientrectRef();
  console.log(boundingClientRect1);
  return (
    <WebflowLayout.Container>
      <WebflowLayout.H1 ref={ref1}>hi</WebflowLayout.H1>
      <div>{lorem.long}</div>
      <WebflowLayout.H1 end ref={ref2}>
        hi2
      </WebflowLayout.H1>
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
      <div>{lorem.long}</div>
      <WebflowLayout.H1 ref={ref3} center>
        {" "}
        hi3
      </WebflowLayout.H1>
      <ButtonAnimatingBorderOut>{"out"}</ButtonAnimatingBorderOut>
      <ButtonAnimatingBorderIn>{"in"}</ButtonAnimatingBorderIn>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
