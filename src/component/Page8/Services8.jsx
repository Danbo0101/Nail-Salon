import React from "react";
import bgGallery from "../../assets/Image8/bgGallery.jpg";
import service1 from "../../assets/Image8/service1.jpg";
import service2 from "../../assets/Image8/service2.jpg";
import service3 from "../../assets/Image8/service3.jpg";
import service4 from "../../assets/Image8/service4.jpg";

const services = [
    {
        title: "Manicure",
        subtitle: "Beauty & Relaxation",
        image: service2,
        items: [
            {
                name: "Mother’s Day Mani Special",
                price: "$30",
                desc: "This beautiful treatment begins with a glass of wine, a bath filled with lavender bubbles and eucalyptus oils to uplift your spirit and rejuvenate."
            },
            {
                name: "Basic Manicure",
                price: "$25",
                desc: "Cleansing, shaping, cuticle care, gentle hand massage with lotion, and regular nail polish."
            },
            {
                name: "Blossom Manicure",
                price: "$35",
                desc: "This treatment is the ultimate relaxation, including cleansing, shaping, cuticle care followed by exfoliation with organic sugar scrub and paraffin wraps to increase skin moisture and finish with freshly painted nails."
            }
        ]
    },
    {
        title: "Pedicure",
        subtitle: "High-quality Products. Every bottle of nail polishes and lotion is carefully researched and selected from trusted brands before being put into service to ensure they are gentle on your skin and nails.",
        image: service1,
        items: [
            {
                name: "Mother’s Day Mani Special",
                price: "$30",
                desc: "This beautiful treatment begins with a glass of wine, a bath filled with lavender bubbles and eucalyptus oils to uplift your spirit and rejuvenate."
            },
            {
                name: "Basic Manicure",
                price: "$25",
                desc: "Cleansing, shaping, cuticle care, gentle hand massage with lotion, and regular nail polish."
            },
            {
                name: "Blossom Manicure",
                price: "$35",
                desc: "This treatment is the ultimate relaxation, including cleansing, shaping, cuticle care followed by exfoliation with organic sugar scrub and paraffin wraps to increase skin moisture and finish with freshly painted nails."
            }
        ]
    },
    {
        title: "Additional Services",
        // subtitle: "Add-ons & Extras",
        image: service4,
        items: [
            {
                name: "French Manicure",
                price: "$5+",
                desc: ""
            },
            {
                name: "Nail Repair",
                price: "$3+",
                desc: ""
            },
            {
                name: "Cut Down",
                price: "$3+",
                desc: ""
            },
            {
                name: "Nail Art (2 Fingers)",
                price: "$3+",
                desc: ""
            },
            {
                name: "Take Off Acrylic",
                price: "$12+",
                desc: ""
            },
            {
                name: "Polish Change Hands",
                price: "$8",
                desc: ""
            },
            {
                name: "Polish Change Feet",
                price: "$12",
                desc: ""
            },
            {
                name: "Add Shellac/Get Polish on Any Acrylic Service extra",
                price: "$15",
                desc: ""
            },
            {
                name: "Therapeutic Paraffin Treatment",
                price: "$15",
                desc: ""
            },
            {
                name: "Special Nail Shape (Coffin, Stiletto)",
                price: "$5",
                desc: ""
            }
        ]
    },
    {
        title: "Waxing Services",
        image: service4,
        items: [
            {
                name: "Eyebrows",
                price: "$12",
                desc: ""
            },
            {
                name: "Chin",
                price: "$10",
                desc: ""
            },
            {
                name: "Lip",
                price: "$10",
                desc: ""
            },
            {
                name: "Sideburns",
                price: "$25",
                desc: ""
            },
            {
                name: "Full Legs",
                price: "$50",
                desc: ""
            }
        ]
    }
];

const ServiceCard = ({ title, subtitle, image, items }) => (
    <div className="max-w-6xl mx-auto my-6 sm:my-8 md:my-12 flex flex-col lg:flex-row bg-white/40 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm sm:backdrop-blur-md">
        <div className="lg:max-w-md w-full lg:h-auto p-4 sm:p-6 md:p-8 lg:p-10">
            <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] object-cover rounded-lg sm:rounded-xl"
                loading="lazy"
            />
        </div>
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 w-full">
            <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-yellow-800/80 tracking-wide uppercase">
                    {title}
                </h2>
                <p className="text-black font-medium text-xs sm:text-sm">{subtitle}</p>
            </div>

            <div className="divide-y divide-gray-200/50">
                {items.map(({ name, price, desc }, i) => (
                    <div key={i} className="py-3 sm:py-4">
                        <div className="flex items-center text-sm sm:text-base font-semibold text-gray-800">
                            <span className="truncate">{name}</span>
                            <div className="flex-grow border-b border-dashed mx-2 opacity-15"></div>
                            <span className="whitespace-nowrap">{price}</span>
                        </div>
                        {desc && (
                            <p className="text-gray-600 text-start text-xs sm:text-sm mt-1">{desc}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Services8 = () => {
    return (
        <div className="text-center min-h-screen mt-24">
            <div
                className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgGallery})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-white text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif mb-2 sm:mb-3 drop-shadow-lg">
                        Our Services
                    </h1>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
                        <a href="/template-8" className="underline hover:text-yellow-500/80 transition-all duration-200">Home</a>
                        <span className="mx-1 sm:mx-2">»</span>
                        <span>Services</span>
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto space-y-6 sm:space-y-8">
                {services.map((s, i) => (
                    <ServiceCard key={i} {...s} />
                ))}
            </div>
        </div>
    );
};

export default Services8;
