import React from "react";
import Image from "next/image";

const skills = [
  { skill: "React" },
  { skill: "Node" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Next.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "Angular" },
  { skill: "AWS" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-brand-blue border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I&apos;m Simmy, a{" "}
              <span className="font-bold">{`dedicated `}</span>and
              <span className="font-bold">{`passionate `}</span> software engineer
              based in New Delhi, India. Since graduating with a BTech in
              Electronics and Communication Engineering from Guru Gobind Singh
              Indraprastha University in 2017, I&apos;ve been immersed in the tech
              world and SaaS, constantly pushing the boundaries of what&apos;s possible with
              software.
            </p>
            <br />
            <p>
              My journey has been fueled by a passion for technology and a drive
              to excel in my field. This has led me to specialize in developing
              cutting-edge software solutions, keeping me at the forefront of
              the industry.
            </p>
            <br />
            <p>
              Outside of work, I&apos;m a person of diverse interests. Whether I&apos;m
              reading to expand my knowledge, playing sports to stay active,
              traveling to new places, or I&apos;m always engaged in activities that
              enrich my life and broaden my horizons.
            </p>
            <br />
            <p>
              I&apos;m excited about the future and eager to explore new professional
              avenues. I&apos;m always open to new challenges and opportunities that
              will allow me to grow and contribute to exciting projects. Let&apos;s
              see what we can achieve together!
            </p>
            <br />

            <div>
              <a
                className="text-neutral-100 font-semibold px-6 py-3 bg-brand-blue rounded shadow hover:bg-brand-blue my-8"
                href="mailto:simmybajaj1603@gmail.com"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
