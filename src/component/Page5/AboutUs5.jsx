import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import about1 from "../../assets/Image5/about1.jpg";

const AboutUs5 = () => {
    return (
        <div className="bg-[#efeded] py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <img
                    src={about1}
                    alt="Hands with flowers"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="w-full md:w-1/2 text-gray-700">
                <p className="text-sm mb-1 font-serif">About Us</p>
                <h2 className="text-4xl font-bold font-serif mb-6">
                    Why <span className="text-black">Our Clients Choose Us</span>
                </h2>

                <p className="mb-4 leading-relaxed">
                    We always strive to provide the highest quality and customer experience with our services.
                    We constantly strive to improve our technology in order to offer you the best service.
                    We provide a range of nail care services, including pedicures, manicures, nail polish, dip powders, waxing, and more.
                </p>

                <p className="mb-4 leading-relaxed">
                    When you leave our nail salon, you will be more confident and beautiful.
                    To accomplish this, a clean working environment is vital.
                    Before using any nail tools, the equipment is disinfected.
                    We invest in the latest nail chair designs to provide a feeling of relaxation and comfort.
                    This is due to the fact that a highly experienced workforce performs miracles with their hands.
                    We can assist you in selecting the best and most suitable nail for yourself.
                </p>

                <p className="mb-4 leading-relaxed italic">* * *</p>
                <p className="mb-4 leading-relaxed">
                    Take a seat, unwind, and indulge in some well-deserved pampering! <br />
                    We are conveniently located at{" "}
                    <span className="font-semibold">
                        9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                    </span>
                </p>

                <button className="mt-10 px-6 py-3 bg-green-700/60 text-white rounded-full font-semibold cursor-pointer hover:bg-green-700 transition flex items-center gap-2">
                    BOOK NOW
                    <ArrowForwardIcon fontSize="small" />
                </button>
            </div>
        </div>
    );
}
export default AboutUs5;