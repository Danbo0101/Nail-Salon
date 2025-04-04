import logo from "../../assets/Image4/logo.png";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useScroll } from "../General/ScrollContext";

const Header4 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { activeSection, setActiveSection } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "specialties", label: "Specialties" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contacts" },
    ];

    const handleScrollToSection = useCallback((id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
            setIsOpen(false);
        }
    }, [setActiveSection]);

    return (
        <header
            className={`fixed top-0 left-0 w-full px-6 md:px-14 py-4 flex items-center justify-between 
                transition-all duration-300 z-50 ${isScrolled ? "bg-[#6B3F1F]/80 backdrop-blur-lg shadow-md" : "bg-[#6B3F1F]"}`}
        >
            <img src={logo} alt="Logo" />
            <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
            <div className="hidden md:flex space-x-12 font-semibold text-base">
                {menuItems.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => handleScrollToSection(id)}
                        className={`text-white transition-transform hover:scale-120 cursor-pointer ${activeSection === id ? "scale-120 !text-amber-500/80 font-bold" : "opacity-80"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-16 left-0 w-full bg-[#6B3F1F] flex flex-col items-center py-4 space-y-4 md:hidden"
                >
                    {menuItems.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleScrollToSection(id)}
                            className="text-white text-lg"
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header4;
