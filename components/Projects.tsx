import Image from "next/image";
import config from "../util/config.json";

const Projects = () => {
  const projects = config.projects;
  return (
    <div
      id={projects.title}
      className="px-8 md:px-16 md:px-32 pb-16 bg-gray-100"
    >
      <h1 className="pt-12 uppercase font-bold text-center text-black text-bold text-4xl">
        {projects.title}
      </h1>
      <div>
        <ul>
          {projects.projects.map((item) => (
            <li
              key={item.title}
              className="flex flex-col justify-center lg:flex-row mt-12"
            >
              <div className="lg:w-1/3">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-6">{item.description}</p>
                <div className="flex mt-4">
                  <div className="text-md text-center font-semibold p-0.5 border-2 border-dark-blue-ocean rounded-md">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <span className="block py-0.5 px-2 bg-white bg-dark-blue-ocean bg-clip-text text-dark-blue-ocean">
                        See Project
                      </span>
                    </a>
                  </div>
                  <div className="bg-gray-100 ml-2 font-semibold">
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <span className="block py-1 px-2 bg-white bg-dark-blue-ocean bg-clip-text text-dark-blue-ocean">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:ml-12">
                <Image
                  src={item.image}
                  alt="project image"
                  className="mt-6 md:mt-12 lg:mt-0 w-full shadow-lg"
                  width={600}
                  height={350}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Projects;
