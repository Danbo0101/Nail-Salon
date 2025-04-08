import FooterBg from "../../assets/Image5/FooterBg.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "../../assets/Image5/logo.png";

const Footer5 = () => {
    return (
        <div>
            <div
                className="py-20 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
                style={{ backgroundImage: `url(${FooterBg})` }}
            >
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl tracking-widest uppercase mb-4">
                    Nail care for the modern woman
                </h1>
                <p className="text-white text-sm sm:text-base max-w-2xl mb-6">
                    We offer hundreds of colors from chic neutrals to bright pastels —
                    there’s something for everyone! Stop on by our salon today for the
                    perfect mani-pedi experience.
                </p>
                <button className="flex items-center gap-2 bg-[#9e8c9c] text-white font-semibold px-6 py-3 rounded-md shadow-lg cursor-pointer hover:bg-[#6d606d] transition">
                    BOOK NOW <ArrowForwardIcon />
                </button>
            </div>
            <div className="bg-[#181c18] text-white text-sm px-4 sm:px-10 md:px-40 pt-14 pb-5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-6 border-b border-dotted border-gray-600 pb-6">
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start text-center sm:text-left">
                            <img src={logo} alt="Logo" className="w-24 sm:w-auto" />
                            <div className="text-base font-medium text-gray-300 max-w-xl">
                                <p>
                                    Looking for nail designs that capture the beauty of this season?
                                    You're in the right place!
                                </p>
                                <p className="text-gray-400 mt-2">
                                    Nails Salon in 9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 px-2 sm:px-0">
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Open Hours</h2>
                            <p className="text-gray-400">Sun - Mon: 10:00 AM - 06:00 PM</p>
                            <p className="text-gray-400">Tue - Fri: 09:30 AM - 07:30 PM</p>
                            <p className="text-gray-400">Saturday: 09:00 AM - 06:00 PM</p>
                            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
                                {[<FacebookIcon />, <InstagramIcon />, <GoogleIcon />].map((icon, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-full text-white shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
                            <p className="text-gray-400">
                                <span className="font-medium">Address:</span> 9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                            </p>
                            <p className="text-gray-400 mt-2">
                                <span className="font-medium">Tel:</span> (000) 999 999
                            </p>
                            <p className="text-gray-400 mt-2">
                                <span className="font-medium">Email:</span> email@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-gray-400 mt-10 border-t border-dotted border-gray-700 pt-4">
                        Copyright Designed by <span className="text-orange-400 font-semibold">LLDTEK</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer5;
