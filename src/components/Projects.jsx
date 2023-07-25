import React, { useState, useEffect } from "react";

// import projects data
import { projectsData } from "../data";
// import projects nav data
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "todos" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects base on item
    if (item.name === "todos") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto ">
        <ul className="flex flex-col md:flex-row border-b border-pink-300 justify-evenly items-center text-black hover:text-pink-300">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className='lg:flex-row gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item)=>{
            return <Project item={item} key={item.id}/>
        })}
      </section>
    </div>
  );
};

export default Projects;