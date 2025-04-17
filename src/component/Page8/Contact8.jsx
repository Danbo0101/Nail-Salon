import React from "react";
import { motion } from "framer-motion";
import bgGallery from "../../assets/Image8/bgGallery.jpg";
import contact1 from "../../assets/Image8/contact1.jpg";

const Contact8 = () => {
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
                        Contact Us
                    </h1>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
                        <a href="/template-8" className="underline hover:text-yellow-500/80 transition-all duration-200">Home</a>
                        <span className="mx-1 sm:mx-2">»</span>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={contact1}
                            alt="Contact"
                            className="rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm sm:backdrop-blur-md px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-40 text-center shadow-sm sm:shadow-md">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-serif text-yellow-700/80 mb-3 sm:mb-4 tracking-wider uppercase">
                            Send us a message
                        </h2>
                        <p className="text-gray-700 px-2 sm:px-4 md:px-6 text-base sm:text-lg font-medium leading-relaxed mb-4 sm:mb-6">
                            We welcome your questions. Feel free to call, write, or email us and
                            we'll be happy to answer your questions.
                        </p>
                        <motion.a
                            href="mailto:nguyenhuutho029@gmail.com"
                            whileHover={{
                                scale: 1.05,
                                background: "linear-gradient(to right, #fcd34d, #fbbf24)",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-all text-sm sm:text-base"
                        >
                            EMAIL US
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact8;
