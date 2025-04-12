import about1 from "../../assets/Image7/about1.jpg";

const AboutUs7 = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-12 sm:px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center mt-20 md:mt-10 gap-8 md:gap-16 bg-transparent">
                <div className="rounded-[20px] overflow-hidden shadow-xl max-w-full">
                    <img
                        src={about1}
                        alt="Nail Salon"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] rounded-[20px] p-6 sm:p-8 max-w-md text-white shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-yellow-400 mb-2">Nail Salon</h2>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                            Top nail in <span className="text-yellow-400">Houston, Texas</span>
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived.
                        </p>
                    </div>

                    <button className="w-full sm:w-1/2 md:w-1/3 text-sm bg-gradient-to-r from-yellow-500/70 to-yellow-600/70 text-white font-semibold py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50">
                        APPOINTMENT
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AboutUs7;