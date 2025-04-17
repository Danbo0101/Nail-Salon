import React from "react";
import { motion } from "framer-motion";
import bgGallery from "../../assets/Image8/bgGallery.jpg";
import gallery1 from "../../assets/Image8/gallery1.jpg";
import gallery2 from "../../assets/Image8/gallery2.jpg";
import gallery3 from "../../assets/Image8/gallery3.jpg";
import gallery4 from "../../assets/Image8/gallery4.jpg";
import gallery5 from "../../assets/Image8/gallery5.jpg";
import gallery6 from "../../assets/Image8/gallery6.jpg";
import gallery7 from "../../assets/Image8/gallery7.jpg";
import gallery8 from "../../assets/Image8/gallery8.jpg";

const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
];

const Gallery8 = () => {
    return (
        <div className="text-center min-h-screen mt-24">
            <div
                className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgGallery})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-white text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif mb-2 sm:mb-3 drop-shadow-lg">
                        Our Gallery
                    </h1>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
                        <a href="/template-8" className="underline hover:text-yellow-500/80 transition-all duration-200">Home</a>
                        <span className="mx-1 sm:mx-2">»</span>
                        <span>Gallery</span>
                    </div>
                </div>
            </div>
            <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg cursor-pointer aspect-square"
                        >
                            <img
                                src={src}
                                alt={`Nail design ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery8;
