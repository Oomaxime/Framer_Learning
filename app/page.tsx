'use client'
import Image from "next/image";
import { BasicsOfMotion } from "./components/BasicOfMotion";
import { Gestures } from "./components/Gestures"
import { AnimationControls } from "./components/AnimationControls"
import { ViewBasedAnimations } from "./components/ViewBasedAnimations"
import { ScrollAnimations } from "./components/ScrollAnimations"
export default function Home() {
  return (
    <div>
      {/*<BasicsOfMotion />*/}
      {/*<Gestures />*/}
      {/*<AnimationControls />*/}
      {/*<ViewBasedAnimations />*/}
      <ScrollAnimations />
      

    </div>
  );
}
