import specialties1 from "../../assets/Image5/specialties1.jpg";
import specialties2 from "../../assets/Image5/specialties2.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Specialtie5 = () => {
    return (
        <div className="bg-[#F8FCF7] min-h-screen py-16 px-4 md:px-20 text-black">
            <h2 className="text-center text-gray-600 mb-2">Specialties</h2>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">Nails Salon</h1>

            <div className="flex flex-col gap-24 items-center">
                <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
                    <div className="flex-1">
                        <h3 className="text-4xl md:text-6xl font-black">
                            01.
                            <span className="inline-block w-72 md:w-52 border-t border-black ml-2 align-middle"></span>
                        </h3>
                        <div className="text-lg md:text-2xl md:ml-24 mt-4 flex flex-col items-center md:items-start">
                            <p className="font-medium text-gray-600/80">Top Hottest</p>

                            <img
                                src={specialties1}
                                alt="Manicure"
                                className="sm:block md:hidden my-6 md:mt-0 w-full max-w-[400px] h-[400px] object-cover rounded shadow-lg"
                            />
                            <p className="font-extrabold md:mb-4 text-gray-800/80 ">Service A - 01</p>
                            <p className="font-semibold md:mt-8 mb-4">$45+</p>
                            <button className="md:mt-10 px-6 py-2 bg-green-700/60 text-sm text-white rounded-full font-extrabold cursor-pointer hover:bg-green-700 transition flex items-center gap-2">
                                BOOK NOW
                                <ArrowForwardIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                    <img
                        src={specialties1}
                        alt="Manicure"
                        className="hidden md:block w-full max-w-[400px] h-[400px] object-cover rounded shadow-lg"
                    />
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 w-full max-w-5xl">
                    <div className="flex-1 md:ml-44">
                        <h3 className="text-4xl md:text-6xl font-black">
                            02.
                            <span className="inline-block w-72 md:w-52 border-t border-black ml-2 align-middle"></span>
                        </h3>
                        <div className="text-lg md:text-2xl md:ml-24 mt-4 flex flex-col items-center md:items-start">
                            <p className="font-medium text-gray-600/80">Top Book Now</p>
                            <img
                                src={specialties2}
                                alt="Pedicure"
                                className="sm:block md:hidden my-6 md:mt-0 w-full max-w-[400px] h-[400px] object-cover rounded shadow-lg"
                            />
                            <p className="font-extrabold md:mb-4 text-gray-800/80">Service A - 02</p>
                            <p className="font-semibold md:mt-8 mb-4">$35+</p>
                            <button className="md:mt-10 px-6 py-2 bg-green-700/60 text-sm text-white rounded-full font-extrabold cursor-pointer hover:bg-green-700 transition flex items-center gap-2">
                                BOOK NOW
                                <ArrowForwardIcon fontSize="small" />
                            </button>
                        </div>
                    </div>
                    <img
                        src={specialties2}
                        alt="Pedicure"
                        className="hidden md:block w-full max-w-[400px] h-[400px] object-cover rounded shadow-lg"
                    />
                </div>
            </div>
        </div>

    );
}

export default Specialtie5;
