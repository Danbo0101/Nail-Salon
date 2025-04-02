import { useState, useEffect } from "react";
import { Card, CardMedia, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import specialties1 from "../../assets/Image/specialties1.jpg";
import specialties2 from "../../assets/Image/specialties2.jpg";
import specialties3 from "../../assets/Image/specialties3.jpg";
import specialties4 from "../../assets/Image/specialties4.jpg";
import specialties5 from "../../assets/Image/specialties5.jpg";
import specialties6 from "../../assets/Image/specialties6.jpg";
import specialties7 from "../../assets/Image/specialties7.jpg";

const Specialties = () => {
    const images = [specialties1, specialties2, specialties3, specialties4, specialties5, specialties6, specialties7];

    const [index, setIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(3);

    useEffect(() => {
        const updateVisibleImages = () => {
            setVisibleImages(window.innerWidth < 768 ? 1 : 3);
        };
        updateVisibleImages();
        window.addEventListener("resize", updateVisibleImages);
        return () => window.removeEventListener("resize", updateVisibleImages);
    }, []);

    const maxIndex = images.length - visibleImages;

    const handleNext = () => {
        setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    return (
        <div className="bg-black text-center py-16 text-gold flex flex-col">
            <h2 className="text-2xl md:text-4xl font-semibold text-yellow-500 brightness-75">
                SPECIALTIES
            </h2>
            <p className="italic text-gray-400 font-medium mb-8">Top Best Ever Finished</p>
            <div className="relative flex items-center justify-center mt-6 gap-4">
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        "&:hover": { backgroundColor: "#D4AF37" },
                    }}
                >
                    <ChevronLeft fontSize="large" />
                </IconButton>
                <div className="overflow-hidden w-full max-w-[320px] lg:max-w-[1000px] relative">
                    <motion.div
                        className="flex gap-2 lg:gap-4 flex-nowrap"
                        initial={{ x: "0%" }}
                        animate={{ x: `-${index * (100 / visibleImages)}%` }}
                        transition={{ type: "tween", duration: 0.5 }}
                        style={{ display: "flex" }}
                    >
                        {images.map((img, i) => (
                            <Card key={i} className="w-72 md:w-80 flex-shrink-0">
                                <CardMedia component="img" image={img} alt={`Specialty ${i + 1}`} />
                            </Card>
                        ))}
                    </motion.div>
                </div>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#D4AF37" },
                    }}
                >
                    <ChevronRight fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
};

export default Specialties;
