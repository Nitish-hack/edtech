import React from "react";
import { categories, internships } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import Internship from "./Internship"

import { FaCode } from "react-icons/fa";
import domain from "../../../assets/domains.gif";



const Courses = () => {
 
  
  return (
    <div className="sm:section  smallsection" >
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
           <span className="text-Teal">What you will get?</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto max-sm:text-justify">
         
Fed up with spending too much money on classes and internships? If you want a certification or summer training without burning a hole in your pocket, come join us at NexusLearn. Unleash your potential without breaking the bank!
        </p>
      </div>
      <div
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>

      {/* what we provide! */}
      <div className="widesection mt-10">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div >
          <img src={domain} className="rounded-md" alt="domains we provide" />
        </div>
        <div>
          
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-2 text-Teal">
          Get Specialised In These Domains
          </div>
          <p className="text-sm  leading-7 mb-4">
          At NexusLearn, we excel in various domains to bring your ideas to life. Our skills include:
          </p>
          <div className="domain-style "> <FaCode />  <p className="text-sm">Web Development</p> </div>
          <div className="domain-style "> <FaCode />  <p className="text-sm">Android Development</p> </div>
          <div className="domain-style "> <FaCode />  <p className="text-sm">Data Structures and Algorithm</p> </div>
          <div className="domain-style "> <FaCode />  <p className="text-sm">Data Science</p> </div>
         
        </div>
      </div>
    </div>
    {/* courses */}

   

      <div className="text-xl font-bold mt-10 mb-10 " id="courses">Most Popular Courses</div>
      
        <div className="flex gap-[1%] mt-5 flex-wrap max-xs:flex-col items-center">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
 </div>
      
   <br />
   <br />
      <div className="text-xl font-bold mt-20 mb-10 ">Most Popular Internships</div>
      <div className="flex gap-[1%] mt-5 flex-wrap max-xs:flex-col items-center">
          {internships.map((internship) => {
            return <Internship key={internship.id} {...internship} />;
          })}
   
      </div>
   

    </div>
  );
};

export default Courses;
