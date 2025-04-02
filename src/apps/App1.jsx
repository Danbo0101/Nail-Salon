import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import Header1 from "../component/Header/Header1";
import Footer1 from "../component/Footer/Footer1";
import HomePage from "../component/Page1/HomePage";



const App1 = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionsRef = {
    aboutRef: useRef(null),
    specialtiesRef: useRef(null),
    servicesRef: useRef(null),
    galleryRef: useRef(null),
  };

  const scrollToSection = (section) => {
    if (section === "homeRef") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionRef = sectionsRef[section];

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="w-full" >
      <Header1 scrollToSection={scrollToSection} />
      <HomePage
        scrollToSection={scrollToSection}
        sectionsRef={sectionsRef}
      />
      <Footer1 />
      <div
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-10 right-5 p-3 bg-yellow-500 brightness-90 text-white rounded-full shadow-lg transition-opacity duration-300 
    ${visible ? "opacity-30 hover:opacity-100" : "opacity-0"}`}
      >
        <ArrowUp size={24} />
      </div>

    </div>
  );
};


export default App1;