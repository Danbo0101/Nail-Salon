import { Facebook, Instagram, Google, Phone, Place, Email } from "@mui/icons-material";
import logo from "../../assets/Image3/logo.png"

const Footer3 = () => {
    return (
        <div className="bg-gradient-to-b from-black/70 to-black text-white pt-16 pb-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <img src={logo} alt="Logo" className="mb-6 w-16 sm:w-20" />
                    <div className="flex flex-col items-center md:items-start text-sm sm:text-base gap-2">
                        <p className="flex items-center"><Phone className="mr-2 text-amber-400/70" /> (000) 000-1222</p>
                        <p className="flex items-center"><Place className="mr-2 text-amber-400/70" /> 999 Avenida del Libertador</p>
                        <p className="flex items-center"><Email className="mr-2 text-amber-400/70" /> email@gmail.com</p>
                    </div>
                </div>

                <div className="py-5 font-medium flex flex-col items-center lg:items-start">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-amber-400/70">Hours</h3>
                    <hr className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent border-0 mb-6 sm:mb-8" />
                    <p>Mon - Fri: 09:30 AM - 07:30 PM</p>
                    <p>Saturday: 09:00 AM - 07:00 PM</p>
                    <p>Sunday: 10:00 AM - 06:00 PM</p>
                </div>

                <div className="py-5 font-medium flex flex-col items-center lg:items-start">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-amber-400/70">Links</h3>
                    <hr className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent border-0 mb-6 sm:mb-8" />
                    <ul className="space-y-1">
                        <li><a href="/template-3/about" className="hover:underline">About Us</a></li>
                        <li><a href="/template-3/gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="/template-3/services" className="hover:underline">Services</a></li>
                        <li><a href="/template-3/contact" className="hover:underline">Contacts</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center space-x-3 sm:space-x-4 mt-6">
                {[Facebook, Instagram, Google].map((Icon, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 cursor-pointer rounded-full border-2 border-amber-400/75 text-white transition duration-300 hover:bg-white hover:text-amber-400 shadow-lg"
                    >
                        <Icon sx={{ color: "#E6BE8A", fontSize: 24 }} />
                    </div>
                ))}
            </div>

            <div className="text-center text-xs sm:text-sm mt-6 border-t border-white/20 pt-4">
                Copyright Designed by &copy; <span className="text-[#d4a373]">LLDTEK</span>
            </div>
        </div>

    )
}

export default Footer3;