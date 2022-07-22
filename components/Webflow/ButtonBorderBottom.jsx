import { WebflowLayout } from "./Webflow.styles";

export const ButtonBorderBottom = ({ children }) => {
  return (
    <WebflowLayout.ButtonBorderBottomContainer
      whileHover={{ width: 0, originX: '50%'}}
      transition={{type: "ease"}}
    >
      {children}
      <WebflowLayout.ButtonBorderBottomBorder ></WebflowLayout.ButtonBorderBottomBorder>
    </WebflowLayout.ButtonBorderBottomContainer>
  );
};
