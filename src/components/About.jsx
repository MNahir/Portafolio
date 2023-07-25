import React from "react";

// import image
import Image from "../assets/img/contact/fotoperfil.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section bg-tertiary flex items-center min-h-screen" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          <img
            className="object-cover h-full md:mx-auto md:h-1/2 md:w-1/2 lg:w-1/2 border-slate-400 lg:mx-0 rounded-3xl bg-primary"
            src={Image}
            alt=""
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="700"
          />
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <div className="flex flex-col">
              <h2 className="text-gray-600 text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 xl:mt-[2.5rem] before:-top-[2rem] before:hidden before:lg:block">
                Nahir Maresca
              </h2>
              <p className="mb-4 text-accent text-pink-400 font-bold">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-lg">
                Soy Desarrolladora de Software Full Stack. En mi experiencia cuento con la creación de 
                aplicaciones web eficientes y escalables, desarrolladas con diferentes tecnologías; HTML, CSS, JavaScript, Node.js, React.js, Redux, Express, PostgreSQL, 
                Sequelize, Next.js, ContextApi, MongoDB y Tailwin.
                Me destaco por fomentar el trabajo en equipo, teniendo amplio desarrollo de soft skills mediante el uso de metodologias ágiles, lo que me convierte en una profesional organizada y
                eficaz.
                Me apasiona el front end, emprender nuevos desafíos y estar en constante crecimiento.
              </p>
            </div>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={900}
              className="transition-all duration-300"
            >
             {/*  <button className="btn btn-md rounded-full bg-gray-300 text-black hover:bg-pink-300">
                ¡Trabajemos juntos!
              </button> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;