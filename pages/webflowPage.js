import {
  ChangingText,
  WebflowLayout,
  CircleScrollAnimated,
  ButtonAnimatingBorderOut,
  ButtonAnimatingBorderIn,
} from "../components";
import { lorem } from "../data";
import { useRef } from "react";
export default function WebflowPage() {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
  return (
    <WebflowLayout.Container>
        <h1 ref={ref1}>hi</h1>
        <div>{lorem.long}</div>
        <h1 ref={ref2}>hi2</h1>
      <CircleScrollAnimated ref1={ref1} ref2={ref2} ref3={ref3}></CircleScrollAnimated>
      <div>{lorem.long}</div>
      <h1 ref={ref3}> hi3</h1>
      <ButtonAnimatingBorderOut>{"out"}</ButtonAnimatingBorderOut>
      <ButtonAnimatingBorderIn>{"in"}</ButtonAnimatingBorderIn>
      <WebflowLayout.ChangingTextWrapper>
        <ChangingText></ChangingText>
      </WebflowLayout.ChangingTextWrapper>
    </WebflowLayout.Container>
  );
}
