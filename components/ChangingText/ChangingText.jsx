import { ChangingTextLayout } from "./ChangingText.styles";
import { lorem } from "../../data";
import { useTheme } from "styled-components";

export const ChangingText = () => {
  const theme = useTheme();
  const times = [0, 0.33, 0.36, 0.63, 0.66, 0.97, 1];

  return (
    <>
      <ChangingTextLayout.MainContainer
        animate={{
          backgroundColor: [
            theme.colors.primary,
            theme.colors.primary,
            theme.colors.secondary,
            theme.colors.secondary,
            theme.colors.highlight,
            theme.colors.highlight,
            theme.colors.primary,
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "loop",
          type: "linear",
          times,
        }}
      >
        <ChangingTextLayout.Container>
          <ChangingTextLayout.LeftContainer>{lorem.medium}</ChangingTextLayout.LeftContainer>
          <ChangingTextLayout.RightContainer>
            <ChangingTextLayout.ChangingTextContainer>
              <ChangingTextLayout.ChangingText
                animate={{
                  y: ["0%", "0%", "-33%", "-33%", "-66%", "-66%", "0%"],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  repeatType: "loop",
                  type: "linear",
                  times,
                }}
              >
                <p>Hi</p>
                <p>Hello</p>
                <p>How are you ?</p>
              </ChangingTextLayout.ChangingText>
            </ChangingTextLayout.ChangingTextContainer>
          </ChangingTextLayout.RightContainer>
        </ChangingTextLayout.Container>
        <ChangingTextLayout.FixedContent>
          {lorem.short}
        </ChangingTextLayout.FixedContent>
      </ChangingTextLayout.MainContainer>
    </>
  );
};
