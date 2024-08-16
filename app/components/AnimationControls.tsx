import {motion, useAnimationControls} from 'framer-motion'

export const AnimationControls = ()=>{
  const controls= useAnimationControls();
  const handleClick = () =>{

    controls.start("flip")

  }
  return(
    <div
      className="grid place-content-center h-screen gap-3"
    >
      <div 
      onClick={handleClick}
      className="example-button">Flip it !</div>
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
      
    </div>
  )
}