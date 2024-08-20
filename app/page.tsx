'use client'
import Image from "next/image";
import { BasicsOfMotion } from "./components/BasicOfMotion";
import { Gestures } from "./components/Gestures"
import { AnimationControls } from "./components/AnimationControls"
import { ViewBasedAnimations } from "./components/ViewBasedAnimations"
import { ScrollAnimations } from "./components/ScrollAnimations"
import { Cube } from "./components/cube";
export default function Home() {
  return (
    <div>
      <div className="grid place-content-center h-screen gap-3">
      <AnimationControls/>
      <Cube/>
      </div>
      {/*<BasicsOfMotion />*/}
      {/*<Gestures />*/}
      
      {/*<ViewBasedAnimations />*/}
      {/*<ScrollAnimations />*/}
      
      

    </div>
  );
}
