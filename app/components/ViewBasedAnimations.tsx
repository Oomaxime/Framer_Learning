import { motion } from "framer-motion";
import { useRef } from "react";
export const ViewBasedAnimations = () => {
  const ref = useRef(null)
  return (
  <>
  <div className="h-[150vh]"></div>
  <motion.div
    className="h-screen bg-black"
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1}}
  />
  <div
  ref={ref}
  className="h-screen bg-red-600"
  ></div>
  </>
)
};
