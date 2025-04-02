import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header2 from "../component/Header/Header2";
import Footer2 from "../component/Footer/Footer2";



const App2 = (props) => {
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

  return (
    <div className="w-full" >
      <Header2 />
      <Outlet />
      <Footer2 />
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


export default App2;