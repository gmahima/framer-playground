import { ChangingTextLayout } from "./ChangingText.styles";
import { lorem } from "../../data";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

export const ChangingText = () => {
  const theme = useTheme();
  const times = [0, 0.33, 0.36, 0.63, 0.66, 0.97, 1];
  const leftVariants = {
    initial: { x: -100, opacity: 0 },
    visible: { x: 0 },
  };
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
        <ChangingTextLayout.Container
          initial={"hidden"}
          whileInView={"visible"}
          variants={{ initial: { x: 0 }, visible: { x: 0 } }}
        >
          <ChangingTextLayout.LeftContainer
            initial={{ x: -60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7, type: "tween", delay: 0.4 }}
            viewport={{ once: true }}
          >
            {lorem.medium}
          </ChangingTextLayout.LeftContainer>
          <ChangingTextLayout.RightContainer
            initial={{ y: -40 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, type: "tween", delay: 0.4 }}
            viewport={{ once: true }}
          >
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
            <div>{lorem.short}</div>
          </ChangingTextLayout.RightContainer>
        </ChangingTextLayout.Container>
        <ChangingTextLayout.FixedContent>
          {lorem.short}
        </ChangingTextLayout.FixedContent>
      </ChangingTextLayout.MainContainer>
    </>
  );
};
