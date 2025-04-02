import { Facebook, Instagram, Google, LocationOn, Email, Phone } from "@mui/icons-material";
import logo from "../../assets/Image2/logo.png"

const Footer2 = () => {
    return (
        <div className="bg-black text-white py-10 text-center">
            <div className="container mx-auto px-6 sm:px-8 md:px-12">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Spring Logo" className="w-16 sm:w-20 mb-4" />
                    <p className="text-sm sm:text-lg font-semibold flex items-center">
                        <LocationOn className="mr-2 text-yellow-500" /> 9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                    </p>
                    <p className="text-yellow-500 brightness-90 font-bold mt-2 flex items-center">
                        <Phone className="mr-2" /> (000) 000-9999
                    </p>
                    <p className="text-yellow-500 brightness-90 font-bold flex items-center">
                        <Phone className="mr-2" /> (000) 000-9998
                    </p>
                    <a href="mailto:email@gmail.com" className="text-yellow-500 brightness-90 mt-2 flex items-center hover:text-white transition">
                        <Email className="mr-2" /> email@gmail.com
                    </a>
                    <div className="flex space-x-6 mt-6">
                        <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl transition">
                            <Facebook />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl transition">
                            <Instagram />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-red-500 text-2xl transition">
                            <Google />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-sm flex flex-col sm:flex-row justify-center sm:justify-between items-center">
                    <p className="text-gray-400">&copy; 2024 Nail Salon.</p>
                    <p className="text-gray-400">
                        Copyright Designed by <span className="text-white font-semibold">LLDTEK</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer2;