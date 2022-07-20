import { lorem } from "../../data";
import { LandingPara } from "./LandingPara";

export const LandingParaList = () => {
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(
      <LandingPara key={i} dir={i % 2 == 0 ? "left" : "right"}>
        {lorem.long}
      </LandingPara>
    );
  }
  return list;
};
