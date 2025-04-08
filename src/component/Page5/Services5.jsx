import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import service1 from "../../assets/Image5/service1.jpg";
import service2 from "../../assets/Image5/service2.jpg";
import service3 from "../../assets/Image5/service3.jpg";
import service4 from "../../assets/Image5/service4.jpg";
import service5 from "../../assets/Image5/service5.jpg";
import service6 from "../../assets/Image5/service6.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services5 = () => {

    const allServices = [
        {
            title: "Service A",
            image: service1,
            items: ["Service A - 01", "Service A - 02", "Service A - 03", "Service A - 04"],
            prices: ["$45+", "$35+", "$25+", "$20+"],
        },
        {
            title: "Service B",
            image: service2,
            items: ["Service B - 01", "Service B - 02", "Service B - 03", "Service B - 04"],
            prices: ["$45", "$35", "$25", "$20"],
        },
        {
            title: "Service C",
            image: service3,
            items: ["Service C - 01", "Service C - 02", "Service C - 03", "Service C - 04"],
            prices: ["$45", "$35", "$25", "$20"],
        },
        {
            title: "Service D",
            image: service4,
            items: ["Service D - 01", "Service D - 02", "Service D - 03", "Service D - 04"],
            prices: ["$45", "$35", "$25", "$20"],
        },
        {
            title: "Service E",
            image: service5,
            items: ["Service E - 01", "Service E - 02"],
            prices: ["$50", "$40"],
        },
        {
            title: "Service F",
            image: service6,
            items: ["Service F - 01", "Service F - 02"],
            prices: ["$60", "$45"],
        },
    ];


    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === "/template-5";

    const displayedServices = isMainPage ? allServices.slice(0, 4) : allServices;

    return (
        <div className="bg-[#efeded] py-16 text-center">
            <div className="max-w-6xl mx-auto px-4 text-black">
                {isMainPage ?
                    <>
                        <h2 className="text-center text-gray-600 mb-2">Services</h2>
                        <h1 className="text-center text-3xl md:text-4xl font-bold mb-20">Our Services</h1>
                    </>
                    :
                    <div className="mt-24">
                        <h2 className="text-center text-gray-600 mb-2">Beauty at the tips of your fingers</h2>
                        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20">SERVICES</h1>
                    </div>
                }

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
                    {displayedServices.map((service, index) => (
                        <div key={index} className="flex flex-col items-center w-full max-w-xs sm:max-w-md mx-auto">
                            <h3 className="font-semibold text-2xl font-serif mb-4">{service.title}</h3>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full border-8 border-green-900/40 object-cover mb-4"
                            />
                            <div className="w-full text-left">
                                {service.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between border-b border-dotted border-gray-400 py-1 mt-4 text-lg sm:text-xl font-mono text-gray-700"
                                    >
                                        <span>{item}</span>
                                        <span className="text-gray-600">{service.prices[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {isMainPage && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => navigate("/template-5/services")}
                            className="px-6 py-2 bg-green-700/60 text-sm text-white rounded-full font-extrabold cursor-pointer hover:bg-green-700 transition flex items-center gap-2"
                        >
                            VIEW MORE
                            <ArrowForwardIcon fontSize="small" />
                        </button>
                    </div>
                )}
            </div>
        </div>

    )

}

export default Services5;