import {
    Navbar,
    Home,
    About,
    Teacher,
    Contact,
    Courses,
    Footer,
    
  } from "./components/index";
  
  
  
  function Homepage() {
    return (
      <div className="font-Poppins bg-Solitude">
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Teacher />
        <Contact />
        <Footer />
        
      </div>
    );
  }
  
  export default Homepage;
  