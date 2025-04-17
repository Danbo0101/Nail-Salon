

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header8 from "../component/Header/Header8";
import bg from "../assets/Image8/bg.jpg"
import Footer8 from "../component/Footer/Footer8";


const App8 = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setVisible(window.scrollY > 300);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="w-full bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            < Header8 />
            <Outlet />
            <Footer8 />
            <button
                onClick={scrollToTop}
                className={`fixed bottom-10 right-5 p-3 bg-[#7a5b2d] brightness-90 text-white rounded-full shadow-lg transition-opacity duration-300 cursor-pointer 
                        ${visible ? "opacity-30 hover:opacity-100" : "opacity-0"}`}
                aria-label="Scroll to Top"
            >
                <ArrowUp size={24} />
            </button>
        </div >
    );
};

export default App8;
