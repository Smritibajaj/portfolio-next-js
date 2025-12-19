import React from "react";
import Image from "next/image";

const skills = [
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Node JS" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Next.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Angular" },
  { skill: "AWS" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "AI Integration" },
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
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Senior Full-Stack Engineer with{" "}
                <strong>8+ years of experience </strong>
                building scalable web, mobile, and AI-powered products.
              </li>
              <li>
                Hands-on across{" "}
                <strong>frontend, backend, and AI integration</strong>,
                delivering reliable, production-ready systems.
              </li>
              <li>
                Strong expertise in{" "}
                <strong>
                  React, React Native, Next.js, Node.js, and Python
                </strong>
                , used in real-world, high-impact applications.
              </li>
              <li>
                Delivered AI-driven features including{" "}
                <strong>
                  document intelligence, image analysis, and LLM-powered
                  workflows
                </strong>
                .
              </li>
              <li>
                Built and scaled products in{" "}
                <strong>HealthTech and B2B SaaS </strong>
                with a strong focus on performance, security, and user
                experience.
              </li>
            </ul>

            <br />

            <div>
              <a
                className="text-neutral-100 font-semibold px-6 py-3 bg-brand-blue rounded shadow hover:bg-brand-blue my-8 inline-block"
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
