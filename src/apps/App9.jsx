

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header9 from "../component/Header/Header9";



const App9 = () => {
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
        // style={{
        //     backgroundImage: `url(${bg})`
        // }}
        >
            <Header9 />
            <Outlet />

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

export default App9;
