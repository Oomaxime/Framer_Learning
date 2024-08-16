import { Festive } from "next/font/google"
import { motion, MotionConfig } from "framer-motion"

export const Gestures = ()=>{
  return(
    <div
      className="grid place-content-center h-screen gap-3"
    >
      <MotionConfig
      transition={{
        duration: 0.125,
        ease: "easeInOut"
      }}>
      <motion.button
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95, rotate: "2.5deg"}}
       className="example-button">Click me!</motion.button>
       <motion.button
        whileHover={{scale:1.15}}
        whileTap={{scale:0.85, rotate: "-2.5deg"}}
       className="example-button" style={{ backgroundColor:"red"}}>Click me!</motion.button>
      </MotionConfig>
    </div>
  )
}