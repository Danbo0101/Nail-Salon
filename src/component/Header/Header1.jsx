import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Image/logo.png";

const Header1 = (props) => {
    const [active, setActive] = useState("HOME");
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "HOME", ref: "homeRef" },
        { name: "ABOUT US", ref: "aboutRef" },
        { name: "SPECIALTIES", ref: "specialtiesRef" },
        { name: "SERVICES", ref: "servicesRef" },
        { name: "GALLERY", ref: "galleryRef" },
        { name: "APPOINTMENT", ref: "appointmentRef" }
    ];


    return (
        <div className="bg-gradient-to-r from-[#b58d53] to-[#d4ad71] px-6 py-4">
            <div className="flex items-center justify-between px-0 md:px-10">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="hidden md:flex space-x-8 text-white uppercase font-semibold">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`cursor-pointer ${active === item.name ? "text-black underline underline-offset-4" : "text-white"
                                }`}
                            onClick={() => {
                                setActive(item.name)
                                props.scrollToSection(item.ref);
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
                <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {menuOpen && (
                <ul className="mt-4 space-y-3 bg-[#b58d53] md:hidden text-white uppercase font-semibold p-4 rounded-lg">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`cursor-pointer ${active === item.name ? "text-black underline underline-offset-4" : "text-white"
                                }`}
                            onClick={() => {
                                setActive(item.name);
                                props.scrollToSection(item.ref);
                                setMenuOpen(false);
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header1;
