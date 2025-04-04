import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import specialties1 from "../../assets/Image4/specialties1.jpg";
import specialties2 from "../../assets/Image4/specialties2.jpg";
import specialties3 from "../../assets/Image4/specialties3.jpg";
import specialties4 from "../../assets/Image4/specialties4.jpg";
import specialties5 from "../../assets/Image4/specialties5.jpg";
import specialties6 from "../../assets/Image4/specialties6.jpg";
import specialties7 from "../../assets/Image4/specialties7.jpg";
import specialties8 from "../../assets/Image4/specialties8.jpg";
import specialties9 from "../../assets/Image4/specialties9.jpg";


const Specialties4 = () => {

    const nails = [
        { id: 1, img: specialties1, title: "Nail Salon 1" },
        { id: 2, img: specialties2, title: "Nail Salon 2" },
        { id: 3, img: specialties3, title: "Nail Salon 3" },
        { id: 4, img: specialties4, title: "Nail Salon 4" },
        { id: 5, img: specialties5, title: "Nail Salon 5" },
        { id: 6, img: specialties6, title: "Nail Salon 6" },
        { id: 7, img: specialties7, title: "Nail Salon 7" },
        { id: 6, img: specialties8, title: "Nail Salon 8" },
        { id: 7, img: specialties9, title: "Nail Salon 9" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 5;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % nails.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleNails = () => {
        const extended = [...nails, ...nails];
        return extended.slice(currentIndex, currentIndex + visibleCards);
    };

    return (
        <div className="bg-gradient-to-r from-[#f8ebe6] to-[#ffecde] w-full h-fit md:h-screen text-center md:py-32 md:px-20 py-20 px-6">
            <div className="flex flex-col items-center md:items-start mb-16 space-y-4 sm:mb-8 sm:space-y-2">
                <h3 className="text-sm font-semibold text-[#6d4023] flex items-center gap-2">
                    <hr className="w-8 hidden md:block" />Our Special
                </h3>
                <h2 className="md:text-3xl font-extrabold text-[#6d4023] text-2xl">
                    Our selection of nails with quality
                </h2>
            </div>

            <div className="overflow-hidden w-full relative">
                <motion.div
                    key={currentIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="flex space-x-4 py-4 justify-center overflow-hidden sm:overflow-x-auto sm:scrollbar-hide"
                >
                    {getVisibleNails().map((nail) => (
                        <motion.div
                            key={nail.id + Math.random()}
                            whileHover={{ scale: 1.1 }}
                            className="min-h-[120px] bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-300 min-w-[100px]"
                        >
                            <div className="rounded-lg overflow-hidden">
                                <img src={nail.img} alt={nail.title} className="w-full object-cover " />
                                <div className="p-4 bg-brown-600 bg-[#6B3F1F]/80 text-white">
                                    <h3 className="font-extrabold hidden md:block">{nail.title}</h3>
                                    <p className="text-xs flex flex-col gap-2 md:flex-row md:gap-0 font-semibold items-center justify-center">
                                        <CalendarMonthIcon className="mr-1 text-sm" fontSize="smail" /> Book Now
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>

    );
}
export default Specialties4;