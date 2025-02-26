"use client"

import Faq from "@/components/landingPage/Faq";
import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import { Hero } from "@/components/landingPage/Hero";
import { NavBarDemo } from "@/components/landingPage/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <NavBarDemo/>
     <Hero />
     <Features/>
     <Faq/>
     <Footer/>
    </main>
    
  );
}













// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import Particles from '@/components/ui/Particles';
// import {
//   Heart,
//   MessageCircleHeart as MessageHeart,
//   Users,
//   Radar,
//   Timer,
//   Sparkles,
//   FolderHeart as UserHeart,
//   Calendar,
//   ThumbsUp,
//   History,
//   ChevronDown,
//   Menu,
//   X
// } from 'lucide-react';

// import LoveCursor from '@/components/ui/LoveCursor';
// import Ballpit from '@/components/ui/Lovepit';

// function useIntersectionObserver(ref: React.RefObject<HTMLElement>, options = {}, forward = true) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (ref.current && !isVisible) {
//       const observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if (forward) {
//             observer.disconnect();
//           }
//         }
//       }, options);

//       observer.observe(ref.current);

//       return () => {
//         observer.disconnect();
//       };
//     }
//   }, [ref, options, forward, isVisible]);

//   return isVisible;
// }

// function Section({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

//   return (
//     <section
//       ref={ref}
//       id={id}
//       className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
//     >
//       {isVisible && children}
//     </section>
//   );
// }

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const features = [
//     {
//       icon: <Heart className="w-6 h-6 text-pink-500" />,
//       title: "Anonymous Crush Confessions",
//       description: "Safely express your feelings without revealing your identity until there's a match."
//     },
//     {
//       icon: <MessageHeart className="w-6 h-6 text-pink-500" />,
//       title: "Secret Love Letters",
//       description: "Send anonymous love notes to your special someone."
//     },
//     {
//       icon: <Users className="w-6 h-6 text-pink-500" />,
//       title: "Mutual Match System",
//       description: "Connect when the feeling is mutual and start your journey together."
//     },
//     {
//       icon: <Radar className="w-6 h-6 text-pink-500" />,
//       title: "Crush Radar",
//       description: "Discover potential connections in your social circles and nearby."
//     },
//     {
//       icon: <Timer className="w-6 h-6 text-pink-500" />,
//       title: "Timed Reveal & Challenges",
//       description: "Make the reveal exciting with fun challenges and games."
//     },
//     {
//       icon: <Sparkles className="w-6 h-6 text-pink-500" />,
//       title: "AI Love Hints",
//       description: "Get smart suggestions about potential mutual interests."
//     },
//     {
//       icon: <UserHeart className="w-6 h-6 text-pink-500" />,
//       title: "Friendship Mode",
//       description: "Express platonic admiration and make new friends."
//     },
//     {
//       icon: <Calendar className="w-6 h-6 text-pink-500" />,
//       title: "Event-Based Confessions",
//       description: "Special themed confessions for holidays and celebrations."
//     },
//     {
//       icon: <ThumbsUp className="w-6 h-6 text-pink-500" />,
//       title: "Kind Rejections",
//       description: "Maintain dignity and respect in every interaction."
//     },
//     {
//       icon: <History className="w-6 h-6 text-pink-500" />,
//       title: "Crush History",
//       description: "Revisit past connections and explore second chances."
//     }
//   ];

//   return (
//     // bg-gradient-to-b from-pink-50 to-white
//     <div className="min-h-screen bg-black">
//       <LoveCursor />
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm fixed w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Heart className="h-8 w-8 text-pink-500" />
//               <span className="ml-2 text-2xl font-bold text-gray-900">DearU</span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-600 hover:text-pink-500">Features</a>
//               <a href="#how-it-works" className="text-gray-600 hover:text-pink-500">How it Works</a>
//               <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-600 hover:text-pink-500"
//               >
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-pink-500">Features</a>
//               <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-pink-500">How it Works</a>
//               <button className="w-full mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section with Ballpit */}
//       <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
//         {/* <div className="absolute inset-0 z-0">
//           <Ballpit
//             count={60}
//             gravity={0.7}
//             friction={0.995}
//             wallBounce={0.95}
//             followCursor={false}
//             className="w-full h-full"
//           />
//         </div> */}
//         <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
//   <Particles
//     particleColors={['#ffffff', '#ffffff']}
//     particleCount={200}
//     particleSpread={10}
//     speed={0.1}
//     particleBaseSize={100}
//     moveParticlesOnHover={true}
//     alphaParticles={false}
//     disableRotation={false}
//   />
// </div>
        
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-shadow-lg">
//             Express Your Heart's Desires
//             <span className="text-pink-500"> Anonymously</span>
//           </h1>
//           <p className="text-xl text-gray-800 mb-8 text-shadow-sm">
//             A safe and fun way to confess your feelings, connect with your crush, and discover mutual attractions.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl">
//               Start Confessing
//             </button>
//             <button className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg border-2 border-pink-500 hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl">
//               Learn More
//             </button>
//           </div>
//           <div className="mt-12">
//             <ChevronDown className="w-6 h-6 mx-auto text-pink-500 animate-bounce" />
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <Section id="features" className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             Everything You Need to Find Love
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pink-100">
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* How It Works */}
//       <Section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             How DearU Works
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Heart className="w-8 h-8 text-pink-500" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Send a Confession</h3>
//               <p className="text-gray-600">Express your feelings anonymously to your crush</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <MessageHeart className="w-8 h-8 text-pink-500" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Wait for a Match</h3>
//               <p className="text-gray-600">If they like you back, it's a match!</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Users className="w-8 h-8 text-pink-500" />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Start Chatting</h3>
//               <p className="text-gray-600">Connect and get to know each other better</p>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* CTA Section */}
//       <Section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Ready to Find Your Special Someone?
//           </h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Join thousands of others who have found love and friendship on DearU
//           </p>
//           <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg hover:bg-pink-600 transition-colors">
//             Get Started Now
//           </button>
//         </div>
//       </Section>

//       {/* Footer */}
//       <Section className="bg-gray-50 py-12 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center mb-4">
//               <Heart className="h-6 w-6 text-pink-500" />
//               <span className="ml-2 text-xl font-bold text-gray-900">DearU</span>
//             </div>
//             <p className="text-gray-600">Express your feelings safely and anonymously.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>Anonymous Confessions</li>
//               <li>Secret Letters</li>
//               <li>Mutual Matching</li>
//               <li>Crush Radar</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>About Us</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>Twitter</li>
//               <li>Instagram</li>
//               <li>Facebook</li>
//               <li>LinkedIn</li>
//             </ul>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default App;