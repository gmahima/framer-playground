
import { LandingParaLayout } from "./LandingPara.styles";
import { useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";
export const LandingPara = ({children, dir}) => {
    let offset = dir == "left" ? -20: 20;
    const controls = useAnimationControls()
    const ref = useRef(null)
    const isInView = useInView(ref)
    useEffect(() => {
        
        if(isInView) {
            console.log("Element is in view: ", isInView)
            controls.start({opacity: 1, x: 0, transition: {delay: 0.3, duration: 0.3} })
        }
      }, [isInView])
    return (
        <LandingParaLayout.Container initial={{opacity: 0, x: offset}} dir={dir} ref={ref} animate={controls}>{children}</LandingParaLayout.Container>
    )
}