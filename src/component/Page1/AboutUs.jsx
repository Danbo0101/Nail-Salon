import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import about1 from "../../assets/Image/about1.jpg";
import about2 from "../../assets/Image/about2.jpg";
import about3 from "../../assets/Image/about3.jpg";
import about4 from "../../assets/Image/about4.jpg";


const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-black px-4 md:px-20 h-auto min-h-screen gap-6 py-20 lg:py-10">
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-5xl font-semibold text-yellow-500 brightness-75">
                    ABOUT NAIL SALON
                </h2>
                <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed">
                    Our nail salon is dedicated to bringing top-of-the-line products mixed with expert techniques to the nail salon industry. Offering many services such as Manicure, Pedicure, and Artificial Nails allows us to be a one-stop destination for those looking for a complete rejuvenating experience.
                </p>
                <Button variant="outlined" sx={{ borderColor: "#FFD700", color: "#FFD700" }}
                    className="w-full md:w-auto !hidden md:!block">
                    BOOK NOW
                </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-0">
                {[about1, about2, about3, about4].map((image, index) => (
                    <Card key={index} className="bg-gray-800">
                        <CardContent>
                            <img src={image} alt={`Salon ${index + 1}`} className="rounded-lg w-full h-auto object-cover" />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Button variant="outlined" sx={{ borderColor: "#FFD700", color: "#FFD700" }}
                className="w-full md:w-auto  sm:!block md:!hidden">
                BOOK NOW
            </Button>
        </div>


    )

}

export default AboutUs;