import React, { useEffect, useState } from 'react';
import homePage1 from "../../assets/Image5/homePage1.png";
import homePage2 from "../../assets/Image5/homePage2.png";
import AboutUs5 from './AboutUs5';
import Specialtie5 from './Specialties5';
import Services5 from './Services5';
import Gallery5 from './Gallery5';
import Review5 from './Review5';

const HomePage5 = () => {
    const [current, setCurrent] = useState(0);

    const images = [homePage1, homePage2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="w-full min-h-screen bg-gradient-to-b from-[#dbe9d2] to-[#c8e1c2] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-50 py-10 md:py-0 gap-y-10">
                <div className="w-full md:w-1/2 space-y-3 font-mono text-black text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-medium">We Are</h2>
                    <h1 className="text-3xl md:text-6xl font-bold text-gray-600">Nails Salon</h1>
                    <p className="text-xl font-semibold my-6 md:my-8">
                        TOP NAIL SALON IN HOUSTON,<br />
                        TEXAS <span>78260</span>
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-md cursor-pointer hover:bg-gray-600 transition">
                            BOOK NOW
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-10">
                    <img
                        src={images[current]}
                        alt="Nail Salon"
                        className="w-full max-w-[300px] md:max-w-[500px] transition-opacity duration-700"
                    />
                </div>
            </div>
            <AboutUs5 />
            <Specialtie5 />
            <Services5 />
            <Gallery5 />
            <Review5 />
        </div>

    );
};

export default HomePage5;
