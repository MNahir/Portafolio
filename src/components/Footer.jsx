import React from "react";

// import social data
import { social } from "../data";


// import icon 
import { ImWhatsapp } from "react-icons/im";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mx-auto space-y-6 lg:space-y-0 items-center justify-between py-6">

          <div className="flex lg:w-1/3"> 
            <div className="flex flex-col mx-5 md:mx-[100px]">
              <div className="flex space-x-6 items-center justify-center"> 
                {social.map((item, index) => {
                  const { href, icon, name } = item;
                  return (
                    <a href={href} key={index} target="_blank" rel="noreferrer">
                      <div className="flex items-center text-center space-x-4 text-pink-300 text-sm">
                        <div className="mr-2">{icon}</div>
                        <p>{name}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex space-x-20 items-center justify-center">
              <a className="flex space items-center justify-center" href='mailto:marescanahir18@gmail.com' target="_blank" rel="noreferrer">
              <IoMdMail className="text-white mr-2 text-lg"></IoMdMail>
            <p className="text-white text-lg">Gmail</p>
            </a>

            <a className="flex space items-center justify-center" href="https://wa.me/542494377713" className="flex items-center">
                <ImWhatsapp className="text-green-400 text-lg mr-2"/>
                <p className="text-green-400 text-lg">WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white w-full border-t border-pink-400 text-sm px-2 py-2">
        © 2023 | HTTP MARESCA NAHIR Desarrollo Web | Derechos Reservados.
      </p>
    </footer>
  );
};

export default Footer;
