import { Facebook, Instagram, Google } from '@mui/icons-material';
import logo from "../../assets/Image6/logo.png";
import about1 from "../../assets/Image6/about1.jpg";
import gallery1 from "../../assets/Image6/gallery1.jpg";
import gallery2 from "../../assets/Image6/gallery2.jpg";
import gallery3 from "../../assets/Image6/gallery3.jpg";
import gallery4 from "../../assets/Image6/gallery4.jpg";
import gallery5 from "../../assets/Image6/gallery5.jpg";
import gallery6 from "../../assets/Image6/gallery6.jpg";
import { motion } from "framer-motion";
import { useState } from "react";


const FlipCard = ({ src }) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
        if (window.innerWidth < 640) {
            setFlipped((prev) => !prev);
        }
    };

    return (
        <div
            className="w-full h-[400px] sm:h-[450px]"
            onMouseEnter={() => window.innerWidth >= 640 && setFlipped(true)}
            onMouseLeave={() => window.innerWidth >= 640 && setFlipped(false)}
            onClick={toggleFlip}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    className="absolute w-full h-full rounded-lg shadow-md"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt="gallery"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div
                    className="absolute w-full h-full bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center p-4"
                    style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <h3 className="text-blue-800 font-bold text-lg">NAIL SALON</h3>
                    <p className="text-gray-600">Special</p>
                </div>
            </motion.div>
        </div>
    );
};


const Gallery6 = () => {

    const images = [
        gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
    ];

    return (
        <>
            <div className="text-white relative">
                <div className="bg-gradient-to-r from-[#4ba3f2] to-[#0d47a1] px-4 sm:px-10 md:px-32 py-6 flex-col md:flex-row md:items-center justify-between gap-6 text-sm font-serif hidden md:flex">
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <img src={logo} alt="Logo" className="w-auto max-h-14" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center text-center">
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Contact Us</p>
                            <p className="font-mono text-sm md:text-lg">(000) 000-9999</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Email Us</p>
                            <p className="font-mono text-sm md:text-lg">demo03@gmail.com</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Follow Us</p>
                            <div className="flex gap-2 mt-1">
                                <Facebook fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                                <Instagram fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                                <Google fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src={about1} className="w-full h-60 sm:h-72 md:h-80 object-cover" alt="About Us Banner" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            </div>
            <div className="py-20 bg-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold font-serif text-sky-600/80 tracking-wide mb-20 uppercase">
                    OUR GALLERY
                </h2>
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-14 lg:gap-20">
                    {images.map((src, index) => (
                        <FlipCard key={index} src={src} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Gallery6