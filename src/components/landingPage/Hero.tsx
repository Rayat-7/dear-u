"use client";

import { Particles } from "@/components/ui/Particles";
import { TextAnimate } from "../magicui/text-animate";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";
import router, { useRouter } from "next/router";

export function Hero() {
 
  return (
    <div className="relative flex h-screen w-full bg-black flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      {/* Background Particles */}
      <Particles className=" absolute w-full  inset-0 z-0 bg-gradient-to-b from-white via-white to-rose-100"  quantity={100} ease={80}  refresh />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className=" text-4xl md:text-8xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-black via-rose-700 to-rose-600 bg-clip-text leading-none text-transparent shine-effect">
          {/* <TypingAnimation className="text-7xl">Dear U</TypingAnimation> */}
          {/* <TextAnimate className="" animation="slideLeft" by="character"> */}
      Dear 'U'
    
          
        </motion.div>
        <motion.p 
        // bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-400 via-stone-900 to-white bg-clip-text text-transparent
            className="text-xl md:text-5xl p-2 md:h-16 font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-stone-400 via-stone-900 to-white bg-clip-text text-transparent   "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Express Your Feelings, Anonymously
          </motion.p>
          <motion.p
            className="text-sm md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Confess your crush, send secret messages, and discover mutual connections in a safe and fun way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className=" flex gap-5"
          >
            {/* <Button className="bg-gradient-to-t from-rose-900 via-rose-700 to-rose-600 hover:bg-pink-600 text-white text-lg px-8 py-4">Start Confessing</Button> */}
            
            <Link href='/pages/login'>
            <ShimmerButton className="shadow-2xl bg-white">
            
      <span className="whitespace-pre-wrap text-center text-sm  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
      Start Confessing
      </span>
      
    </ShimmerButton>
    </Link>
   
   
    <Link href='/pages/privacy'>
    <Button variant="outline" className=" p-5 md:p-7 rounded-full bg-transparent border border-rose-600">
  <span className="text-center  text-black  text-lg">
    Privacy Policy
  </span>
</Button>
</Link>

    
          </motion.div>

      </div>

      
    </div>
  );
}





{/* // "use client"

// import { useEffect, useState } from "react"
// import { global } from "styled-jsx/css"
// import Ribbons from "../ui/Ribbons"
// import { Particles } from "@/components/ui/Particles"
// import ShinyText from "@/components/ui/ShinyText";
// export function Hero()  */}


//   return (
//     <div className="relative flex h-screen bg-black w-full flex-col items-center justify-center overflow-hidden rounded-lg border  md:shadow-xl">
//         {/* bg-gradient-to-b from-black to-gray-300/80 bg-clip-text */}
      
//       <Particles
//         className="absolute inset-0"
//         quantity={100}
//         ease={80}
//         refresh
//       />
//       <span className="pointer-events-none absolute whitespace-pre-wrapv text-center/3 bg-gradient-to-t from-black via-rose-700 to-rose-600 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent shine-effect">
//          Dear U
//         </span>
//         <h5 className="text-2xl absolute bg-gradient-to-t from-black via-rose-700 to-rose-600 bg-clip-text text-center">Express Your Feelings, Anonymously</h5>
        
// <div className="relative h-full w-full flex">
// <Ribbons
//     baseThickness={10}
//     colors={['#e11d48']}
//     speedMultiplier={0.5}
//     maxAge={500}
//     enableFade={false}
//     enableShaderEffect={false}
    
//   />
//   {/* <Ribbons
//     baseThickness={30}
//     colors={['#3b82f6']}
//     speedMultiplier={0.5}
//     maxAge={500}
//     enableFade={false}
//     enableShaderEffect={false}
//   /> */}
  
// </div>
     
//     </div>
//   )
// }
