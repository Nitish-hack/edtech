import { IoPeople } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";  
import { FaBookReader } from "react-icons/fa";

import course1 from "./assets/course1.jpg";
import course2 from "./assets/course2.jpg";
import course3 from "./assets/course3.jpg"
import course4 from "./assets/course4.jpg"

import internship1 from "./assets/internship1.jpg"
import internship2 from "./assets/internship2.png"
import internship3 from "./assets/internship3.jpg"
import internship4 from "./assets/internship4.jpg"


import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Instructor",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title:"Affordable Learning",
    content: "We offer budget-friendly, advanced courses with valuable content.",
  },
  {
    id: 2,
    icon: <FaBookReader />,
    title:"Simplified Internships",
    content: "Explore virtual internships in Web Dev, App Dev, Full Stack, ML, and Data Science",
  },
  
  {
    id: 3,
    icon: <SiHiveBlockchain />,
    title:"Structured Learning",
    content: "Enjoy growth-oriented courses and internship, tailored for maximum skill development.",
  },
  
  {
    id: 4,
    icon: <IoPeople />,
    title:"Build your Network",
    content: "We believe in networking to connect with other interns who are interested in the same things.",
  },
  
];

export const courses = [
  {
    id: 1,
    image: course1,
    category: "Web Development",
    title: "Complete Web Development Course",
    participants: 700,
 
  },
  {
    id: 2,
    image: course2,
    category: "Data Science",
    title: "Data Science Advanced course",
    participants: 300,
  
  },
  {
    id: 3,
    image: course3,
    category: "Android Development",
    title: "Advanced Android Development",
    participants: 500,
  },
  {
    id: 4,
    image: course4,
    category: "DSA",
    title: "Data Structures and Algorithms",
    participants: 600,
    
  },
  
];

export const internships = [
  {
    id: 1,
    image: internship1,
    category: "Web Development",
    role: "Web Developer ",
    duration: 4,
 
  },
  {
    id: 2,
    image: internship2,
    category: "Data Science",
    role: "Data Science Intern",
    duration: 4,
  },
  {
    id: 3,
    image: internship3,
    category: "Android Development",
    role: "Android Developer",
    duration: 4,
  },
  {
    id: 4,
    image: internship4,
    category: "c++",
    role: "C++ Programmer",
    duration: 4,
    
  },
  
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is NexusLearn?",
    answer:"NexusLearn is a dynamic online learning platform that offers a diverse range of courses and training programs. Empowering individuals to acquire new skills, our platform fosters a community of continuous learning, connecting learners with expert instructors for an enriching educational experience"
  },
  {
    id: 2,
    title: "What can I learn from NexusLearn?",
    answer:"At NexusLearn, you can learn a wide array of skills through our diverse courses. Our edtech platform specializes in providing practical training and valuable internships, ensuring you gain hands-on experience in your chosen field."
  },
  {
    id: 3,
    title: "Will interns get certificate?",
    answer:"Yes, interns will get certificate"
  },
  {
    id: 4,
    title: "What are the fees for the courses?",
    answer:"Complete our course inquiry form, and our team will reach out to you to discuss the course structure and fees. We offer budget-friendly courses and provide discounts to make learning even more accessible."
  },
];
