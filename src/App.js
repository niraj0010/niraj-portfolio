import  Home  from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
   <div> 
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Skills /> 
    <Testimonials />
    <Contact /> 
    <Footer />

  

    <SocialLinks />

     
    </div>
  );
}

export default App;
