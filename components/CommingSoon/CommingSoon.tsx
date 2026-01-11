"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import LogoWithEyes from "../Logo/logo";

export default function HeroSection() {
    return (
        <div className="h-[700px] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center ">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <p className="mb-4 text-xs md:text-sm tracking-widest uppercase text-[#E53119] relative z-20">
                Coming Soon
            </p>
            <h1 className={cn("text-4xl md:text-6xl lg:text-7xl font-bold text-white relative z-20")}>
                <LogoWithEyes width={300} height={100} />
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-neutral-300 relative z-20">
                Crafted honestly, straight from farms.
            </p>
        </div>
    );
}

// "use client"

// import React from "react"
// import { Boxes } from "../ui/background-boxes"
// import { cn } from "@/lib/utils"

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">

//       {/* Boxes background (interactive) */}
//       <div className="absolute inset-0 z-0">
//         <Boxes />
//       </div>

//       {/* Mask (visual only, does NOT block hover) */}
//       <div
//         className="absolute inset-0 z-10 bg-black/60 
//         [mask-image:radial-gradient(circle_at_center,transparent,black)]
//         pointer-events-none"
//       />

//       {/* Content wrapper (let hover pass through) */}
//       <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        
//         {/* Actual clickable content */}
//         <div className="text-center px-6 pointer-events-auto">

//           <p className="mb-4 text-xs md:text-sm tracking-widest uppercase text-orange-400">
//             Coming Soon
//           </p>

//           <h1 className={cn("text-4xl md:text-6xl lg:text-7xl font-bold text-white")}>
//             Ohoo!
//           </h1>

//           <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-neutral-300">
//             Feel the freshness of real fruits 🍊  
//             Crafted honestly, straight from farms.
//           </p>

//         </div>
//       </div>

//     </section>
//   )
// }
