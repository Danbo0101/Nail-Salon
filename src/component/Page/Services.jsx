import React from "react";
import { Card, CardContent } from "@mui/material";
import services1 from "../../assets/Image/services1.jpg";
import services2 from "../../assets/Image/services2.jpg";
import services3 from "../../assets/Image/services3.jpg";
import services4 from "../../assets/Image/services4.jpg";
import services5 from "../../assets/Image/services5.jpg";

const Services = () => {

    const services = [
        {
            title: "Service A",
            image: services1,
            items: [
                { name: "Service A-01", price: "$25+", description: "Description" },
                { name: "Service A-02", price: "$15+", description: "Description" },
                { name: "Service A-03", price: "$45+", description: "Description" },
                { name: "Service A-04", price: "$45+", description: "Description" },
            ],
        },
        {
            title: "Service B",
            image: services2,
            items: [
                { name: "Service B-01", price: "$25+", description: "Description" },
                { name: "Service B-02", price: "$15+", description: "Description" },
                { name: "Service B-03", price: "$45+", description: "Description" },
                { name: "Service B-04", price: "$45+", description: "Description" },
            ],
        },
        {
            title: "Service C",
            image: services3,
            items: [
                { name: "Service C-01", price: "$30+", description: "Description" },
                { name: "Service C-02", price: "$20+", description: "Description" },
                { name: "Service C-03", price: "$50+", description: "Description" },
                { name: "Service C-04", price: "$50+", description: "Description" },
            ],
        },
        {
            title: "Service D",
            image: services4,
            items: [
                { name: "Service D-01", price: "$35+", description: "Description" },
                { name: "Service D-02", price: "$25+", description: "Description" },
                { name: "Service D-03", price: "$55+", description: "Description" },
                { name: "Service D-04", price: "$55+", description: "Description" },
            ],
        },
        {
            title: "Service E",
            image: services5,
            items: [
                { name: "Service E-01", price: "$40+", description: "Description" },
                { name: "Service E-02", price: "$30+", description: "Description" },
                { name: "Service E-03", price: "$60+", description: "Description" },
                { name: "Service E-04", price: "$60+", description: "Description" },
            ],
        },
    ];

    return (
        <div className="bg-black text-white py-20">
            <h2 className="text-2xl md:text-4xl font-semibold text-yellow-500 brightness-75 ml-44 ">SERVICES</h2>
            <p className="italic text-gray-400 font-medium ml-44 mb-10">We Have Many Services</p>
            <div className="space-y-8 mt-6 pr-32">
                {services.map((service, index) => (
                    <Card
                        key={index}

                        sx={{
                            backgroundColor: "black",
                        }}
                    >
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4 items-center ">
                                <div className="w-full flex justify-end border-r px-10 border-gray-700">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-52 h-48 object-cover rounded-md items-center"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <h3 className="text-xl font-bold text-yellow-500 brightness-90 mb-2">{service.title}</h3>
                                    <div className="grid grid-cols-2 gap-10">
                                        {service.items.map((item, i) => (
                                            <div key={i} className="flex justify-between border-b border-gray-700 pb-2">
                                                <div>
                                                    <p className="text-lg font-semibold text-white">{item.name}</p>
                                                    <p className="italic text-gray-400">{item.description}</p>
                                                </div>
                                                <p className="text-lg font-semibold text-yellow-500">{item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default Services;