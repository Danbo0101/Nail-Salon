import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Image2/logo.png";
import { useNavigate } from "react-router-dom";

const Header2 = () => {

    const navigate = useNavigate();

    const [active, setActive] = useState("Home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", link: "/template-2" },
        { name: "About Us", link: "/template-2/about" },
        { name: "Services", link: "/" },
        { name: "Gallery", link: "/" },
        { name: "Specialties", link: "/" },
        { name: "Appointment", link: "/" },
        { name: "Contacts", link: "/" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-6">
                <img src={logo} alt="MSPRING Logo" className="w-16 md:w-20" />
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
                <ul className="hidden md:flex space-x-4">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button
                                className={`px-4 py-2 text-white font-semibold font-serif text-sm rounded-lg transition duration-300 cursor-pointer ${active === item
                                    ? "text-yellow-500"
                                    : "hover:bg-gradient-to-r from-yellow-500 to-yellow-400 brightness-90 hover:text-black shadow-md"
                                    }`}
                                onClick={() => {
                                    setActive(item.name);
                                    navigate(item.link)
                                }}
                            >
                                {item.name.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-center transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setIsOpen(false)}>
                    <CloseIcon fontSize="large" />
                </button>

                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className="text-white text-lg py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition w-full"
                        onClick={() => {
                            setActive(item);
                            navigate(item.link);
                            setIsOpen(false);
                        }}
                    >
                        {item.name.toUpperCase()}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header2;
