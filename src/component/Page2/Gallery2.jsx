import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../../assets/Image2/gallery1.jpg";
import gallery2 from "../../assets/Image2/gallery2.jpg";
import gallery3 from "../../assets/Image2/gallery3.jpg";
import gallery4 from "../../assets/Image2/gallery4.jpg";
import gallery5 from "../../assets/Image2/gallery5.jpg";
import gallery6 from "../../assets/Image2/gallery6.jpg";
import gallery7 from "../../assets/Image2/gallery7.jpg";
import gallery8 from "../../assets/Image2/gallery8.jpg";
import gallery9 from "../../assets/Image2/gallery9.jpg";
import gallery10 from "../../assets/Image2/gallery10.jpg";
import gallery11 from "../../assets/Image2/gallery11.jpg";
import gallery12 from "../../assets/Image2/gallery12.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Gallery2 = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="pt-24 bg-gradient-to-b from-neutral-600 to-neutral-900 text-white text-center min-h-[250px] flex flex-col justify-center items-center gap-4 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 brightness-90">
                    Gallery
                </h1>
                <div>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={<span style={{ color: "white" }}>/</span>}
                        sx={{
                            "& .MuiBreadcrumbs-separator": { color: "white" },
                            fontSize: "16px",
                            "@media (min-width: 640px)": { fontSize: "20px" },
                            fontFamily: "serif",
                        }}
                    >
                        <Link
                            underline="hover"
                            color="white"
                            href="/template-2"
                            sx={{
                                fontSize: "16px",
                                "@media (min-width: 640px)": { fontSize: "20px" },
                                fontFamily: "serif",
                            }}
                        >
                            Home
                        </Link>
                        <Typography
                            sx={{
                                color: "#ecd453",
                                fontSize: "16px",
                                "@media (min-width: 640px)": { fontSize: "20px" },
                                fontFamily: "serif",
                            }}
                        >
                            Gallery
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="max-w-5xl mx-auto p-4 flex flex-col items-center py-10" data-aos="fade-up">
                <h3 className="text-yellow-300 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-10 border-yellow-300 brightness-90 border" /> Nail Salon <hr className="w-10 border-yellow-300 brightness-90 border" />
                </h3>
                <h2 className="text-3xl md:text-4xl mb-10 text-yellow-300 brightness-90 font-serif">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 place-items-center">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Gallery ${index}`}
                            className="w-full object-cover cursor-pointer rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-white text-3xl font-bold"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>

                            <motion.img
                                src={selectedImage}
                                alt="Fullscreen"
                                className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    )
}

export default Gallery2;