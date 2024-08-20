import {useAnimationControls } from "framer-motion";
import { createContext } from "react";

export const AnimationControlsContext = createContext();

export const AnimationControlsProvider = ({children}) => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start({scale: 2});
    console.log(controls);
  };
  return (
    <div onClick={handleClick} className="example-button">
      Flip it !
    </div>
  );
};
