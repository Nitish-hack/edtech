import React from "react";
import about from "../../assets/About1.png";

const About = () => {
  return (
    <div className="sm:section smallsection" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2 text-Teal">

            Who we are, What we do?   
          </div>
          <p className="text-sm text-gray leading-7 mb-4 max-sm:text-justify">
          We are a pioneering EdTech startup dedicated to empowering students in mastering coding skills and applying their knowledge through internship opportunities that we offer.
           <br />
           <br />
           We are a team of engineers who understand the unique needs of students. Unlike typical EdTech companies that often have high charges, we empathize with the challenges students face. That's why we offer valuable resources at an affordable cost, ensuring accessibility for all.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
