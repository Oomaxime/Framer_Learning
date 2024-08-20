import {motion, useAnimationControls} from 'framer-motion'

import { AnimationControls } from './AnimationControls'



export const Cube=()=>{
  const controls= useAnimationControls();
  return(
    <motion.div className="w-[150px] h-[150px] bg-black"
      variants={{
        initial:{
          rotate: '0deg'
        },
        flip: {
          rotate: "360deg"
        }
      }}
      initial="initial"
      animate={controls}
      ></motion.div>
  )
}