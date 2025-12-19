import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Dampsoft Athena",
    description:
      "Athena is a ios application for dentist to manage digital anamnesis, consultation, and patient education.",
    image: "/athena.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://www.dampsoft.com/athena/",
    technology: [
      "AI Integration",
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "React Native",
      "Next JS",
      "Typescript",
      "AWS"
    ],
  },
  {
    name: "Service Up",
    description:
      "Service Up is an marketplace for vehicle maintenance and repair services.",
    image: "/serviceup.avif",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://www.serviceup.com/",
    technology: [
      "AI Integration",
      "React JS",
      "Redux",
      "Node JS",
      "React Native",
      "Next JS",
      "Typescript",
      "Nest JS",
      "Docker",
      "Postgres",
      "AWS"
    ],
  },
  {
    name: "Leena AI",
    description:
      "A Gen AI employee assistant that reduces IT, HR, Finance tickets. We guarantee 70% self-service ratio in the contract.",
    image: "/leena.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://leena.ai/",
    technology: [
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "React Native",
      "Next JS",
      "Typescript",
      "AWS",
      "Node JS"
    ],
  },
  {
    name: "UMANG",
    description:
      "UMANG provides a single platform for all Indian Citizens to access pan India e-Gov services ranging from Central to Local Government bodies.",
    image: "/Umang.png",
    technology: ["Angular JS", "HTML", "CSS"],
  },
  {
    name: "People Management SAAS",
    description:
      "People management software-as-a-service (SaaS) for a resilient, connected and adaptable future",
    image: "/PeopleSaas.png",
    //github: "https://github.com/Smritibajaj",
    link: "https://www.allocatesoftware.com/",
    technology: ["React JS", "Redux", "React Testing Library", "Typescript"],
  },
  {
    name: "Grorapid",
    description:
      "Execute ready made growth recipes for your business to get more customers, grow your audience and engage using the best email marketing platform. Clean and Validate your email lists in bulk to increase deliverability and get maximum conversions on your cold campaigns",
    image: "/grorapid.png",
    github: "https://github.com/Smritibajaj",
    link: "https://www.grorapid.com/",
    technology: ["React JS", "Redux", "React Testing Library", "Typescript"],
  },
  {
    name: "SHL",
    description:
      "Evaluate candidate fit, readiness, and potential with an unmatched portfolio of personality tests, skills assessments, and job simulations.",
    image: "/shl.png",
    // github: "https://github.com/Smritibajaj",
    //link: "https://www.grorapid.com/",
    technology: ["React JS", "Redux", "React Testing Library", "Typescript"],
  },
  {
    name: "Rehustle",
    description:
      "Rehustle is a platfrom for creators who want to monetize their products or services from clicks of user's mobile phone, get a single profile link and get paid easily.",
    image: "/rehustle.png",
    github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://rehustle.co/Simmy",
    technology: [
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "Express",
      "Mongo DB",
      "Typescript"
    ],
  },
  {
    name: "TransportGanj",
    description:
      "TransportGanj is leading and most trusted logistics & truck transportation services provider company in Gujarat, India.",
    image: "/transportganj.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://www.transportganj.com/",
    technology: [
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "Express",
      "Postgres",
      "Typescript"
    ],
  },
  {
    name: "Invesco Fixed Income",
    description: "",
    image: "/buydesk.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    //link: "https://www.transportganj.com/",
    technology: [
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "Fast API",
      "Typescript"
    ],
  },
  {
    name: "BuyDesk",
    description:
      "SAAS in Procudement.Streamline sourcing and procurement with BuyDesk.",
    image: "/buydesk.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    //link: "https://www.transportganj.com/",
    technology: [
      "React JS",
      "Redux",
      "React Testing Library",
      "Node JS",
      "Nest JS",
      "Typescript"
    ],
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Top Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-brand-blue border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project?.link ? (
                      <Link href={project?.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap pb-2">
                    {project.technology.map((technologyName) => (
                        <div
                          key={technologyName}
                          className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium"
                        >
                          <div className="flex-initial max-w-full leading-none text-md font-normal">
                            {technologyName}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project?.github ? (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <></>
                      )}
                      {project?.link ? (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
