import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import service1 from "../../assets/Image2/service1.jpg";
import service2 from "../../assets/Image2/service2.jpg";
import service3 from "../../assets/Image2/service3.jpg";
import service4 from "../../assets/Image2/service4.jpg";
import service5 from "../../assets/Image2/service5.jpg";
import service6 from "../../assets/Image2/service6.jpg";



const Services2 = () => {

    const services = [
        {
            category: "Manicure Service",

            items: [
                { name: "ROYAL MANICURE (35 Minutes)", price: "$45" },
                { name: "TROPICAL DELUXE MANICURE (30 Minutes)", price: "$37" },
                { name: "DELUX MANICURE (20 Minutes)", price: "$27" },
                { name: "EXPRESS MANICURE (15 Minutes)", price: "$20" },
            ],
            image: service1
        },
        {
            category: "Pedicure Services",

            items: [
                { name: "CHAMPAGNE & ROSE (65 Minutes)", price: "$79" },
                { name: "ROYAL PEDICURE (60 Minutes)", price: "$69" },
            ],
            image: service2
        },
        {
            category: "Kid (Who Are 50 Inches Or Below)",

            items: [
                { name: "Manicure", price: "$15" },
                { name: "Pedicure", price: "$20" },
                { name: "Polish change hand", price: "$8" },
                { name: "Polish change feet", price: "$10" },
            ],
            image: service3
        },
        {
            category: "Additional Services",
            items: [
                { name: "French Tip Polish", price: "$10" },
                { name: "Hot Stone Massage", price: "$10" },
                { name: "Paraffin Wax Hands/Feet", price: "$10" },
                { name: "Long Nails", price: "$5-$70" },
                { name: "Other Shapes that are not square", price: "$5" },
            ],
            image: service4
        },
        {
            category: "Repair",
            items: [
                { name: "Repair with additional services (each nail)", price: "$5" },
                { name: "Removal acrylic, dip without additional services", price: "$15" },
                { name: "Removal acrylic, dip with additional services", price: "$10" },
                { name: "Removal gel with additional services", price: "$5" },
            ],
            image: service5
        },
        {
            category: "Waxing",

            items: [
                { name: "Eyebrows", price: "$10+" },
                { name: "Lip", price: "$7+" },
                { name: "Half Arm", price: "$25+" },
                { name: "Full Arms", price: "$30+" },
                { name: "Hands and Fingers", price: "$7+" },
                { name: "Underarms", price: "$20+" },
                { name: "Full Back", price: "$45+" },
            ],
            image: service6
        }
    ];

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="pt-24 bg-gradient-to-b from-neutral-600 to-neutral-900 text-white text-center min-h-[250px] flex flex-col justify-center items-center gap-4 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 brightness-90">
                    Services
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
                            Services
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className=" text-yellow-200 min-h-screen py-16 px-6 md:px-10 flex flex-col items-center justify-center" data-aos="fade-up">
                <h3 className="text-yellow-300 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-8 border-yellow-300 brightness-90 border" /> Nail Salon <hr className="w-8 border-yellow-300 brightness-90 border" />
                </h3>
                <h2 className="text-3xl md:text-4xl mb-10 text-yellow-300 brightness-90 font-serif">Our Services</h2>
                <div className="max-w-6xl mx-auto space-y-10 font-serif">
                    {services.map((service, index) => (
                        <div key={index} className="bg-transparent p-6 rounded-lg flex flex-col md:flex-row gap-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                            <img src={service.image} alt={service.category} className="w-52 h-52 rounded-lg object-cover" />
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-white">{service.category}</h3>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        {service.items.filter((_, i) => i % 2 === 0).map((item, i) => (
                                            <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                                                <span className="text-white w-2/3">{item.name}</span>
                                                <span className="font-bold text-yellow-400">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-3">
                                        {service.items.filter((_, i) => i % 2 !== 0).map((item, i) => (
                                            <div key={i} className="flex justify-between border-b border-gray-700 pb-1">
                                                <span className="text-white w-2/3">{item.name}</span>
                                                <span className="font-bold text-yellow-400">{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services2;