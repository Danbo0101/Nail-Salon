import React from "react";
import about1 from "../../assets/Image8/about1.jpg";
import about2 from "../../assets/Image8/about2.jpg";

const AboutUs8 = () => {
    return (
        <div className="bg-transparent py-20 px-4 text-gray-800">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
                <div className="relative">
                    <img
                        src={about1}
                        alt="Hand massage"
                        className="relative left-0 md:left-1/4  mx-auto rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-none"
                    />
                    <h2
                        className="absolute top-2/3 left-36 md:top-[70%] md:left-12 transform -translate-x-1/2 md:translate-x-0 px-4 md:px-6 py-2 bg-gradient-to-r from-white/70 to-white/0 text-3xl md:text-6xl font-serif font-semibold text-[#A9843A] shadow-md w-4/5 md:w-full text-left"
                    >
                        About Us
                    </h2>
                </div>
                <div className="hidden md:flex justify-center md:justify-end">
                    <div className="relative top-10 md:top-40 md:-left-20 border border-black p-2 md:p-4 bg-transparent shadow-lg w-fit">
                        <img
                            src={about2}
                            alt="Nail Design"
                            className="w-64 sm:w-72 md:w-80 h-auto rounded-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-xl mt-14 text-center md:text-left mx-auto md:ml-64 px-4 md:px-0">
                <h3 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8">
                    Feel good about being{" "}
                    <span className="text-[#A9843A]">Beautiful</span>
                </h3>
                <p className="italic text-gray-700 font-medium border-l-4 py-2 border-[#A9843A] pl-4 mb-6 sm:mb-8">
                    At <span className="font-semibold text-[#A9843A]">ZOTA Nail & Spa</span>{" "}
                    you can find a highly motivated and trained team of therapists to provide
                    you with a welcoming atmosphere of relaxation and a first class service not
                    only the first time, but every time.
                </p>
                <p className="mb-4 sm:mb-6">
                    We aim to combine excellent treatments carried out in a relaxing
                    environment by the best therapists using the best products. We also offer a
                    variety of spa treatments alongside beauty maintenance and nail services.
                </p>
                <p>
                    <span className="text-[#A9843A] font-semibold">ZOTA Nail & Spa</span>’s goal
                    is to serve our customers with services that go beyond expectations and
                    offer the best results that truly deliver. All in a relaxing, comfortable,
                    honest and loving environment.
                </p>
            </div>
            <div className="flex justify-center mt-10 md:hidden">
                <div className="border border-black p-4 bg-transparent shadow-lg w-fit">
                    <img
                        src={about2}
                        alt="Nail Design"
                        className="w-64 sm:w-72 md:w-80 h-auto rounded-sm"
                    />
                </div>
            </div>
        </div>

    );
};

export default AboutUs8;
