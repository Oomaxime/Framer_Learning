import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid place-content-center h-screen gap-3">
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        show/hide
      </motion.button>
      <AnimatePresence mode="sync">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale:0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              time:[0, 0.25, 0.5, 0.85, 1],
            }}
            className="w-[150px] h-[150px] bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
