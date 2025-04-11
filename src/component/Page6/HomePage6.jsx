import { Facebook, Instagram, Google } from '@mui/icons-material';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import logo from "../../assets/Image6/logo.png";
import homePage1 from "../../assets/Image6/homePage1.jpg";
import homePage2 from "../../assets/Image6/homePage2.jpg";
import homePage3 from "../../assets/Image6/homePage3.jpg";
import homePage4 from "../../assets/Image6/homePage4.jpg";

const HomePage6 = () => {

    const [current, setCurrent] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const timeoutRef = useRef(null);

    const slides = [
        {
            image: homePage1,
            title: "LETAKE TIME – BE KIND TO YOURSELF",
            description: "You deserve it",
        },
        {
            image: homePage2,
            title: "RELAX, REFRESH, RECHARGE",
            description: "Your wellness journey starts here",
        },

    ];

    const services = [
        {
            title: 'SERVICE A',
            items: [
                { name: 'Service A - 01', price: '$60' },
                { name: 'Service A - 02', price: '$45' },
            ],
        },
        {
            title: 'SERVICE B',
            items: [
                { name: 'Service B - 01', price: '$40' },
                { name: 'Service B - 02', price: '$50' },
                { name: 'Service B - 03', price: '$65' },
            ],
        },
        {
            title: 'SERVICE C',
            items: [
                { name: 'Service C - 01', price: '$45' },
                { name: 'Service C - 02', price: '$35' },
                { name: 'Service C - 03', price: '$25' },
                { name: 'Service C - 04', price: '$20' },
            ],
        },
        {
            title: 'SERVICE D',
            items: [
                { name: 'Service D - 01', price: '$30' },
                { name: 'Service D - 02', price: '$20' },
            ],
        },
        {
            title: 'SERVICE E',
            items: [
                { name: 'Service E - 01', price: '$55' },
            ],
        },
        {
            title: 'SERVICE F',
            items: [
                { name: 'Service F - 01', price: '$50' },
                { name: 'Service F - 02', price: '$40' },
                { name: 'Service F - 03', price: '$35' },
            ],
        },
    ];

    const testimonials = [
        {
            quote: "Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.",
            name: "Sam Peterson",
        },
        {
            quote: "Best experience ever! The staff was super kind.",
            name: "Lily Adams",
        },
        {
            quote: "I felt like a queen. Highly recommended!",
            name: "Emily Stone",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const slideTo = (newIndex, dir) => {
        setDirection(dir);
        setIndex(newIndex);
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -100 : 100,
            opacity: 0,
        }),
    };

    useEffect(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            slideTo((index + 1) % testimonials.length, 1);
        }, 5000);
        return () => clearTimeout(timeoutRef.current);
    }, [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="text-white ">
                <div className="bg-gradient-to-r from-[#4ba3f2] to-[#0d47a1] px-4 md:px-32 py-4 md:py-5  flex-col md:flex-row md:items-center justify-between gap-4 text-sm font-serif hidden md:flex">
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <img src={logo} alt="Logo" className="w-auto" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center text-center">
                        <div className='flex flex-col gap-1 items-center'>
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Contact Us</p>
                            <p className='font-mono text-sm md:text-lg'>(000) 000-9999</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Email Us</p>
                            <p className='font-mono text-sm md:text-lg'>demo03@gmail.com</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Follow Us</p>
                            <div className="flex gap-2 mt-1">
                                <Facebook fontSize="small" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                                <Instagram fontSize="small" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                                <Google fontSize="small" className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="h-[60vh] md:h-[80vh] overflow-hidden relative flex items-center justify-center text-center px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[current].image}
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[current].image})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 z-10 flex items-center justify-center text-white text-center px-4 font-serif">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slides[current].title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-2xl md:text-5xl italic font-light leading-tight">
                                    {slides[current].title}
                                </h1>
                                <p className="mt-2 md:mt-4 text-sm md:text-xl italic">{slides[current].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="absolute bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${current === idx
                                    ? "bg-white scale-110"
                                    : "border border-white opacity-60 hover:opacity-100"
                                    }`}
                            />
                        ))}
                    </div>
                </section>
            </div>
            <div className="bg-white px-4 py-16 md:py-20 flex flex-col items-center font-serif gap-10">
                <div className="text-center  md:mb-12 px-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-800">WELCOME</h1>
                    <p className="text-base md:text-lg text-gray-500 mt-1">Nail Salon</p>
                </div>
                <div className="w-full md:w-1/2 px-2 md:px-4 sm:block md:hidden ">
                    <img
                        src={homePage3}
                        alt="Nail Salon"
                        className="rounded-2xl shadow-xl w-full object-cover max-h-[400px] md:max-h-none"
                    />
                </div>
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 px-2 md:px-4 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Nail Salon</h2>

                        <div className="flex items-center justify-center md:justify-start text-gray-600">
                            <LocationOnIcon className="mr-2 text-blue-500" />
                            <span className="text-sm md:text-base">9999 Bellaire Blvd, Houston, TX 77036, USA</span>
                        </div>

                        <div className="flex items-center justify-center md:justify-start italic text-gray-700">
                            <PhoneIcon className="mr-2 text-blue-500" />
                            <span className="text-sm md:text-base">(000) 000-9999</span>
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 font-medium">See you at the next appointment</p>

                        <div className="flex justify-center md:justify-start ">
                            <button className="inline-flex items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105 text-sm md:text-base">
                                Appointment <ThumbUpAltIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2 md:px-4 hidden md:block">
                        <img
                            src={homePage3}
                            alt="Nail Salon"
                            className="rounded-2xl shadow-xl w-full object-cover max-h-[400px] md:max-h-none"
                        />
                    </div>
                </div>
            </div>
            <div
                className="relative w-full py-20 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${homePage2})` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center text-white px-6 max-w-2xl flex flex-col items-center justify-center gap-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-blue-300 drop-shadow-lg">
                        BUSINESS HOURS
                    </h2>

                    <div className="space-y-1 text-xl md:text-2xl font-bold">
                        <p>Nail Salon</p>
                        <p >
                            Nails Enhancements & Beautifying Facial
                        </p>
                    </div>

                    <div className="space-y-2 text-lg md:text-xl font-semibold mt-4">
                        <p>
                            <span className="mr-2">Mon - Sat:</span>
                            <span className="font-bold">09:00 AM - 07:00 PM</span>
                        </p>
                        <p>
                            <span className="mr-2">Sun:</span>
                            <span className="font-bold">Closed</span>
                        </p>
                    </div>

                    <button className="mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 px-6 py-3 text-base rounded-full font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-all duration-300">
                        BOOK NOW <ThumbUpAltOutlinedIcon fontSize="medium" />
                    </button>
                </div>
            </div>
            <div className="py-16 md:py-24 px-4 md:px-12 lg:px-24 bg-white text-black font-serif">
                <div className="text-center md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-sky-700/80 tracking-wide uppercase">Services</h2>
                    <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">We Have Many Services</p>
                </div>
                <div className="w-full md:w-1/2 px-1 md:hidden sm:block py-10">
                    <img
                        src={homePage4}
                        alt="Services"
                        className="w-full max-h-[300px] md:max-h-none rounded-2xl shadow-xl object-cover"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2 space-y-6 px-1">
                        {services.map((service, index) => {
                            const isOpen = expandedIndex === index;
                            return (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="flex justify-between items-center w-full font-medium text-base md:text-xl text-left group"
                                    >
                                        <span className="group-hover:text-sky-600/70 transition-colors">
                                            {service.title}
                                        </span>
                                        <span
                                            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        >
                                            {isOpen ? (
                                                <RemoveIcon fontSize="small" className="text-gray-600" />
                                            ) : (
                                                <AddIcon fontSize="small" className="text-gray-600" />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        {service.items.length > 0 && (
                                            <div className="space-y-2 pl-3 text-sm md:text-base text-gray-700">
                                                {service.items.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between pr-4">
                                                        <span>{item.name}</span>
                                                        <span className="font-medium">{item.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="pt-6 md:pt-10 text-center md:text-left">
                            <button className="inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105 text-sm md:text-base">
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-1 hidden md:block">
                        <img
                            src={homePage4}
                            alt="Services"
                            className="w-full max-h-[300px] md:max-h-none rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </div>
            <div
                className="relative bg-cover bg-center py-16 md:py-24 flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${homePage2})` }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative text-center flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-blue-300 tracking-widest uppercase mb-4 sm:mb-6">
                        Make an Appointment
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed mb-8 sm:mb-10">
                        We Make It Our Core Commitment To Provide A Comforting Yet Professional Ambiance,<br className="hidden sm:block" />
                        While Preserving The Luxurious And Modern Salon Etiquette.<br className="hidden sm:block" />
                        Our Salon Is Proud To Have Passionate And Diverse Expert Technicians Always Ready To Service You.
                    </p>

                    <button className="mt-4 sm:mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-all duration-300">
                        BOOK NOW <ThumbUpAltOutlinedIcon fontSize="small" />
                    </button>
                </div>
            </div>

            <div className="w-full py-12 sm:py-16 bg-white text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-widest text-sky-700/80 mb-4 sm:mb-6 uppercase">
                    Happiness Customers
                </h2>
                <div className="h-28 sm:h-32 my-8 sm:my-10 relative overflow-hidden">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={index}
                            variants={variants}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 px-4 max-w-3xl mx-auto text-center"
                        >
                            <p className="text-gray-500 italic text-base sm:text-lg">{testimonials[index].quote}</p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl font-semibold text-gray-800 mt-4"
                            >
                                {testimonials[index].name}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-4 sm:mt-6 flex justify-center space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (i !== index) {
                                    slideTo(i, i > index ? 1 : -1);
                                }
                            }}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${i === index ? "bg-blue-500 scale-110" : "bg-gray-400"
                                }`}
                        ></button>
                    ))}

                </div>
            </div>

        </div>

    );
}

export default HomePage6;