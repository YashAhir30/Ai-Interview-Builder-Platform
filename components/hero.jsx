"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10 relative">
      {/* Decorative background glass blobs */}
      <div className="absolute top-10 left-10 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto relative z-10 w-fit">
          {/* Floating feature badges */}
          <div className="hidden md:flex absolute -top-8 -left-16 w-fit px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-[float_4s_ease-in-out_infinite] items-center gap-2">
            <span className="text-lg">✨</span> <span className="text-sm font-medium">AI Resume Builder</span>
          </div>
          <div className="hidden md:flex absolute top-20 -right-20 w-fit px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-[float_5s_ease-in-out_infinite_1s] items-center gap-2">
            <span className="text-lg">🎯</span> <span className="text-sm font-medium">Interview Prep</span>
          </div>

          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient 
            animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both drop-shadow-lg">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl 
            animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-both" style={{ animationDelay: '200ms' }}>
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-both" style={{ animationDelay: '400ms' }}>
          <Link href="/dashboard">
            <Button size="lg" className="px-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shadow-blue-500/20">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image relative group">
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse rounded-full group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-1 shadow-2xl">
              <video
                src="/AI_make_resume_202603301002.mp4"
                width={1280}
                height={720}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl w-full h-auto shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5"
                style={{ WebkitBoxReflect: "below 10px linear-gradient(to bottom, transparent, transparent 75%, rgba(255,255,255,0.15))" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
