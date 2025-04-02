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
import { Facebook, Instagram, Google } from "@mui/icons-material";


const Specialties2 = () => {

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
                    Specialties
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
                            Specialties
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="max-w-5xl mx-auto p-4 flex flex-col items-center py-10" data-aos="fade-up">
                <h3 className="text-yellow-300 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-9 border-yellow-300 brightness-90 border" /> Nail Salon <hr className="w-9 border-yellow-300 brightness-90 border" />
                </h3>
                <h2 className="text-3xl md:text-4xl mb-10 text-yellow-300 brightness-90 font-serif">Specialties</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 px-4 sm:px-8">
                    {images.map((src, index) => (
                        <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
                            <img
                                src={src}
                                alt={`Nail design ${index + 1}`}
                                className="w-full  sm:h-48 md:h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex space-x-4">
                                    <Facebook className="text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-200" />
                                    <Instagram className="text-gray-800 cursor-pointer hover:text-pink-600 transition-colors duration-200" />
                                    <Google className="text-gray-800 cursor-pointer hover:text-red-600 transition-colors duration-200" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Specialties2;