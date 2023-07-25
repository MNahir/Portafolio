import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col lg:flex-row-reverse lg:place-content-between items-center lg:items-start text-center mb-10 p-1 lg:h-fit border-b border-gray-400 pb-10 "
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-once="true">
      <div className="lg:max-w-[50%] border-x-4 border-y-[30px] border-gray-200 rounded-2xl cursor-pointer relative group">
        <a href={item.href} target="_blank" rel="noreferrer">
          
          <img
            src={item.image}
            alt=""
            className="transition-all duration-150 transform scale-100 group-hover:scale-125"
            />
        </a>
      </div>

      <div className="lg:w-[45%]">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="capitalize text-accent font-bold text-pink-400 text-lg mb-3">{item.category}</p>
        <p className="text-sm">{item.description}</p>
        <div className="flex justify-center items-center mt-10">
          {item.links?.map((link, index) => {
            return (
              <a href={link.href} target="_blank" rel="noreferrer">
                <button
                  key={index}
                  className="appearance-none bg-transparent border border-gray-100 box-border text-black-100 cursor-pointer inline-block font-Roobert font-medium text-base leading-normal my-0 mx-[20px] min-h-12 min-w-0 outline-none px-5 py-4 text-center no-underline transition-all duration-300 ease-cubic-bezier will-change-transform hover:text-primary hover:bg-pink-300 hover:shadow-md active:shadow-none active:translate-y-0 rounded-lg"
                >
                  {link.icon}
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;