"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TextRevealCard ,TextRevealCardTitle, TextRevealCardDescription} from "./ui/text-reveal-card";
import dynamic from "next/dynamic";

const  Approach =() =>{
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClientSide(true);
    }
  }, []);

  if (!clientSide) {
    return null;
  }
  return (
    <section className="w-full py-20">
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know my Approach"
        revealText="Then explore it "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
           Hover over the card to reveal our secret 😉
          
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
         title="Planning & Strategy"
         icon={<AceternityIcon order="Phase 1" />}
         description="In the realm of frontend development, planning and strategy 
         are essential for creating efficient, scalable, and user-friendly web applications."
         >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
         title="Development & Progress Update" 
        icon={<AceternityIcon order="Phase 2" />}
        description="In the context of frontend development,
         providing regular development and progress updates is essential for maintaining transparency,
          ensuring alignment with project goals,
         and facilitating smooth collaboration among team members and stakeholders."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card 
        title="Development & Launch"
         icon={<AceternityIcon order="Phase 3" />}
         description="The development and launch phases in frontend development are critical
          stages where a project moves from concept to reality."
         >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order } : { order : string}) => {
  return (
   <div>
    <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    {order}
  </div>
</button>
   </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/200/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="0.1"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default dynamic(() => Promise.resolve(Approach), { ssr: false });
