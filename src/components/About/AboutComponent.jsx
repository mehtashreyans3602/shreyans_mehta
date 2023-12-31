'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import DefaultImage from '@/Assets/Images/shreyans.jpg';
import HoverImage from '@/Assets/Images/shreyans2.jpg'; // Replace 'other-image.jpg' with the actual filename of your hover image
import ResumeComponent from '../Resume/ResumeComponent';
import { Heading } from '../Macros/Atoms';
const AboutComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-full items-center justify-center text-center">
        <div className="text-5xl text-center text-white items-center justify-center p-4 ">
        <Heading textValue={"About"}/> 
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center gap-y-4 p-4">
          <div className="aspect-square p-4">
            <Image
              width={500}
              height={100}
              className={`rounded-full border-8 border-blue-800 hover:border-white ${isHovered ? 'hovered-image' : ''
                }`}
              src={isHovered ? HoverImage : DefaultImage}
              alt=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="">

            <div className="ml-10 flex flex-col max-w-3xl text-start items-start">
              <p className=" text-white text-lg">Software Engineer | IBM Certified DataScientist | FullStack Developer | IOT Developer.
              </p><br />
              <p className=" text-white text-lg text-justify">Here&apos;s My Story:</p>
              <p className=" text-white text-lg">
                I started out with C, C++ and java just like regular software engineering students,
                after which I started learning python and made 2 games with it (Flappy Bird and Space Invaders) and final year diploma project I had made a FireFighting Robot Prototype with an interface which perform Face Recognition and Image Processing with opencv to identify people. Furthermore, I started web development with flask and django framework and did an internship where I had to learn Vue.js and apply my existing knowledge of django.
                This concluded my Diploma.
              </p>
              <p className=" text-white text-lg">
                While pursuing my Bachelor&apos;s I developed a knack for learning different technologies and I started learning DataScience and got certified by Coursera&apos;s IBM DataScience Professional Course. After that, I started learning about .NET Development and C# development.
                And at the end, I chose to develop a MERN Application for my final year project, where I learned typescript, REACT and Next.js.
              </p>
              <p className=" text-white text-lg">
                Subsequently, I have also participated in several hackathons and attended meetups too.
              </p>

              <ResumeComponent />

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
