import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import homePage1 from "../../assets/Image4/homePage1.jpg";
import homePage2 from "../../assets/Image4/homePage2.jpg";
import homePage3 from "../../assets/Image4/homePage3.jpg";
import homePage4Bg from "../../assets/Image4/homePage4Bg.jpg";
import AboutUs4 from "./AboutUs4";
import Specialties4 from "./Specialties4";
import Services4 from "./Services4";
import Contact4 from "./Contact4";
import { useScroll } from "../General/ScrollContext";

const HomePage4 = () => {
    const { setActiveSection } = useScroll();
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [homePage1, homePage2, homePage3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const sections = [
        { id: "home", ref: useInView({ threshold: 0.5 }) },
        { id: "about", ref: useInView({ threshold: 0.5 }) },
        { id: "specialties", ref: useInView({ threshold: 0.5 }) },
        { id: "services", ref: useInView({ threshold: 0.1 }) },
        { id: "contact", ref: useInView({ threshold: 0.5 }) },
    ];

    useEffect(() => {
        const active = sections.find(({ ref }) => ref.inView);
        if (active) setActiveSection(active.id);
    }, [sections, setActiveSection]);


    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    return (
        <div className="pt-14 md:pt-20">
            <div ref={sections[0].ref.ref} id="home" className="flex flex-col md:flex-row w-full h-auto md:h-[600px] bg-white overflow-hidden">
                <div
                    className="w-full md:w-1/3 h-64 md:h-full bg-cover bg-center flex flex-col justify-center items-center p-6 text-white"
                    style={{ backgroundImage: `url(${homePage4Bg})` }}
                >
                    <h2 className="text-2xl md:text-4xl font-extralight font-serif">Nail Salon</h2>
                    <p className="mt-2 text-xs md:text-sm font-bold">THE BEST EXPERIENCE</p>
                    <button className="mt-4 bg-white text-[#5C3B2E] px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
                        Book Now
                    </button>
                </div>
                <div className="w-full md:w-2/3 relative overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="Nail Art" className="w-full h-64 md:h-[600px] object-cover shrink-0" />
                        ))}
                    </div>
                    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500/30 p-2 rounded-full opacity-70 hover:opacity-100" onClick={prevSlide}>
                        <ArrowBackIos />
                    </button>
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500/30 p-2 rounded-full opacity-70 hover:opacity-100" onClick={nextSlide}>
                        <ArrowForwardIos />
                    </button>
                </div>
            </div>

            <div ref={sections[1].ref.ref} id="about"><AboutUs4 /></div>
            <div ref={sections[2].ref.ref} id="specialties"><Specialties4 /></div>
            <div ref={sections[3].ref.ref} id="services"><Services4 /></div>
            <div ref={sections[4].ref.ref} id="contact"><Contact4 /></div>
        </div>
    );
};

export default HomePage4;
