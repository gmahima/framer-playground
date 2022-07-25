import { ButtonAnimatingBorderOut } from "../ButtonAnimatingBorder";
import {WebflowNavbarLayout} from './WebflowNavbar.styles'
import { webflow } from "../../data";
import { ButtonAnimatingCircle } from "../ButtonAnimatingCircle";
export const WebflowNavbar = () => {
  return (
    <WebflowNavbarLayout.Navbar>
      <WebflowNavbarLayout.NavHome
        src={"logo.svg"}
        alt="logo"
      ></WebflowNavbarLayout.NavHome>
      <WebflowNavbarLayout.NavLinks>
        {webflow.navLinks.map((l) => (
          <ButtonAnimatingBorderOut key={l.id}>
            {l.name}
          </ButtonAnimatingBorderOut>
        ))}
      </WebflowNavbarLayout.NavLinks>
      <ButtonAnimatingCircle>Log In</ButtonAnimatingCircle>
    </WebflowNavbarLayout.Navbar>
  );
};
