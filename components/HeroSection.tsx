"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { default as CustomLink } from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-16 py-16 sm:py-20 md:py-16 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Simmy!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {`Senior Full-Stack Engineer with 8+ years of experience building high-performance web, mobile, and AI-powered products. I specialize in React, React Native, Node.js, and Python, with a strong focus on AI integration, system design, and real-world product impact.`}
          </p>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-brand-blue rounded shadow hover:bg-brand-blue mr-4"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Explore My Work
          </Link>
          <a
            className="text-neutral-100 font-semibold px-6 py-3 bg-brand-blue rounded shadow hover:bg-brand-blue"
            href="mailto:simmybajaj1603@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={30} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
