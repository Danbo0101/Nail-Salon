import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header4 from "../component/Header/Header4";
import Footer4 from "../component/Footer/Footer4";
import { ScrollProvider } from "../component/General/ScrollContext";

const App4 = () => {
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
        <ScrollProvider>
            <div className="w-full">
                <Header4 />
                <Outlet />
                <Footer4 />
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-10 right-5 p-3 bg-yellow-500 brightness-90 text-white rounded-full shadow-lg transition-opacity duration-300 
                        ${visible ? "opacity-30 hover:opacity-100" : "opacity-0"}`}
                    aria-label="Scroll to Top"
                >
                    <ArrowUp size={24} />
                </button>
            </div>
        </ScrollProvider>
    );
};

export default App4;
