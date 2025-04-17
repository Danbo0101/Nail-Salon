import { Facebook, Google, Instagram } from '@mui/icons-material';
import bgHeader from '../../assets/Image8/bgHeader.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Footer8 = () => {
    return (
        <div className="text-white px-4 sm:px-6 md:px-16 lg:px-32 py-8 sm:py-12"
            style={{
                backgroundImage: `url(${bgHeader})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-base sm:text-lg font-bold text-[#956D30] mb-3 sm:mb-4">ABOUT US</h2>
                    <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-gray-300">
                        After long hours of constant work and extensive meetings, have you ever wished to throw
                        yourself on something cushy to wash away all exhaustion? Let's{" "}
                        <span className="font-bold text-[#956D30]">ZOTA Salon</span> assuage your tiredness.
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                        Nail salon in Philadelphia, PA 19153 | nail salon in PA 19153
                    </p>
                </div>

                {/* Contact & Hours Section */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                    <div className='flex flex-col gap-3 sm:gap-4'>
                        <h2 className="text-base sm:text-lg font-bold text-[#956D30]">CONTACT US</h2>

                        <p className="text-sm sm:text-base font-light flex items-start gap-2">
                            <LocationOnIcon className="text-[#956D30] mt-0.5 sm:mt-1" />
                            <span>
                                3751 Island Avenue Ste 201-202C,<br />
                                Philadelphia, PA 19153
                            </span>
                        </p>

                        <p className="text-sm sm:text-base font-light flex items-center gap-2">
                            <PhoneIcon className="text-[#956D30]" />
                            (404) 806-4448
                        </p>

                        <p className="text-sm sm:text-base font-light flex items-center gap-2">
                            <EmailIcon className="text-[#956D30]" />
                            zotapossystem.com
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base sm:text-lg font-bold text-[#956D30] mb-3 sm:mb-4">BUSINESS HOURS</h2>

                        <p className="flex items-center gap-2">
                            <AccessTimeIcon fontSize='small' className="text-[#956D30]" />
                            <span>
                                <span className="text-sm sm:text-base font-medium">Mon – Sat:</span> 10 am – 9 pm
                            </span>
                        </p>

                        <p className="flex items-center gap-2 mt-1">
                            <AccessTimeIcon fontSize='small' className="text-[#956D30]" />
                            <span>
                                <span className="text-sm sm:text-base font-medium">Sun:</span> 10 am – 5 pm
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <iframe
                        title="Google Map"
                        className="w-full h-full rounded-lg border-none"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.3677457830884!2d-75.23688472360122!3d39.9087417865098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzMyLjQiTiA3NcKwMTQnMTIuMCJX!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                    ></iframe>
                </div>
            </div>
            <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#956D30] flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                    <span className="text-[#956D30] font-bold">SOCIAL MEDIA</span>
                    <div className="flex gap-2 sm:gap-4">
                        {[Facebook, Google, Instagram].map((Icon, i) => (
                            <div
                                key={i}
                                className="bg-[#956D30] text-black p-1.5 sm:p-2 rounded-full transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:rotate-12 cursor-pointer shadow-md hover:shadow-yellow-400"
                            >
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-center text-gray-400">
                    Copyright Designed by © <span className="font-bold text-[#956D30]">Zota</span>.
                </p>
            </div>
        </div>
    );
}

export default Footer8;