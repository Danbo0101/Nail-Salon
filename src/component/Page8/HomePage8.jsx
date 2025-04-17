import { motion, AnimatePresence } from 'framer-motion';
import homePage from "../../assets/Image8/homePage.jpg";
import homePage1 from "../../assets/Image8/homePage1.jpg";
import homePage2 from "../../assets/Image8/homePage2.jpg";
import homePage3 from "../../assets/Image8/homePage3.jpg";
import homePage4 from "../../assets/Image8/homePage4.png";
import homePage5 from "../../assets/Image8/homePage5.jpg";
import gallery1 from "../../assets/Image8/gallery1.jpg";
import gallery2 from "../../assets/Image8/gallery2.jpg";
import gallery3 from "../../assets/Image8/gallery3.jpg";
import gallery4 from "../../assets/Image8/gallery4.jpg";
import gallery5 from "../../assets/Image8/gallery5.jpg";
import gallery6 from "../../assets/Image8/gallery6.jpg";
import service1 from "../../assets/Image8/service1.jpg";
import service2 from "../../assets/Image8/service2.jpg";
import service3 from "../../assets/Image8/service3.jpg";
import bgHeader from "../../assets/Image8/bgHeader.jpg";
import AboutUs8 from "./AboutUs8";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import GradientText from '../General/GradientText';





const floatTransition = (offsetY = 10, duration = 4) => ({
    animate: {
        y: [0, -offsetY, 0],
        transition: {
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    },
});

const HomePage8 = () => {

    const services = [
        {
            title: "Manicure Services",
            image: service2,
            link: "#",
        },
        {
            title: "Pedicure Services",
            image: service1,
            link: "#",
        },
        {
            title: "Waxing Services",
            image: service3,
            link: "#",
        },
    ];

    const reviews = [
        {
            name: 'Emely Smith',
            content:
                'When I entered, I was pleasantly greeted and offered a beverage. Everyone that works here are pleasant people & took great care and did a wonderful job on my Pedis. It’s a refreshing ambiance & clean. Can’t wait to come back soon and I was very happy!',
            stars: 3,
        },
        {
            name: 'Pamela Adams',
            content:
                'Recommended by a friend and now I’m their loyal customer. My favorite cup of tea is ombré and they blend the color cleverly. Love the way staff here interacting with customers. I’ll try a pink and white set next time!',
            stars: 4,
        },
        {
            name: 'Rachel Nicole',
            content:
                'Went here today with my friend, we had a great experience! The entire staff was so kind, they even gave us complimentary fruit while we got our nails done. Highly recommend, check them out!!',
            stars: 5,
        },
    ];


    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ];

    const isMobile = window.innerWidth <= 768;
    const VISIBLE_IMAGES = isMobile ? 2 : 5;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const getVisibleImages = () => {
        let visible = [];
        for (let i = 0; i < VISIBLE_IMAGES; i++) {
            const index = (currentIndex + i) % images.length;
            visible.push(images[index]);
        }
        return visible;
    };

    const visibleImages = getVisibleImages();

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex(prev => {
            // Tính toán index mới với infinite loop
            if (newDirection > 0) {
                return (prev + 1) % images.length;
            } else {
                return (prev - 1 + images.length) % images.length;
            }
        });
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
            transition: { duration: 0.6 },
        }),
    };


    return (
        <>
            <div
                className="text-white min-h-screen flex items-center px-10 sm:px-6 py-12 sm:py-16 overflow-hidden mt-36 sm:mt-28"
                style={{
                    backgroundImage: `url(${homePage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-12 md:px-24">
                    <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-32">
                        <p className="uppercase tracking-widest font-extralight text-sm sm:text-base text-white/80">
                            Nail Salon & Beauty Care
                        </p>
                        <h1 className="text-4xl sm:text-6xl font-serif font-semibold leading-snug sm:leading-tight text-[#f9e5c4]">
                            We{" "}
                            <span className="relative inline-block">
                                <span className="text-[#c49543] relative z-10">beauty</span>
                                <motion.svg
                                    viewBox="0 0 100 10"
                                    className="absolute left-0 bottom-0 w-full h-[3px] sm:h-[4px] z-0"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M0,5 C15,-5 50,15 100,5"
                                        stroke="#c49543"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{
                                            duration: 1.4,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.svg>
                            </span>
                            <br />
                            your nails.
                        </h1>
                        <p className="text-base sm:text-base text-gray-300 md:font-extralight">
                            We aim to combine excellent treatments carried out in a relaxing
                            environment by the best therapists using the best products.
                        </p>
                        <div className="flex flex-row space-x-4  pt-4 text-sm sm:text-base font-semibold ">
                            <button className="bg-gradient-to-r from-[#cfa041] to-[#e1bb63] cursor-pointer text-white px-6 py-3 rounded shadow-md hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                                Services ➞
                            </button>

                            <button className="border cursor-pointer border-[#cfa041] text-white px-6 py-3 rounded transition-all duration-300 ease-in-out hover:bg-[#cfa041] hover:text-black hover:scale-105 hover:shadow-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <motion.img
                            src={homePage4}
                            alt="rose"
                            className="absolute top-10 left-1/3 sm:left-56 transform -translate-x-1/2 w-40 sm:w-80 h-40 sm:h-80 object-contain"
                            {...floatTransition(20, 4)}
                        />
                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
                            <motion.img
                                src={homePage3}
                                alt="model-1"
                                className="relative -top-0 left-1/2 sm:left-0 rounded-lg h-48 sm:h-[340px] sm:ml-72 object-cover col-span-2"
                                {...floatTransition(15, 8)}
                            />
                            <motion.img
                                src={homePage2}
                                alt="model-2"
                                className="relative -top-10 sm:-top-20 sm:left-2 rounded-lg h-40 sm:h-72 object-cover"
                                {...floatTransition(12, 6)}
                            />
                            <motion.img
                                src={homePage1}
                                alt="model-3"
                                className="relative -top-2 sm:-top-4 sm:left-10 rounded-lg h-36 sm:h-60 object-cover"
                                {...floatTransition(10, 7)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs8 />
            <div
                className="px-4 text-white"
                style={{
                    backgroundImage: `url(${bgHeader})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex flex-col lg:flex-row px-4 py-16 md:py-0 lg:px-20 gap-10 h-full">
                    <div className="flex flex-col items-center justify-between w-full lg:w-1/3  lg:mt-20 px-2 md:px-0">
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#b68b4c] border-b pb-4 lg:pb-6 pr-0 lg:pr-12 md:text-center w-full">
                            Our Services
                        </h2>
                        <div className="flex justify-end w-full py-4 lg:py-6 lg:mr-10 mb-8 md:mb-0">
                            <a
                                href="#"
                                className="text-sm font-medium text-[#b68b4c] hover:underline"
                            >
                                MORE SERVICES →
                            </a>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative overflow-hidden rounded-xl md:rounded-t-xl md:rounded-b-none group shadow-xl">
                                <img
                                    src={services[0].image}
                                    alt={services[0].title}
                                    className="w-full max-w-[350px] object-cover transition duration-500 group-hover:grayscale"
                                />
                                <div className="absolute w-full space-y-1 font-medium text-black text-sm bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-transparent via-white/50 to-transparent backdrop-blur-sm text-center rounded">
                                    <h3 className="text-lg font-serif font-semibold text-[#61430e]">
                                        {services[0].title}
                                    </h3>
                                    View Menu <ArrowRightAltIcon fontSize="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full lg:w-1/3">
                        <div className="relative overflow-hidden rounded-xl md:rounded-b-xl md:rounded-t-none group shadow-xl">
                            <img
                                src={services[1].image}
                                alt={services[1].title}
                                className="w-full max-w-[350px] object-cover transition duration-500 group-hover:grayscale"
                            />
                            <div className="absolute w-full space-y-1 font-medium text-black text-sm bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-transparent via-white/50 to-transparent backdrop-blur-sm text-center rounded">
                                <h3 className="text-lg font-serif font-semibold text-[#61430e]">
                                    {services[1].title}
                                </h3>
                                View Menu <ArrowRightAltIcon fontSize="small" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end w-full lg:w-1/3">
                        <div className="relative overflow-hidden rounded-xl md:rounded-t-xl md:rounded-b-none group shadow-xl">
                            <img
                                src={services[2].image}
                                alt={services[2].title}
                                className="w-full max-w-[350px] object-cover transition duration-500 group-hover:grayscale"
                            />
                            <div className="absolute w-full space-y-1 font-medium text-black text-sm bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-transparent via-white/50 to-transparent backdrop-blur-sm text-center rounded">
                                <h3 className="text-lg font-serif font-semibold text-[#61430e]">
                                    {services[2].title}
                                </h3>
                                View Menu <ArrowRightAltIcon fontSize="small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 md:py-20 px-4 sm:px-6 md:px-32 font-serif bg-transparent text-neutral-800">
                <h2 className="text-end text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7a5b2d] mb-4">
                    Clients Reviews
                </h2>
                <hr className="border-[#b8935d] w-full mx-auto mb-8 md:mb-16" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-32 px-4 sm:px-6 md:px-10">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="space-y-4 md:space-y-6">
                            <FormatQuoteIcon fontSize="large" className="text-[#7a5b2d]" />
                            <p className="italic text-base sm:text-[17px] leading-relaxed">{review.content}</p>
                            <div className="text-[#7a5b2d] text-xl font-semibold tracking-wider">___</div>
                            <h3 className="text-lg sm:text-xl font-bold font-serif italic">{review.name}</h3>
                            <div className="flex space-x-1 text-[#d0a85c]">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className={`w-5 h-5 ${i < review.stars ? 'text-[#d0a85c]' : 'text-[#e7d7b3]'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-center"
                style={{
                    backgroundImage: `url(${homePage5})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto space-y-2 sm:space-y-3 font-sans px-4 sm:px-0">
                    <h3 className="uppercase tracking-widest text-white text-sm sm:text-base md:text-lg font-medium">
                        Zota Nails Salon
                    </h3>

                    <div className="w-8 sm:w-10 h-[1px] sm:h-[2px] bg-white mx-auto mb-4 sm:mb-6"></div>
                    <GradientText
                        colors={["#FEE65E", "#956D30", "#FEE65E", "#956D30"]}
                        animationSpeed={10}
                        showBorder={false}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif"
                    >
                        Walk-ins welcome!
                    </GradientText>

                    <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 font-extralight">
                        You deserve some time to yourself to relax and let us pamper you.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-extralight">Can't wait to meet you!</p>
                </div>
            </div>
            <div className="py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-transparent">
                <div className="w-full">
                    <div className="w-full flex flex-col justify-between mb-6 md:mb-8">
                        <h2 className="text-start text-3xl md:text-4xl lg:text-5xl font-medium text-[#7a5b2d] mb-2 md:mb-4 font-serif">
                            Our Gallery
                        </h2>
                        <div className="h-[1px] w-full bg-[#795f29] mt-1 md:mt-2" />
                    </div>
                    <div className="w-full flex justify-end mb-6 md:mb-10">
                        <button className="text-[#795f29] cursor-pointer uppercase tracking-wider text-xs sm:text-sm hover:underline flex items-center gap-1">
                            More Gallery <ArrowRightAltIcon fontSize="small" />
                        </button>
                    </div>
                    <div className="relative h-[150px] sm:h-[250px] md:h-[300px] overflow-hidden">
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-transparent cursor-pointer"
                            onClick={() => paginate(-1)}
                        >
                            <ArrowBackIosNew className="text-[#795f29] text-sm sm:text-base" />
                        </button>
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex gap-6 sm:gap-3 md:gap-4 absolute top-0 left-0 w-full px-10  md:px-11"
                            >
                                {visibleImages.map((img, i) => (
                                    <div
                                        key={`${currentIndex}-${i}`}
                                        className="flex-shrink-0 w-[150px] sm:w-[160px] md:w-[180px] lg:w-[205px] h-[160px] sm:h-[220px] md:h-[250px] lg:h-[280px] overflow-hidden rounded-lg shadow-md bg-white"
                                    >
                                        <img
                                            src={img}
                                            alt={`nail-${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-transparent cursor-pointer"
                            onClick={() => paginate(1)}
                        >
                            <ArrowForwardIos className="text-[#795f29] text-sm sm:text-base" />
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
};

export default HomePage8;