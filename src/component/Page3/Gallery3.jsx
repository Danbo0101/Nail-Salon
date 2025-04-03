import gallery1 from "../../assets/Image3/gallery1.jpg";
import gallery2 from "../../assets/Image3/gallery2.jpg";
import gallery3 from "../../assets/Image3/gallery3.jpg";
import gallery4 from "../../assets/Image3/gallery4.jpg";
import gallery5 from "../../assets/Image3/gallery5.jpg";
import gallery6 from "../../assets/Image3/gallery6.jpg";
import gallery7 from "../../assets/Image3/gallery7.jpg";
import gallery8 from "../../assets/Image3/gallery8.jpg";
import gallery9 from "../../assets/Image3/gallery9.jpg";
import gallery10 from "../../assets/Image3/gallery10.jpg";
import gallery11 from "../../assets/Image3/gallery11.jpg";
import gallery12 from "../../assets/Image3/gallery12.jpg";
import { Facebook, Instagram, Google } from "@mui/icons-material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery3 = () => {

    const imagesGallery = [
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
        <div className="flex flex-col items-center">
            <div className="w-screen h-[250px] sm:h-[300px] bg-gradient-to-b from-[#27272a] via-[#777781] to-[#27272a] flex items-center justify-center">
                <h1 className="font-serif bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-500 text-transparent bg-clip-text text-5xl sm:text-6xl font-medium brightness-85">
                    Gallery
                </h1>
            </div>
            <div className="max-w-5xl px-4 pb-16" data-aos="fade-up">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mt-6">
                    {imagesGallery.map((src, index) => (
                        <div
                            key={index}
                            className="relative group bg-gray-400 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Nail design ${index + 1}`}
                                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pb-4 opacity-0 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                                <div className="flex flex-col space-y-3 sm:space-y-4 items-center">
                                    <Facebook className="text-white hover:text-blue-500 transition-colors duration-200" />
                                    <Instagram className="text-white hover:text-pink-500 transition-colors duration-200" />
                                    <Google className="text-white hover:text-red-500 transition-colors duration-200" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Gallery3;