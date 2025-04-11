import { Facebook, Instagram, Google } from '@mui/icons-material';
import logo from "../../assets/Image6/logo.png";
import about1 from "../../assets/Image6/about1.jpg"

const Contact6 = () => {
    return (
        <>
            <div className="text-white relative">
                <div className="bg-gradient-to-r from-[#4ba3f2]  to-[#0d47a1] px-4 sm:px-10 md:px-32 py-6 flex-col md:flex-row md:items-center justify-between gap-6 text-sm font-serif hidden md:flex">
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <img src={logo} alt="Logo" className="w-auto max-h-14" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center text-center">
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Contact Us</p>
                            <p className="font-mono text-sm md:text-lg">(000) 000-9999</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Email Us</p>
                            <p className="font-mono text-sm md:text-lg">demo03@gmail.com</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="font-semibold text-gray-300 text-base md:text-xl">Follow Us</p>
                            <div className="flex gap-2 mt-1">
                                <Facebook fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                                <Instagram fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                                <Google fontSize="small" className="text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src={about1} className="w-full h-60 sm:h-72 md:h-80 object-cover" alt="About Us Banner" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            </div>
            <div className="bg-gray-100 py-12 px-4 text-center">
                <div className="flex justify-center">
                    <div className="w-full max-w-[1000px] aspect-video rounded-lg overflow-hidden shadow-lg border">
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13820.927870831052!2d-95.56038914021403!3d29.703355443690273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b36b101bcb%3A0xc6c03aa7e8fc841!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2s!4v1712637726972!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Contact6;