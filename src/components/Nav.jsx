import React from "react";
// import navigation data
import { navigation } from "../data";
// import link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white transition-colors duration-200 hover:text-black"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={900}
                className="transition-all duration-200 p-3 relative before:content-[''] before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-0 before:rounded-md before:transition-all before:bg-accent hover:before:w-full"
              >
                {item.name}
              </Link>
            </li>   
          );
        })}
        <a         
          className="hidden lg:flex flex-1 justify-end items-center h-full opacity-90"
          href="https://drive.google.com/drive/folders/1WxKfmAw86aIvb5PS8vm2dvIl0lCk4EPI"
          target="_blank"
          rel="noreferrer"
        >
          Curriculum Vitae
        </a>
      </ul>
    </nav>
  );
};

export default Nav;