import React, { useState, useEffect } from "react";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { windowDimensions } from "./WindowsDimentions";
import { ImWhatsapp } from "react-icons/im";

const Header = () => {
  const [bg, setBg] = useState(false);
  const scrolled = windowDimensions.navScrolled;
  const nav = windowDimensions.navHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      style={bg ? { minHeight: `${scrolled}px` } : { minHeight: `${nav}px` }}
      className={`${
        bg ? "bg-tertiary" : "bg-none"
      } flex items-center fixed top-0 w-full 
      text-white text-lg font-bold text-[20px] hover:bg-pink-300 z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:flex items-center">
        
          <Socials />
          <a href="https://wa.me/542494377713"  className="flex items-center text-green-400 text-lg ml-7">
                <ImWhatsapp className="mr-2"/>
              </a>
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;