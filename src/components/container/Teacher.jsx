import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="sm:section smallsection " id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8 ">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5 max-sm:text-justify">
          Join our platform as an instructor and shape the learning experiences of eager individuals. Whether you're a seasoned professional or passionate about sharing knowledge, contribute to our dynamic educational community. Inspire others on their learning journey and foster a culture of continuous growth. Become an instructor today and make a meaningful impact!
          </p>
          <a href="https://forms.gle/hHXd6wgcEYybrL5w9" target="to_blank"><button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold tracking-wide">
            Apply Now!
          </button> </a>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        
      </div>
      <div className="text-center font-bold sm:text-[1.875rem] text-[1.5rem] sm:mt-28 ">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
