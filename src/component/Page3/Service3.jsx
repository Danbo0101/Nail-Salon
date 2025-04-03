import service1 from "../../assets/Image3/service1.jpg";
import service2 from "../../assets/Image3/service2.jpg";
import service3 from "../../assets/Image3/service3.jpg";
import service4 from "../../assets/Image3/service4.jpg";
import service5 from "../../assets/Image3/service5.jpg";
import service6 from "../../assets/Image3/service6.jpg";
import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";

const Service3 = () => {

    const [openDialog, setOpenDialog] = useState(null);

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


    const handleOpen = (id) => {
        setOpenDialog(id);
    };

    const handleClose = () => {
        setOpenDialog(null);
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="w-screen h-[300px] bg-gradient-to-b from-[#27272a] via-[#777781] to-[#27272a] flex items-center justify-center">
                <h1 className="font-serif bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-500 text-transparent bg-clip-text text-6xl font-medium brightness-85">Services</h1>
            </div>
            <div className="pb-10 md:pt-10 md:pb-20" data-aos="fade-up">
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
        </div>
    )
}

export default Service3;