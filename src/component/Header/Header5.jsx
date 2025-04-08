import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Image5/logo.png";
import { motion, AnimatePresence } from 'framer-motion';

const Header5 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-green-100/90 backdrop-blur-md shadow-md"
                : "bg-green-200/10 backdrop-blur-sm"
                }`}
        >
            <div className="md:hidden flex items-center justify-between px-4 py-4">
                <img src={logo} alt="Logo" className="w-20" />
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                    {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col items-center space-y-4 pb-4 text-gray-800 font-light text-lg font-mono"
                    >
                        {["home", "gallery", "services", "contacts"].map((item) => (
                            <a
                                key={item}
                                href={item === "home" ? `/template-5` : `/template-5/${item}`}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-green-600"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="hidden md:flex mx-auto px-6 py-4 items-center justify-center ml-10">
                <div className="flex items-center justify-center space-x-10 text-gray-800 font-medium font-mono">
                    <a
                        href="/template-5"
                        className="hover:scale-110 hover:text-green-600 transition-all duration-200"
                    >
                        Home
                    </a>
                    <a
                        href="/template-5/gallery"
                        className="hover:scale-110 hover:text-green-600 transition-all duration-200"
                    >
                        Gallery
                    </a>
                    <img src={logo} alt="Logo" className="w-24" />
                    <a
                        href="/template-5/services"
                        className="hover:scale-110 hover:text-green-600 transition-all duration-200"
                    >
                        Services
                    </a>
                    <a
                        href="/template-5/contact"
                        className="hover:scale-110 hover:text-green-600 transition-all duration-200"
                    >
                        Contacts
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Header5;