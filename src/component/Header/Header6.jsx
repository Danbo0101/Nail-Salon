import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/Image6/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header6 = () => {
    const navItems = [
        { name: 'Home', href: '/template-6' },
        { name: 'About Us', href: '/template-6/about' },
        { name: 'Services', href: '/template-6/services' },
        { name: 'Gallery', href: '/template-6/gallery' },
        { name: 'Contacts', href: '/template-6/contact' },
        { name: 'Appointment', href: '/template-6' },
    ];

    const location = useLocation();
    const [active, setActive] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrolledTop, setScrolledTop] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleClick = (name) => {
        setActive(name);
        setMenuOpen(false);
    };

    useEffect(() => {
        const current = navItems.find((item) => item.href === location.pathname);
        if (current) {
            setActive(current.name);
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            setScrolledTop(window.scrollY > window.innerHeight / 6);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`w-full md:w-full px-4 py-4 z-50 transition-all duration-500 ease-in-out
    ${scrolled ? 'md:bg-blue-800/80 md:shadow-lg md:backdrop-blur-md' : 'md:bg-gradient-to-r md:from-blue-400 md:to-blue-900'}
    md:fixed md:left-1/2 md:transform md:-translate-x-1/2
    ${scrolledTop ? 'md:top-0 md:translate-y-0 opacity-100' : 'md:top-21 md:translate-y-6 opacity-90'}
    bg-gradient-to-r from-blue-400 to-blue-900
  `}
        >
            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center space-x-24">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.href}
                            onClick={() => handleClick(item.name)}
                            className={`text-white font-medium tracking-wide text-xl transition-all duration-200 pb-1 cursor-pointer ${active === item.name
                                ? 'italic border-b-2 border-white'
                                : 'hover:scale-110 hover:border-b hover:border-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Toggle */}
            <div className="md:hidden flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-10" />
                <button onClick={toggleMenu} className="text-white">
                    {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden mt-3 bg-blue-800 flex flex-col items-center space-y-4 py-4 rounded-xl shadow-lg"
                    >
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    onClick={() => handleClick(item.name)}
                                    className={`text-white text-base tracking-wide transition-all duration-200 ${active === item.name
                                        ? 'italic border-b-2 border-white pb-1'
                                        : 'hover:italic hover:border-b hover:border-white pb-1'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header6;


