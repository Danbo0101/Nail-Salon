import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header6 from "../component/Header/Header6";
import Footer6 from "../component/Footer/Footer6";


const App6 = () => {
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
        <div className="w-full">
            <Header6 />
            <Outlet />
            <Footer6 />


            <button
                onClick={scrollToTop}
                className={`fixed bottom-10 right-5 p-3 bg-green-800/80 brightness-90 text-white rounded-full shadow-lg transition-opacity duration-300 cursor-pointer 
                        ${visible ? "opacity-30 hover:opacity-100" : "opacity-0"}`}
                aria-label="Scroll to Top"
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

export default App6;
