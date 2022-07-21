import { ChangingTextLayout } from "./ChangingText.styles";
import { useRef } from "react";
import { lorem } from "../../data";
import { useTheme } from "styled-components";


export const ChangingText = () => {
  const ref = useRef(null);
  const theme = useTheme();
  const times = [0, .33, .36, .63, .66, .97, 1];

 

  return (
    <div>
      <ChangingTextLayout.Container
        ref={ref}
        animate={{
            backgroundColor: [
                theme.colors.primary, 
                theme.colors.primary,
                theme.colors.secondary,
                theme.colors.secondary,  
                theme.colors.highlight,
                theme.colors.highlight,
                theme.colors.primary
                ],
        }}        
        transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "loop",
            type: "linear",
            times
        }}
      >
        <ChangingTextLayout.ChangingTextContainer>
        <ChangingTextLayout.ChangingText    
                animate={{
                    y: [
                        "0%",
                        "0%",
                        "-33%",
                        "-33%",
                        "-66%",
                        "-66%",
                        "0%"
                    ],                   
                }}
             transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "loop",
                type: "linear",
                times
             }}                         
            >
              <p>Hi</p>
              <p>Hello</p>
              <p>How are you ?</p>
            </ChangingTextLayout.ChangingText>
        </ChangingTextLayout.ChangingTextContainer>
        <ChangingTextLayout.OtherContent>
          {lorem.short}
        </ChangingTextLayout.OtherContent>
      </ChangingTextLayout.Container>
    </div>
  );
};
