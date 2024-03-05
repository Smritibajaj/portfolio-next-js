import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "UMANG",
    description:
      "UMANG provides a single platform for all Indian Citizens to access pan India e-Gov services ranging from Central to Local Government bodies.",
    image: "/Umang.png",
  },
  {
    name: "People Management SAAS",
    description:
      "People management software-as-a-service (SaaS) for a resilient, connected and adaptable future",
    image: "/PeopleSaas.png",
    //github: "https://github.com/Smritibajaj",
    link: "https://www.allocatesoftware.com/",
  },
  {
    name: "Grorapid",
    description:
      "Execute ready made growth recipes for your business to get more customers, grow your audience and engage using the best email marketing platform. Clean and Validate your email lists in bulk to increase deliverability and get maximum conversions on your cold campaigns",
    image: "/grorapid.png",
    github: "https://github.com/Smritibajaj",
    link: "https://www.grorapid.com/",
  },
  {
    name: "SHL",
    description:
      "Evaluate candidate fit, readiness, and potential with an unmatched portfolio of personality tests, skills assessments, and job simulations.",
    image: "/shl.png",
   // github: "https://github.com/Smritibajaj",
    //link: "https://www.grorapid.com/",
  },
  {
    name: "Rehustle",
    description:
      "Rehustle is a platfrom for creators who want to monetize their products or services from clicks of user's mobile phone, get a single profile link and get paid easily.",
    image: "/rehustle.png",
    github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://rehustle.co/Simmy",
  },
  {
    name: "TransportGanj",
    description:
      "TransportGanj is leading and most trusted logistics & truck transportation services provider company in Gujarat, India.",
    image: "/transportganj.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://www.transportganj.com/",
  },
  {
    name: "Invesco Fixed Income",
    description:
      "",
    image: "/buydesk.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    //link: "https://www.transportganj.com/",
  },
  {
    name: "BuyDesk",
    description:
      "SAAS in Procudement.Streamline sourcing and procurement with BuyDesk.",
    image: "/buydesk.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    //link: "https://www.transportganj.com/",
  },
  {
    name: "Leena AI",
    description:
      "A Gen AI employee assistant that reduces IT, HR, Finance tickets. We guarantee 70% self-service ratio in the contract.",
    image: "/leena.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://leena.ai/labs/knowledge-gpt/",
  },
  {
    name: "Experttal",
    description:
      "People Search Platform.",
    image: "/experttal.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://beta.experttal.com",
  },
  {
    name: "Publsh",
    description: "An E store for Digital Media Company.",
    image: "/publsh.png",
    // github: "https://github.com/grorapid/indiehustle-frontend.git",
    link: "https://www.publsh.media/",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
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
