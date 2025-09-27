import React, { useState } from 'react';
import { Facebook, Instagram, Google, Menu, Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    'Home', 'Services', 'Booking', 'Gift Cards', 'Gallery',
    'Careers', 'Policy', 'Blog', 'Contact Us'
];

const dropdownItems = ['Promotions', 'Host a Party'];

const Header9 = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-zinc-900 text-white px-6 py-4 shadow-md rounded-b-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="w-12 h-12 bg-white rounded overflow-hidden">
                    {/* Chèn hình logo vào đây */}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-wide">
                    {navItems.map((item) => (
                        <span key={item} className="hover:text-yellow-300 cursor-pointer">{item}</span>
                    ))}

                    {/* Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setEventsOpen(true)}
                        onMouseLeave={() => setEventsOpen(false)}
                    >
                        <span className="cursor-pointer flex items-center hover:text-yellow-300">
                            Events <span className="ml-1 text-xs">▼</span>
                        </span>
                        <AnimatePresence>
                            {eventsOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50"
                                >
                                    {dropdownItems.map((item) => (
                                        <li
                                            key={item}
                                            className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                {/* Right Side (Icons + Button) */}
                <div className="hidden lg:flex items-center gap-4">
                    {[Facebook, Google, Instagram].map((Icon, i) => (
                        <Icon key={i} fontSize="small" className="hover:text-yellow-400 cursor-pointer" />
                    ))}
                    <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition px-4 py-2 rounded-full text-xs uppercase tracking-widest">
                        Call<br />Now →
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden text-yellow-400">
                    {mobileOpen ? (
                        <Close onClick={toggleMobile} className="cursor-pointer" />
                    ) : (
                        <Menu onClick={toggleMobile} className="cursor-pointer" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-4 overflow-hidden"
                    >
                        <div className="flex flex-col gap-3 text-sm uppercase tracking-wide">
                            {navItems.map((item) => (
                                <div key={item} className="hover:text-yellow-300 cursor-pointer">{item}</div>
                            ))}

                            {/* Dropdown for Mobile */}
                            <div>
                                <div className="flex justify-between items-center hover:text-yellow-300 cursor-pointer">
                                    <span>Events</span>
                                </div>
                                <div className="ml-4 mt-1 space-y-1 text-yellow-200">
                                    {dropdownItems.map((item) => (
                                        <div key={item} className="hover:text-yellow-100 cursor-pointer">{item}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Icons + Button */}
                            <div className="flex gap-4 pt-4 border-t border-zinc-800">
                                {[Facebook, Google, Instagram].map((Icon, i) => (
                                    <Icon key={i} fontSize="small" className="hover:text-yellow-400 cursor-pointer" />
                                ))}
                            </div>
                            <button className="mt-3 border border-yellow-400 rounded-full px-5 py-2 text-xs uppercase tracking-widest text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                                Call Now →
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header9;
