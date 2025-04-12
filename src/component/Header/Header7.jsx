import React, { useEffect, useState, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useScroll } from "../General/ScrollContext";
import logo from "../../assets/Image7/logo.png";


const Header7 = () => {

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
        { id: "gallery", label: "Gallery" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contacts" },
    ];

    const handleScrollToSection = useCallback(
        (id) => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                setActiveSection(id);
                setIsOpen(false);
            }
        },
        [setActiveSection]
    );


    return (

        <div
            className={`fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-12 sm:w-14" />
            </div>
            <ul className="hidden md:flex space-x-10 lg:space-x-14 text-base font-serif font-medium">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer hover:text-yellow-400 hover:scale-110 transition ${activeSection === item.id ? "text-yellow-400" : "text-white"
                            }`}
                        onClick={() => handleScrollToSection(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className="hidden md:block border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 cursor-pointer">
                (000) 000–1222
            </div>
            <div className="md:hidden z-50 text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </div>
            <div
                className={`absolute top-full left-0 w-full px-6 py-4 md:hidden bg-black/70 backdrop-blur-md text-white rounded-b-xl shadow-md transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center space-y-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`text-base cursor-pointer transition-all duration-200 ${activeSection === item.id ? "text-yellow-400 font-semibold" : ""
                                }`}
                            onClick={() => {
                                handleScrollToSection(item.id);
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                    <div className="text-yellow-400 border border-yellow-400 px-3 py-1 rounded-full text-xs font-semibold text-center transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:scale-105 cursor-pointer">
                        (000) 000–1222
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header7;