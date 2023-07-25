import React from "react";

// import social data
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-gray-100 w-12 lg:w-auto h-12 lg:text-accent border lg:border-none rounded"
            key={index}
          >
            <a className="text-3xl lg:text-base" href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;