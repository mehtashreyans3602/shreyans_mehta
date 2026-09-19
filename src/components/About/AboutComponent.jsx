'use client';
import React from 'react';
import Image from 'next/image';
import DefaultImage from '@/Assets/Images/shreyans.jpeg';
import ResumeComponent from '../Resume/ResumeComponent';

const AboutComponent = () => {
  // Extracted from your bio for the "Tech Stack" pill section
  const techStack = [
    "Python", "Java", "C++", "React", "Next.js",
    "TypeScript", "Node.js", "Django", "Flask",
    "OpenCV", "Data Science"
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white p-4 md:p-8 flex flex-col items-center justify-center font-sans">

      {/* Header */}
      <div className="w-full max-w-6xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          ABOUT<span className="text-neutral-500">.ME</span>
        </h1>
      </div>

      {/* MASTER BENTO GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl auto-rows-min">

        {/* 1. MAIN BIO CARD */}
        <div className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

          <div className="z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-blue-600 w-3 h-3 rounded-full animate-pulse"></span>
              Hello, I build things.
            </h2>

            <div className="space-y-4 text-neutral-300 leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m the kind of person who reads the docs for fun and falls down rabbit holes at 2am because <span className="text-white font-semibold">I just need to know how it works</span>. New language, new framework, new paradigm — I don&apos;t wait to be taught. I dig in, break things, and figure it out.
              </p>
              <p>
                I&apos;m happiest when I&apos;m <span className="text-white font-semibold">out of my depth</span> — that&apos;s usually where the real learning happens.
              </p>
              <p className="text-neutral-500 italic mt-4 border-l-2 border-neutral-700 pl-4">
                &quot;Always curious. Always learning.&quot;
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 z-10">

            <span className="px-4 py-1.5 bg-green-900/30 text-green-400 rounded-full text-xs font-medium border border-green-800/50 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available for work
            </span>
          </div>
        </div>

        {/* 2. PROFILE IMAGE CARD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden relative min-h-[300px] group">
          <Image
            src={DefaultImage}
            alt="Shreyans"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

          <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
            <h3 className="text-xl font-bold text-white">Shreyans</h3>
            <p className="text-sm text-blue-400 font-mono">@developer</p>
          </div>
        </div>

        {/* 3. TECH STACK CARD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 row-span-1 md:row-span-2 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Tech Stack</h3>
            <div className="h-1 w-12 bg-white rounded"></div>
          </div>

          <div className="flex flex-wrap gap-2 content-start">
            {techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-black border border-neutral-800 text-neutral-400 text-xs rounded-lg hover:text-white hover:border-neutral-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <div className="p-4 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
              <p className="text-xs text-neutral-400 font-mono">
                &quot;How do I center a div again?&quot;
              </p>
            </div>
          </div>
        </div>

        {/* 4. RESUME CARD */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-800 rounded-3xl p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

          <div className="z-10 relative">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Resume</h3>
            <p className="text-blue-200 text-sm">View my full professional history and skills.</p>
          </div>

          <div className="z-10 mt-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 inline-block hover:bg-black/50 transition-colors">
              <ResumeComponent />
            </div>
          </div>
        </div>

        {/* 5. STATUS/JOURNEY SUMMARY CARD */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <h3 className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-1">Currently Learning</h3>
          <p className="text-3xl font-bold text-white mb-2">Transformer Architecture</p>
          <p className="text-xs text-neutral-400">Exploring Generative AI and NLP.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutComponent;