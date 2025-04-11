import { Facebook, Instagram, Google } from '@mui/icons-material';
import logo from "../../assets/Image6/logo.png";
import about1 from "../../assets/Image6/about1.jpg"
import service1 from "../../assets/Image6/service1.jpg";
import service2 from "../../assets/Image6/service2.jpg";
import service3 from "../../assets/Image6/service3.jpg";
import service4 from "../../assets/Image6/service4.jpg";
import service5 from "../../assets/Image6/service5.jpg";
import service6 from "../../assets/Image6/service6.jpg";



const Service6 = () => {

    const services = [
        {
            category: "Service A",
            image: service1,
            items: [
                { name: "Service A - 01", description: "Description", price: "$45+" },
                { name: "Service A - 02", description: "Description", price: "$35+" },
                { name: "Service A - 03", description: "Description", price: "$25+" },
                { name: "Service A - 04", description: "Description", price: "$20+" },
                { name: "Service A - 05", description: "Description", price: "$50+" },
            ],
        },
        {
            category: "Service B",
            image: service2,
            items: [
                { name: "Service B - 01", description: "Description", price: "$45" },
                { name: "Service B - 02", description: "Description", price: "$35" },
                { name: "Service B - 03", description: "Description", price: "$25" },
                { name: "Service B - 04", description: "Description", price: "$20" },
                { name: "Service B - 05", description: "Description", price: "$40" },
            ],
        },
        {
            category: "Service C",
            image: service3,
            items: [
                { name: "Service C - 01", description: "Description", price: "$60" },
                { name: "Service C - 02", description: "Description", price: "$40" },
                { name: "Service C - 03", description: "Description", price: "$35" },
                { name: "Service C - 04", description: "Description", price: "$30" },
            ],
        },
        {
            category: "Service D",
            image: service4,
            items: [
                { name: "Service D - 01", description: "Description", price: "$25" },
                { name: "Service D - 02", description: "Description", price: "$30" },
                { name: "Service D - 03", description: "Description", price: "$20" },
            ],
        },
        {
            category: "Service E",
            image: service5,
            items: [
                { name: "Service E - 01", description: "Description", price: "$15" },
                { name: "Service E - 02", description: "Description", price: "$25" },
                { name: "Service E - 03", description: "Description", price: "$30" },
                { name: "Service E - 04", description: "Description", price: "$20" },
            ],
        },
        {
            category: "Service F",
            image: service6,
            items: [
                { name: "Service F - 01", description: "Description", price: "$50" },
                { name: "Service F - 02", description: "Description", price: "$45" },
                { name: "Service F - 03", description: "Description", price: "$35" },
            ],
        },
    ];

    return (
        <div>
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
            <div className="px-4 sm:px-8 py-16 sm:py-24 bg-white text-black flex flex-col gap-16 sm:gap-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold font-serif text-sky-600/80 tracking-wide mb-4 uppercase">
                    OUR SERVICES
                </h2>

                <div className="px-0 sm:px-8 md:px-32 flex flex-col space-y-12 sm:space-y-16">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-20">
                            <img
                                src={service.image}
                                alt={service.category}
                                className="w-full sm:w-[200px] h-[200px] object-cover rounded-xl shadow-md"
                            />
                            <div className="flex-1 w-full">
                                <h3 className="text-xl sm:text-2xl text-blue-900 font-semibold my-4">{service.category}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 md:gap-x-32 gap-y-4">
                                    {service.items.map((item, i) => (
                                        <div key={i} className="flex justify-between border-b border-dotted pb-2">
                                            <div className="pr-4">
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                            <p className="text-right font-semibold text-gray-700 whitespace-nowrap">{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Service6;