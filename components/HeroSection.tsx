"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { default as CustomLink } from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
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
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Simmy!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A passionate{" "}
            <span className="font-semibold text-brand-blue">
              Full-Stack Developer
            </span>{" "}
            with a strong focus on frontend technologies. With over six years of
            experience in{" "}
            <span className="font-semibold text-brand-blue">React.js</span> and{" "}
            <span className="font-semibold text-brand-blue">Next.js</span>, I
            specialize in crafting interactive, responsive, and visually
            appealing web solutions. Whether it's building intuitive SaaS
            applications or complex systems for the fintech and government
            sectors, I strive to bridge the gap between technical functionality
            and user-friendly design. Let's create something amazing together!
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
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
