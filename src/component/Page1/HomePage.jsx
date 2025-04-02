import homePage1 from "../../assets/Image/homePage1.jpg";
import homePage2 from "../../assets/Image/homePage2.jpg";
import homePage3 from "../../assets/Image/homePage3.jpg";
import homePage4 from "../../assets/Image/homePage4.jpg";
import homePage5 from "../../assets/Image/homePage5.jpg";
import AboutUs from "./AboutUs";
import Specialties from "./Specialties";
import Services from "./Services";
import Gallery from "./Gallery";
import { useRef } from "react";

const HomePage = (props) => {
    const sections = [
        { title: "ABOUT US", subtitle: "Top nails salon in Texas", image: homePage2, ref: "aboutRef" },
        { title: "SPECIAL", subtitle: "Best Nail Design For You", image: homePage3, ref: "specialtiesRef" }, ,
        { title: "SERVICES", subtitle: "We Have Many Services", image: homePage4, ref: "servicesRef" },
        { title: "GALLERY", subtitle: "Top Best Ever Finished", image: homePage5, ref: "galleryRef" },
    ];

    return (
        <div className="bg-white w-full h-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                <div className="relative min-h-[75vh] flex flex-col justify-center items-center sm:items-start text-center sm:text-left p-10 md:p-20">
                    <img
                        src={homePage1}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover brightness-75"
                        loading="lazy"
                    />
                    <div className="relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-200 drop-shadow-lg">
                            NAIL SALON
                        </h1>
                        <button className="mt-6 w-full sm:w-auto bg-black text-white px-8 py-3 text-lg font-semibold shadow-lg rounded-lg hover:bg-gray-800 transition-all hover:scale-105">
                            BOOK NOW
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {sections.map((section, index) => (
                        <div key={index} className="relative h-64 sm:h-72 md:h-[50vh] group overflow-hidden">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="absolute inset-0 w-full h-full object-cover brightness-75 transition duration-300 group-hover:brightness-50"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end text-white p-6 sm:p-8 z-10 transition duration-300 group-hover:opacity-0">
                                <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold drop-shadow-lg">{section.title}</h2>
                                <p className="text-xs sm:text-sm md:text-lg italic">{section.subtitle}</p>
                            </div>
                            <div className="absolute inset-0 bg-[#D4AF37] bg-opacity-100 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold">{section.title}</h2>
                                <p className="text-xs sm:text-sm md:text-lg italic mb-4">{section.subtitle}</p>
                                <button
                                    className="bg-white text-black px-6 py-2 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all cursor-pointer"
                                    onClick={() => props.scrollToSection(section.ref)}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div ref={props.sectionsRef.aboutRef}>
                <AboutUs />
            </div>
            <hr className="border-gray-800" />
            <div ref={props.sectionsRef.specialtiesRef}>
                <Specialties />
            </div>
            <hr className="border-gray-800" />
            <div ref={props.sectionsRef.servicesRef}>
                <Services />
            </div>
            <hr className="border-gray-800" />
            <div ref={props.sectionsRef.galleryRef} >
                <Gallery />
            </div>
            <hr className="border-gray-800" />
        </div>

    );
}
export default HomePage;