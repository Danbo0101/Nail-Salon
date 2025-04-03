import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../assets/Image3/about1.jpg";

const AboutUs3 = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="w-screen h-[300px] bg-gradient-to-b from-[#27272a] via-[#777781] to-[#27272a] flex items-center justify-center">
                <h1 className="font-serif bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-500 text-transparent bg-clip-text text-6xl font-medium brightness-85">About Us</h1>
            </div>
            <div className="  text-white flex justify-center py-10 px-4 md:py-16 md:px-6" data-aos="fade-up">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center font-serif">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <div className="text-base sm:text-lg">Welcome to</div>
                        <div className="font-semibold text-amber-400/85 text-2xl sm:text-3xl">Nail Salon</div>
                        <div className="space-y-4 md:space-y-6 py-3 font-medium">
                            <div className=" text-sm sm:text-base leading-relaxed">
                                Discover a unique pampering and unforgettable experience at our spa. Here, we value your well-being and comfort above all else. Relax yourself in our modern, spacious surroundings and let our friendly staff pamper you from hands to toes.
                            </div>
                            <div className=" text-sm sm:text-base leading-relaxed">
                                We take an organic approach to your nails' health, which sets us apart from other salons. We believe healthy nails are linked to your overall vitality; therefore, we want to be a part of your nail maintenance to keep them in optimum condition. Hygiene is taken seriously with us. We thoroughly sterilize and disinfect our nail instruments.
                            </div>
                            <div className=" text-sm sm:text-base leading-relaxed">
                                All COVID safety measures have been strictly adhered to as your safety is our top priority. We offer a wide variety of natural pedicure and manicure treatments that cater to your preference which includes a range of proven techniques and top quality product brands to revive the skin of your hands and feet. Why not treat yourself to the spa services you truly deserve? Book an appointment today!
                            </div>
                        </div>
                        <img src={about1} className="rounded-2xl shadow-2xl py-5 sm:block md:hidden" />
                        <button className=" text-black px-6 py-3 w-full sm:w-1/2 md:w-1/4 text-sm rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-yellow-500 hover:bg-gradient-to-br focus:ring-yellow-500 dark:focus:ring-amber-200 brightness-90 shadow-md cursor-pointer">
                            BOOK NOW
                        </button>
                    </div>
                    <img src={about1} className="rounded-2xl shadow-2xl hidden md:block" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs3;