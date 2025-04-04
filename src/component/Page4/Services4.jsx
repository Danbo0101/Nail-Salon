import service1 from "../../assets/Image4/service1.jpg";
import service2 from "../../assets/Image4/service2.jpg";
import service3 from "../../assets/Image4/service3.jpg";
import service4 from "../../assets/Image4/service4.jpg";
import service5 from "../../assets/Image4/service5.jpg";
import service6 from "../../assets/Image4/service6.jpg";

const Services4 = () => {

    const services = [
        {
            category: "Pedicure",
            image: service1,
            items: [
                { name: "Gel/ Shellac Colors", price: "$15" },
                { name: "Regular Pedicure Spa Add On Gel/ Shellac", price: "$45" },
                { name: "Supreme Pedicure Spa Add On Gel/ Shellac", price: "$50" },
                { name: "Hot Stone Pedicure Spa Add On Gel/ Shellac", price: "$50" },
                { name: "Deluxe Spa Pedicure Add On Gel/ Shellac", price: "$45" },
                { name: "Pearl Spa Add On Gel/ Shellac", price: "$45" },
                { name: "Chamomile Spa Add On Gel/ Shellac", price: "$50" },
                { name: "Green Tea Honey Add On Gel/ Shellac", price: "$50" },
                { name: "Regular Pedicure Spa", price: "$30" },
                { name: "Supreme Pedicure Spa", price: "$35" },
                { name: "Hot Stone Pedicure Spa", price: "$55" },
                { name: "Deluxe Spa Pedicure", price: "$40" },
                { name: "Pearl Spa", price: "$45" },
                { name: "Chamomile Spa", price: "$45" },
                { name: "Green Tea Honey", price: "$55" },
                { name: "Collagen Spa Pedicure", price: "$55" },
            ],
        },
        {
            category: "Gel/ Shellac Acrylic Nails",
            image: service2,
            items: [
                { name: "Basic Full Set Or Overlay", price: "$55" },
                { name: "Full Set White Tip", price: "$55" },
                { name: "Full Set Color Tip", price: "$55" },
                { name: "Full Set Shellac Or Gel", price: "$55" },
                { name: "Basic Refill Or Overlay", price: "$55" },
                { name: "Refill White Tip", price: "$55" },
                { name: "Refill Color Tip", price: "$55" },
                { name: "Refill Shellac Or Gel", price: "$55" },
            ],
        },
        {
            category: "Organic Dipping Powder",
            image: service3,
            items: [
                { name: "Color Dipping Nails", price: "$55" },
                { name: "Full Set French Tips", price: "$55" },
                { name: "Full Set Dipping Colors", price: "$15+" },
                { name: "Fullset Ombre Dipping", price: "$12+" },
                { name: "French Dipping Nails", price: "$55" },
                { name: "Refill French Tips", price: "$60+" },
                { name: "Refill Dipping Colors", price: "$10+" },
                { name: "Refill Ombre Dipping", price: "$15+" },
            ],
        },
        {
            category: "Solar Acrylic None Yellow",
            image: service4,
            items: [
                { name: "Full Set Pink & White", price: "$35+" },
                { name: "Full Set Ombre", price: "$26+" },
                { name: "Full Set Glitter Color", price: "$32+" },
                { name: "Refill Pink Only", price: "$15" },
                { name: "Refill Pink & White", price: "$25+" },
                { name: "Refill Ombre", price: "$37+" },
                { name: "Refill Glitter Color", price: "$35" },
            ],
        },
        {
            category: "Natural Nails Care",
            image: service5,
            items: [
                { name: "Basic Manicure", price: "$20" },
                { name: "Deluxe Manicure", price: "$25" },
                { name: "Collagen Manicure", price: "$30" },
                { name: "Basic Pedicure", price: "$30" },
                { name: "Supreme Pedicure", price: "$35" },
                { name: "Hot Stone Pedicure", price: "$40" },
                { name: "Deluxe Pedicure", price: "$45" },
                { name: "Pearl Pedicure", price: "$55" },
                { name: "Green Tea & Honey Pedi", price: "$60" },
                { name: "Collagen Pedicure", price: "$65" },
            ],
        },
        {
            category: "Gel/ Shellac Natural Nails",
            image: service6,
            items: [
                { name: "Colors Manicure", price: "$30" },
                { name: "Colors Change Nails", price: "$20" },
                { name: "Colors Change Toes", price: "$25" },
                { name: "French Manicure", price: "$35" },
                { name: "French Change Nails", price: "$25" },
                { name: "French Change Toes", price: "$30" },
                { name: "Colors Pedicure", price: "$45" },
                { name: "French Pedicure", price: "$50" },
            ],
        },
    ];

    return (
        <div className="bg-gradient-to-r from-[#f8ebe6] to-[#ffecde] min-h-screen text-center py-16 px-6 sm:px-10 md:px-20">
            <div className="flex flex-col items-center mb-12 space-y-4">
                <h3 className="text-xs sm:text-sm font-semibold text-[#6d4023] flex items-center gap-2">Nail Salon</h3>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6d4023]">This Week’s Special Service Offers</h2>
            </div>

            <div className="w-full mx-auto mt-6 space-y-12">
                {services.map((service, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                        <div className="flex h-full justify-center sm:justify-end items-end md:items-start">
                            <img src={service.image} alt={service.category} className="w-2/3 h-2/3 rounded-lg shadow-md mt-8" />
                        </div>
                        <div className="col-span-2 flex flex-col justify-start items-center sm:items-start">
                            <h3 className="text-lg sm:text-xl font-mono text-[#6d4023] max-w-80 border-b border-b-blue-200/50 pb-2 mb-4">{service.category}</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black w-full">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex justify-between w-full text-sm sm:text-base">
                                        <span className="font-medium">{item.name}</span>
                                        <span className="font-bold">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Services4;