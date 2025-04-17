import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Image8/logo.png";
import bgHeader from "../../assets/Image8/bgHeader.jpg";
import { useLocation } from 'react-router-dom';

const Header8 = () => {

    const texts = [
        "WE ARE NOW OPEN! CALL US TO BOOK YOUR APPOINTMENT NOW AT (866) 542-3702",
        "WE ARE NOW OPEN! CALL US TO BOOK YOUR APPOINTMENT NOW AT (866) 542-3702",
    ];

    const [current, setCurrent] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % texts.length);
        }, 25000);
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => {
        return location.pathname === path ||
            (path !== '/template-8' && location.pathname.startsWith(path));
    };

    return (
        <>
            <style>{`
    @keyframes scroll-stop-center {
        0% {
            transform: translateX(calc(100vw - 5rem));
        }
        40% {
            transform: translateX(calc(50vw - 50% - 7rem));
        }
        60% {
            transform: translateX(calc(50vw - 50% - 7rem));
        }
        100% {
            transform: translateX(calc(-100% + 5rem));
        }
    }
    
    @keyframes scroll-stop-center-mobile {
        0% {
            transform: translateX(100vw);
        }
        40% {
            transform: translateX(0);
        }
        60% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .marquee {
        display: inline-block;
        white-space: nowrap;
        animation: scroll-stop-center 25s linear infinite;
        position: absolute;
        text-align: center;
    }
    
    @media (max-width: 768px) {
        .marquee {
            white-space: normal;
            width: 100%;
            text-align: center;
            animation: scroll-stop-center-mobile 25s linear infinite;
        }
    }
`}</style>

            <div
                className="fixed top-0 left-0 right-0 z-50 text-white px-4 md:px-20"
                style={{ backgroundImage: `url(${bgHeader})` }}
            >
                <div className="h-18 md:h-10 overflow-hidden relative border-b border-yellow-400/20 flex items-center">
                    <div key={current} className="marquee text-sm tracking-widest text-gray-400">
                        {(() => {
                            const phoneRegex = /\(\d{3}\)\s\d{3}-\d{4}/;
                            const text = texts[current];
                            const match = text.match(phoneRegex);

                            if (!match) return text;

                            const [before, after] = text.split(match[0]);

                            return (
                                <>
                                    {before}
                                    <span className="text-yellow-400">{match[0]}</span>
                                    {after}
                                </>
                            );
                        })()}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 relative">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <img src={logo} alt="ZOTA Logo" className="w-12 md:w-18" />
                        <button
                            className="md:hidden text-yellow-400 focus:outline-none text-2xl"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                        </button>
                    </div>
                    <div className="hidden md:flex flex-row space-x-10 text-sm font-serif font-medium tracking-widest">
                        <a href="/template-8" className={isActive('/template-8') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>HOME</a>
                        <a href="/template-8/services" className={isActive('/template-8/services') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>SERVICES</a>
                        <a href="/template-8/booking" className={isActive('/template-8/booking') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>BOOKING</a>
                        <a href="/template-8/gallery" className={isActive('/template-8/gallery') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>GALLERY</a>
                        <a href="/template-8/contact" className={isActive('/template-8/contact') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>CONTACT US</a>
                    </div>
                    <button className="hidden md:block mt-4 md:mt-0 relative overflow-hidden text-sm font-serif cursor-pointer border border-yellow-400 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-yellow-400">
                        <span className="relative z-10">CALL NOW</span>
                    </button>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                key="mobile-menu"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-full left-0 w-full bg-black/80 bg-opacity-90 md:hidden flex flex-col items-center space-y-4 py-6 z-50 text-xs font-serif font-medium tracking-widest"
                            >
                                <a onClick={closeMenu} href="/template-8/" className={isActive('/template-8') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>HOME</a>
                                <a onClick={closeMenu} href="/template-8/services" className={isActive('/template-8/services') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>SERVICES</a>
                                <a onClick={closeMenu} href="/template-8/booking" className={isActive('/template-8/booking') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>BOOKING</a>
                                <a onClick={closeMenu} href="/template-8/gallery" className={isActive('/template-8/gallery') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>GALLERY</a>
                                <a onClick={closeMenu} href="/template-8/contact" className={isActive('/template-8/contact') ? 'text-yellow-400' : 'hover:text-yellow-400 transition'}>CONTACT US</a>
                                <button className="md:hidden sm:block mt-4 md:mt-0 relative overflow-hidden text-sm font-serif cursor-pointer border border-yellow-400 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-yellow-400">
                                    <span className="relative z-10">CALL NOW</span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-transparent z-40 md:hidden"
                                onClick={closeMenu}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default Header8;
