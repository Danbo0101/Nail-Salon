import { useEffect } from "react";
import { Facebook, Instagram, Google } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";
import background02 from '../../assets//Image2/background02.jpg';
import homepage1 from '../../assets/Image2/homepage1.jpg';
import homepage2 from '../../assets/Image2/homepage2.jpg';
import homepage3 from '../../assets/Image2/homepage3.jpg';
import homepage4 from '../../assets/Image2/homepage4.jpg';
import homepage5 from '../../assets/Image2/homepage5.jpg';
import homepage6 from '../../assets/Image2/homepage6.jpg';
import homepage7 from '../../assets/Image2/homepage7.jpg';
import homepage8 from '../../assets/Image2/homepage8.jpg';
import homepage9 from '../../assets/Image2/homepage9.jpg';
import homepage10 from '../../assets/Image2/homepage10.jpg';
import homepage11 from '../../assets/Image2/homepage11.jpg';
import homepage12 from '../../assets/Image2/homepage12.jpg';
import homepage13 from '../../assets/Image2/homepage13.jpg';
import homepage14 from '../../assets/Image2/homepage14.jpg';
import homepage15 from '../../assets/Image2/homepage15.jpg';



const HomePage2 = () => {

    const services = [
        { title: "Manicure Service", image: homepage2 },
        { title: "Pedicure Services", image: homepage3 },
        { title: "Kid (Who Are 50 Inches Or Below)", image: homepage4 },
        { title: "Additional Services", image: homepage5 },
        { title: "Repair", image: homepage6 },
        { title: "Waxing", image: homepage7 },
    ];

    const images = [
        homepage8,
        homepage9,
        homepage10,
        homepage11,
        homepage12,
        homepage13,
        homepage14,
        homepage15,
    ];

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="relative w-full h-screen flex items-center justify-center px-4">
                <div className="absolute inset-0">
                    <img
                        src={background02}
                        alt="Hero Image"
                        className="w-full h-full object-cover brightness-30"
                    />
                </div>
                <div className="relative text-center text-white max-w-2xl px-4">
                    <h1 className="text-4xl md:text-5xl font-medium font-serif text-yellow-500 brightness-90">
                        NAIL SALON
                    </h1>
                    <p className="mt-4 text-sm md:text-base font-serif font-medium leading-relaxed">
                        Located conveniently in Texas 77036, our nail salon is one of the best salons in this area. We offer premier nail care and spa treatments to enhance your natural beauty and refresh your day.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-yellow-500 brightness-90 text-white font-semibold rounded-lg cursor-pointer hover:bg-yellow-400 hover:text-black transition">
                        FANPAGE
                    </button>
                </div>
            </div>
            <div className="bg-[#303030] text-white flex items-center justify-center p-8">
                <div className="max-w-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-[#303030] p-6 ">
                    <div className="w-full md:w-1/3 p-4 flex justify-end">
                        <img
                            src={homepage1}
                            alt="Nail Salon"
                            className="rounded-lg shadow-lg "
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                        <h3 className="text-yellow-500 brightness-90 text-sm md:text-base font-serif font-semibold uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
                            <hr className="w-8 border-yellow-500 border" /> About Us <hr className="w-8 border-yellow-500 border" />
                        </h3>
                        <h1 className="text-xl md:text-2xl font-serif font-bold mb-4 flex flex-col gap-1">
                            Welcome to <span className="text-yellow-500 brightness-90 text-2xl md:text-3xl">NAIL SALON</span>
                        </h1>
                        <p className="text-white mb-4 font-medium font-serif leading-relaxed">
                            We always strive to provide the highest quality and customer experience with our services. We constantly improve our technology to offer you the best service.
                        </p>
                        <p className="text-white font-medium font-serif leading-relaxed">
                            We provide a range of nail care services, including pedicures, manicures, nail polish, dip powders, waxing, and more. We strive to satisfy all of our clients.
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#222] py-16 text-center text-white flex flex-col items-center justify-center">
                <h3 className="text-yellow-500 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-8 border-yellow-500 brightness-90 border" /> Special <hr className="w-8 border-yellow-500 brightness-90 border" />
                </h3>
                <h2 className="text-3xl md:text-4xl mb-10 text-yellow-500 brightness-90 font-serif">Top Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 max-w-6xl mx-auto cursor-pointer">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-transparent rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                            data-aos="fade-up"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 sm:h-52 object-cover"
                            />
                            <div className="p-4 sm:p-5 text-center">
                                <h3 className="text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#303030] text-white py-12 px-16  md:px-44 gap-4">
                <h1 className="font-serif text-2xl sm:text-3xl font-medium uppercase text-yellow-500 brightness-90">
                    Nail Salon
                </h1>
                <div className="text-center font-light font-serif text-sm md:text-base max-w-3xl mx-auto">
                    We make it our core commitment to provide a comforting yet professional ambiance, while preserving the luxurious and modern salon etiquette. Our salon is proud to have passionate and diverse expert technicians always ready to service you.
                    Thank you for choosing us for your beauty care!
                </div>
                <button className="mt-6 px-6 py-2 bg-yellow-500 brightness-90 text-black font-semibold rounded-lg cursor-pointer hover:bg-yellow-400 hover:text-white transition">
                    FANPAGE
                </button>
            </div>
            <div className="bg-[#222] px-6 sm:px-12 md:px-40 py-12 text-center flex flex-col items-center">
                <h3 className="text-yellow-500 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-8 border-yellow-500 brightness-90 border" /> Highlight <hr className="w-8 border-yellow-500 brightness-90 border" />
                </h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 text-yellow-500 brightness-90 font-serif">Top Choice</h2>
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

    );
}

export default HomePage2;