// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useMotionValue, animate, useInView } from 'framer-motion';

// interface StatCardProps {
//   title: string;
//   value: number;
//   suffix?: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ title, value, suffix = '' }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   // Determine if the component is in view
//   const isInView = useInView(ref, { once: true });
  
//   const count = useMotionValue(0);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     // Only animate when the card is in view
//     if (!isInView) return;
    
//     const controls = animate(count, value, {
//       duration: 1.5,
//       ease: 'easeInOut',
//       onUpdate: (latest) => {
//         setCurrent(Math.floor(latest));
//       },
//     });
//     return () => controls.stop();
//   }, [value, count, isInView]);

//   return (
//     <div className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-6 shadow-lg">
//       <div className="text-lg font-semibold opacity-80">{title}</div>
//       {/* AnimatePresence not strictly needed; we update the numbers via 'controls.listen' */}
//       <motion.div className="text-3xl font-bold">
//         {current}
//         {suffix}
//       </motion.div>
//     </div>
//   )
// }

// export default function ShankComicsStats() {
//   return (
//     <section className="bg-blue-900 py-12 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="mb-8 text-center text-3xl font-bold">
//           Shank Comics (Lit Gang) — Social Stats
//         </h2>
        
//         {/* Responsive 2-column on small screens, up to 4 columns on large */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           <StatCard title="YouTube Subscribers" value={320000} />
//           <StatCard title="Instagram Followers" value={500000} />
//           <StatCard title="TikTok Followers" value={1200000} />
//           <StatCard title="Twitter Followers" value={200000} />
//           <StatCard title="Comedy Skits" value={350} />
//           <StatCard title="Acting Roles" value={20} />
//           <StatCard title="Years Active" value={5} suffix="+" />
//           <StatCard title="Lit Gang Fans" value={1000000} />
//         </div>
        
//         <p className="mt-8 text-center text-sm opacity-80">
//           All stats are estimates for demonstration.
//         </p>
//       </div>
//     </section>
//   )
// }
