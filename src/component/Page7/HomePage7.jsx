import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import homePage1 from "../../assets/Image7/homePage1.jpg";
import homePage2 from "../../assets/Image7/homePage2.jpg";
import homePage3 from "../../assets/Image7/homePage3.jpg";
import { useScroll } from "../General/ScrollContext";
import AboutUs7 from "./AboutUs7";
import Gallery7 from "./Gallery7";
import Service7 from "./Service7";
import Contact7 from "./Contact7";

const HomePage7 = () => {

    const { setActiveSection } = useScroll();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        homePage1, homePage2, homePage3
    ];

    const sections = [
        { id: "home", ref: useInView({ threshold: 0.5 }) },
        { id: "about", ref: useInView({ threshold: 0.5 }) },
        { id: "gallery", ref: useInView({ threshold: 0.5 }) },
        { id: "services", ref: useInView({ threshold: 0.1 }) },
        { id: "contact", ref: useInView({ threshold: 0.5 }) },
    ];

    useEffect(() => {
        const active = sections.find(({ ref }) => ref.inView);
        if (active) setActiveSection(active.id);
    }, [sections, setActiveSection]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="bg-[#313131]">
            <div
                ref={sections[0].ref.ref}
                id="home"
                className="relative w-full min-h-screen"
            >
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>

                <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-10 md:px-20">
                    <div className="max-w-md text-white flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
                            Nail Salon
                        </h1>
                        <button className="text-sm cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:rotate-3 hover:opacity-90 active:scale-95">
                            APPOINTMENT
                        </button>
                    </div>
                </div>
            </div>

            <div ref={sections[1].ref.ref} id="about"><AboutUs7 /></div>
            <div ref={sections[2].ref.ref} id="gallery"><Gallery7 /></div>
            <div ref={sections[3].ref.ref} id="services"><Service7 /></div>
            <div ref={sections[4].ref.ref} id="contact"><Contact7 /></div>
        </div>
    )
}

export default HomePage7;