import {
    LocationOn,
    Phone,
    Email,
    ArrowRightAlt,
} from "@mui/icons-material";

const Footer6 = () => {

    const navLinks = [
        { name: "Home", href: "/template-6" },
        { name: "About Us", href: "/template-6/about" },
        { name: "Services", href: "/template-6/services" },
        { name: "Gallery", href: "/template-6/gallery" },
        { name: "Contacts", href: "/template-6/contact" },
    ];


    return (
        <div className="bg-[#0b1c28] text-white">
            <div className="px-6 md:ml-24 md:px-20 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">About Us</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We make it our core commitment to provide a comforting yet
                        professional ambiance, while preserving the luxurious and modern
                        salon etiquette. Our salon is proud to have passionate and diverse
                        expert technicians always ready to service you.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">Contact Info</h2>
                    <ul className="space-y-4 sm:space-y-5 text-gray-300 font-medium">
                        <li className="flex items-start">
                            <div className="p-2 border border-gray-500 rounded-md mr-4">
                                <LocationOn />
                            </div>
                            <span>9999 Bellaire Blvd, Houston, TX 77036, USA</span>
                        </li>
                        <li className="flex items-center">
                            <div className="p-2 border border-gray-500 rounded-md mr-4">
                                <Phone />
                            </div>
                            <span>(000) 000-9999</span>
                        </li>
                        <li className="flex items-center">
                            <div className="p-2 border border-gray-500 rounded-md mr-4">
                                <Email />
                            </div>
                            <span>demo03@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold font-serif mb-4">Links</h2>
                    <ul className="space-y-3 text-gray-400">
                        {navLinks.map(({ name, href }) => (
                            <li key={name} className="flex items-center space-x-2">
                                <ArrowRightAlt className="text-sm" />
                                <a
                                    href={href}
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-[#060e13] text-center text-gray-400 text-sm py-5 px-4">
                <p>
                    Copyright Designed by ©{" "}
                    <span className="font-semibold text-white">LLDTEK</span>
                </p>
            </div>
        </div>

    );
}

export default Footer6;