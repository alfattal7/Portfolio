"use client"
import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { FlipWords } from './ui/flip-words'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const words = ["Programmer", "Designer", "Developer", "Engineer"];
const imageUrl = "/pencil.png"
const Hero = () => {
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
    <div className='pb-20 pt-36' id="home">
      <div >
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
      fill="white" />
      <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]"
      fill="purple" />
      <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]"
      fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white 
       dark:bg-grid-white/[0.2] bg-grid-black/[0.03] 
       flex items-center justify-center absolute top-0 left-0">
    
      <div className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-100 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89rem] md:max-w-2xl lg:max-w-[60vw] 
        flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text text-xs text-center
          text-blue-100 max-w-80'>
            Eng. Mhd Bashar Al Fattal
          </h2>
          <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Bashar is
        <FlipWords words={words} /> <br />
        of many websites and Apps
      </div>
    </div>
          <TextGenerateEffect
          className='text-center text-[40px]
          md:text 5xl lg:text-6xl'
          words='Transforming your web presence into a dynamic masterpiece'/>
          <p className='text-center'>
          
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl"> </p>
        <p className="font-normal text-sm"> </p>
      </DirectionAwareHover>
    
            Hi, I&apos;m Bashar, a web developer and a UI/UX designer.
            I can build a website for you in 24 hours.
          </p>
          <br></br>
            <a href="#about">
          <MagicButton
          title="Explore my skills"
          icon={<FaLocationArrow/>}
          position='right'
          handleClick={() => {
            window.location.href = "#about"
          }}
          />

         </a>
        
        </div>
      </div>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Hero), { ssr: false });
