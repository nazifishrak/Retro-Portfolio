"use client"
import {VT323} from "@next/font/google";
import Typewriter from 'typewriter-effect';
import MyAvatar from "@/app/components/Hero/MyAvatar";
import Hero from "@/app/components/Hero/Hero";
import Gallery from "@/app/components/Gallery/Gallery";

const mono = VT323({subsets:["latin"],weight:"400"});

export default function Home() {

  return (
      <>
        <Hero/>
          <Gallery/>




      </>
  );
}
