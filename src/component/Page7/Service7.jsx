import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import service1 from "../../assets/Image7/service1.jpg";
import service2 from "../../assets/Image7/service2.jpg";
import service3 from "../../assets/Image7/service3.jpg";
import service4 from "../../assets/Image7/service4.jpg";
import service5 from "../../assets/Image7/service5.jpg";
import service6 from "../../assets/Image7/service6.jpg";

const Service7 = () => {

    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedService(null);
    };

    const services = [
        {
            title: "Service A",
            image: service1,
            items: [
                { name: "Service A - 01", price: 40 },
                { name: "Service A - 02", price: 30 },
                { name: "Service A - 03", price: 35 },
            ],
        },
        {
            title: "Service B",
            image: service2,
            items: [
                { name: "Service B - 01", price: 45 },
                { name: "Service B - 02", price: 35 },
                { name: "Service B - 03", price: 25 },
                { name: "Service B - 04", price: 20 },
                { name: "Service B - 05", price: 30 },
            ],
        },
        {
            title: "Service C",
            image: service3,
            items: [
                { name: "Service C - 01", price: 50 },
                { name: "Service C - 02", price: 38 },
                { name: "Service C - 03", price: 40 },
            ],
        },
        {
            title: "Service D",
            image: service4,
            items: [
                { name: "Service D - 01", price: 55 },
                { name: "Service D - 02", price: 45 },
                { name: "Service D - 03", price: 50 },
            ],
        },
        {
            title: "Service E",
            image: service5,
            items: [
                { name: "Service E - 01", price: 25 },
                { name: "Service E - 02", price: 30 },
                { name: "Service E - 03", price: 20 },
                { name: "Service E - 04", price: 35 },
            ],
        },
        {
            title: "Service F",
            image: service6,
            items: [
                { name: "Service F - 01", price: 60 },
                { name: "Service F - 02", price: 55 },
                { name: "Service F - 03", price: 65 },
                { name: "Service F - 04", price: 50 },
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center px-10 py-28 gap-12 text-white">
            <div className="text-center">
                <div className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400">Services</div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mt-2">Service Menu</h1>
            </div>

            <div className="sm:max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => handleOpen(service)}
                        className="relative bg-white/10 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 group hover:scale-105 cursor-pointer"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 w-full bg-black/10 backdrop-blur-sm text-white py-3 text-center transition-all duration-300 group-hover:-translate-y-1">
                            <span className="text-lg font-semibold">{service.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                TransitionComponent={Fade}
                transitionDuration={400}
            >
                <DialogTitle className="flex justify-between items-start px-6 pt-6">
                    <div>
                        <div className="text-xl font-bold text-yellow-600 uppercase">{selectedService?.title}</div>
                        <div className="text-sm uppercase text-yellow-500 tracking-wide">{selectedService?.title}</div>
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent className="px-6 pb-6">
                    <div className="divide-y">
                        {selectedService?.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between py-3">
                                <span className="text-gray-800">{item.name}</span>
                                <span className="font-bold text-gray-900">${item.price}</span>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>


    )

}

export default Service7;