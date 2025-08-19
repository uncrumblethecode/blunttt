// "use client"
// // import { Github } from "@medusajs/icons"
// // import { Button, Heading } from "@medusajs/ui"


// import { Button } from "@medusajs/ui"
// // import { Github } from "lucide-react"
// import Image from "next/image"
// const Hero = () => {
//   return (
//     <div className="relative h-[90vh] w-full overflow-hidden bg-[#f8f8f8] border-b border-gray-200">
//       {/* Background Image */}
//       <Image
//         src="/jewelry-hero.jpeg" // Add a high-quality background image in your /public folder
//         alt="Luxury Jewelry Background"
//         layout="fill"
//         objectFit="cover"
//         className="opacity-70"
//         priority
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 z-10"></div>

//       {/* Hero Content */}
//       <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 gap-6">
//         <h1 className="text-5xl font-serif text-gray-900 tracking-wide">
//           Timeless Elegance
//         </h1>
//         <p className="text-lg max-w-xl text-gray-600 font-light">
//           Discover our exquisite collection of jewellery that captures the beauty of every moment.
//         </p>

//         <div className="flex gap-4">
//           <a href="/store" className="z-20">
//             <Button variant="primary" className="rounded-full px-6 py-3 text-base bg-black text-white hover:bg-gray-800 transition-all">
//               Explore Collections
//             </Button>
//           </a>
//           {/* <a
//             href="https://github.com/medusajs/nextjs-starter-medusa"
//             target="_blank"
//             className="z-20"
//           >
//             <Button variant="secondary" className="rounded-full px-6 py-3 text-base">
//               View on GitHub <Github className="ml-2 h-4 w-4" />
//             </Button>
//           </a> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero