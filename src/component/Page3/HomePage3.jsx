import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import homePage1 from "../../assets/Image3/homePage1.jpg";
import homePage2 from "../../assets/Image3/homePage2.jpg";
import homePage3 from "../../assets/Image3/homePage3.jpg";
import service1 from "../../assets/Image3/service1.jpg";
import service2 from "../../assets/Image3/service2.jpg";
import service3 from "../../assets/Image3/service3.jpg";
import service4 from "../../assets/Image3/service4.jpg";
import service5 from "../../assets/Image3/service5.jpg";
import service6 from "../../assets/Image3/service6.jpg";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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

const HomePage3 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDialog, setOpenDialog] = useState(null);

    const images = [
        { src: homePage1, text: "Palazzio Nail Lounge - Luxury Nails", subText: "Enjoy the Best Destinations with Our Nails Service" },
        { src: homePage2, text: "Experience the Best Nail Art", subText: "Trendy & Stylish Designs Just for You" },
        { src: homePage3, text: "Perfect Nails for Every Occasion", subText: "Beauty and Confidence at Your Fingertips" },
    ];

    const services = [
        {
            id: "A",
            title: "Service A",
            image: service1,
            subServices: [
                { name: "Service A - 01", description: "Description", price: "$45+" },
                { name: "Service A - 02", description: "Description", price: "$35+" },
                { name: "Service A - 03", description: "Description", price: "$25+" },
                { name: "Service A - 04", description: "Description", price: "$20+" },
            ],
        },
        {
            id: "B",
            title: "Service B",
            image: service2,
            subServices: [
                { name: "Service B - 01", description: "Description", price: "$50+" },
                { name: "Service B - 02", description: "Description", price: "$40+" },
                { name: "Service B - 03", description: "Description", price: "$25+" },
                { name: "Service B - 04", description: "Description", price: "$20+" },
            ],
        },
        {
            id: "C",
            title: "Service C",
            image: service3,
            subServices: [
                { name: "Service C - 01", description: "Description", price: "$45+" },
                { name: "Service C - 02", description: "Description", price: "$35+" },
                { name: "Service C - 03", description: "Description", price: "$25+" },
                { name: "Service C - 04", description: "Description", price: "$20+" },
            ],
        },
        {
            id: "D",
            title: "Service D",
            image: service4,
            subServices: [
                { name: "Service D - 01", description: "Description", price: "$50+" },
                { name: "Service D - 02", description: "Description", price: "$40+" },
                { name: "Service D - 03", description: "Description", price: "$25+" },
                { name: "Service D - 04", description: "Description", price: "$20+" },
            ],
        },
        {
            id: "E",
            title: "Service E",
            image: service5,
            subServices: [
                { name: "Service E - 01", description: "Description", price: "$45+" },
                { name: "Service E - 02", description: "Description", price: "$35+" },
                { name: "Service E - 03", description: "Description", price: "$25+" },
                { name: "Service E - 04", description: "Description", price: "$20+" },
            ],
        },
        {
            id: "F",
            title: "Service F",
            image: service6,
            subServices: [
                { name: "Service F - 01", description: "Description", price: "$50+" },
                { name: "Service F - 02", description: "Description", price: "$40+" },
                { name: "Service F - 03", description: "Description", price: "$25+" },
                { name: "Service F - 04", description: "Description", price: "$20+" },
            ],
        },
    ];

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
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleOpen = (id) => {
        setOpenDialog(id);
    };

    const handleClose = () => {
        setOpenDialog(null);
    };


    return (
        <div className="w-screen">
            <div className="relative w-full h-screen overflow-hidden brightness-80">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <motion.img
                            src={image.src}
                            alt={image.text}
                            className="w-full h-screen object-cover"
                            animate={{ scale: index === currentIndex ? (window.innerWidth < 768 ? 1.02 : 1.05) : 1 }}
                            transition={{ duration: 5 }}
                        />
                        <div className="absolute bottom-5 md:bottom-10 left-0 right-0 text-center">
                            <div className="text-yellow-500 brightness-90 w-full text-base md:text-4xl font-serif font-semibold bg-black/60 inline-block py-3 md:py-6 px-4">
                                <h2 className="text-sm md:text-2xl">{image.text}</h2>
                                <p className="text-xs md:text-lg text-white">{image.subText}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 bg-black/10 text-white p-2 md:p-3 rounded-full cursor-pointer hover:bg-black/50"
                    onClick={prevSlide}
                >
                    <ChevronLeft size={window.innerWidth < 768 ? 24 : 30} />
                </button>
                <button
                    className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 bg-black/10 text-white p-2 md:p-3 rounded-full cursor-pointer hover:bg-black/50"
                    onClick={nextSlide}
                >
                    <ChevronRight size={window.innerWidth < 768 ? 24 : 30} />
                </button>
            </div>
            <div className="bg-white text-black flex justify-center py-10 px-4 md:py-16 md:px-6">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center font-serif">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <div className="text-black text-base sm:text-lg">Welcome to</div>
                        <div className="font-semibold text-amber-900/65 text-2xl sm:text-3xl">Nail Salon</div>
                        <div className="space-y-4 md:space-y-6 py-3 font-medium">
                            <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Discover a unique pampering and unforgettable experience at our spa. Here, we value your well-being and comfort above all else. Relax yourself in our modern, spacious surroundings and let our friendly staff pamper you from hands to toes.
                            </div>
                            <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                We take an organic approach to your nails' health, which sets us apart from other salons. We believe healthy nails are linked to your overall vitality; therefore, we want to be a part of your nail maintenance to keep them in optimum condition. Hygiene is taken seriously with us. We thoroughly sterilize and disinfect our nail instruments.
                            </div>
                            <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                All COVID safety measures have been strictly adhered to as your safety is our top priority. We offer a wide variety of natural pedicure and manicure treatments that cater to your preference which includes a range of proven techniques and top quality product brands to revive the skin of your hands and feet. Why not treat yourself to the spa services you truly deserve? Book an appointment today!
                            </div>
                        </div>
                        <button className="px-6 py-3 w-full sm:w-1/2 md:w-1/4 text-sm rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-yellow-500 hover:bg-gradient-to-br focus:ring-yellow-500 dark:focus:ring-amber-200 brightness-90 shadow-md cursor-pointer">
                            BOOK NOW
                        </button>
                    </div>
                    <div className="bg-black text-white rounded-lg shadow-xl p-6 sm:p-8">
                        <div className="flex flex-col items-center">
                            <div className="text-center text-lg sm:text-xl font-semibold text-gray-300 py-1">BUSINESS HOURS</div>
                            <hr className="w-[200px] sm:w-[250px] h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent border-0" />
                            <ul className="text-center mt-4 space-y-2 text-sm sm:text-base">
                                <li>Mon - Fri: <span className="font-semibold">09:30 AM - 07:30 PM</span></li>
                                <li>Saturday: <span className="font-semibold">09:00 AM - 07:00 PM</span></li>
                                <li>Sunday: <span className="font-semibold">10:00 AM - 06:00 PM</span></li>
                            </ul>

                            <div className="text-center text-lg sm:text-xl font-semibold text-gray-300 py-1 mt-6 sm:mt-10">CONTACTS</div>
                            <hr className="w-[120px] sm:w-[150px] h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent border-0" />

                            <div className="text-center mt-2 text-sm sm:text-base">Phone: (000) 000-1222</div>
                            <div className="text-center text-sm sm:text-base">Address: 999 Avenida del Libertador</div>
                            <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
                                {[FacebookOutlinedIcon, InstagramIcon, GoogleIcon].map((Icon, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border-2 border-amber-400/75 text-white transition duration-300 hover:bg-white hover:text-amber-400 shadow-lg"
                                    >
                                        <Icon sx={{ color: "#E6BE8A" }} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-6 sm:mt-8">
                                <div className="border-1 border-amber-400/75 px-8 py-2 sm:px-10 sm:py-3 rounded-sm text-sm sm:text-base shadow-md text-white cursor-pointer hover:text-amber-400/75">
                                    CONTACT US
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-b from-white to-zinc-900 text-white p-10">
                <div className="flex flex-col items-center py-8 gap-2 font-serif">
                    <h3 className="text-sm sm:text-base md:text-lg text-black">Giving time for your nail</h3>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-amber-900/65 font-serif">OUR SERVICES</h2>
                    <hr className="w-[150px] sm:w-[200px] md:w-[250px] h-[2px] bg-gradient-to-r from-transparent via-amber-900/65 to-transparent border-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-sm md:max-w-5xl mx-auto">
                    {services.map((service) => (
                        <div key={service.id}>
                            <div
                                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                onClick={() => handleOpen(service.id)}
                            >
                                <img src={service.image} alt={service.title} className="w-full h-40  md:h-60 object-cover" />
                                <div className="absolute inset-0 top-32 lg:top-52 bg-black/50 h-1/6 flex flex-col justify-center p-4">
                                    <h3 className="text-sm md:text-base font-semibold">{service.title}</h3>
                                </div>
                            </div>

                            <Dialog open={openDialog === service.id} onClose={handleClose} fullWidth maxWidth="sm">
                                <div className="bg-gradient-to-r from-[#8b5e34] to-[#c9a27b] p-4 flex justify-between items-center">
                                    <DialogTitle className="text-white font-semibold">{service.title}</DialogTitle>
                                    <IconButton onClick={handleClose}>
                                        <CloseIcon className="text-white" />
                                    </IconButton>
                                </div>
                                <DialogContent className="bg-white p-4">
                                    {service.subServices.map((sub, index) => (
                                        <div key={index} className="flex justify-between py-3 border-b">
                                            <div>
                                                <h4 className="font-semibold text-lg sm:text-xl">{sub.name}</h4>
                                                <p className="text-gray-500 italic text-sm sm:text-base">{sub.description}</p>
                                            </div>
                                            <p className="font-bold text-gray-700">{sub.price}</p>
                                        </div>
                                    ))}
                                </DialogContent>
                            </Dialog>
                        </div>
                    ))}
                </div>
            </div>
            <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black/70 text-white py-5 px-8 md:px-52">
                <div className="flex flex-col items-center py-8 gap-2 font-serif">
                    <h3 className="text-sm sm:text-base md:text-lg">Gallery</h3>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-amber-400/80 font-serif">OUR GALLERY</h2>
                    <hr className="w-[150px] sm:w-[200px] md:w-[250px] h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent border-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {imagesGallery.map((src, index) => (
                        <div key={index} className="relative group bg-gray-400 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                            <img
                                src={src}
                                alt={`Nail design ${index + 1}`}
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-75"
                            />

                            <div className="absolute inset-0 flex items-center justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex flex-col space-y-4 items-center">
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

export default HomePage3;