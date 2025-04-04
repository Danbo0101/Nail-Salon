import { Facebook, Instagram, Google } from "@mui/icons-material";
import logo from "../../assets/Image4/logo.png";

const Footer4 = () => {
    return (
        <div className="bg-[#6B3F1F] text-white py-4 px-3 flex flex-col items-center">
            <div className="flex gap-3 mb-3">
                {[Facebook, Instagram, Google].map((Icon, index) => (
                    <div
                        key={index}
                        className="bg-white p-1.5 sm:p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-110"
                    >
                        <Icon className="text-[#6B3F1F]" fontSize="small" />
                    </div>
                ))}
            </div>
            <img
                src={logo}
                alt="Nail Salon"
                className="py-4 "
            />
            <div className="text-xs sm:text-sm text-center">
                © Copyright Designed By LLDTEK
            </div>
        </div>

    );
}
export default Footer4;