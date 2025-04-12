import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Contact7 = () => {
    return (
        <div className="relative text-white px-6 md:px-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{ height: '160px' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0.00,49.98 C150.00,250.00 349.91,-150.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ fill: '#1e1e1e' }}></path>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto pt-36 pb-10">
                <div className="text-center mb-12">
                    <h5 className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400">Contacts</h5>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mt-2">Get In Touch</h2>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-lg mb-14">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11083.881626551208!2d-95.55528165984493!3d29.70539871914862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b762c5a6ff%3A0x9c9e22f5e1d0d82!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full h-[400px] border-0"
                    ></iframe>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
                    <div className="flex items-start gap-4">
                        <LocationOnIcon className="text-[#f3b35c] text-3xl" />
                        <div>
                            <div className="text-gray-400 text-base font-semibold mb-1">Address</div>
                            <div className="font-medium ">9999 Westheimer Road, Houston, TX, USA</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <PhoneIcon className="text-[#f3b35c] text-3xl" />
                        <div>
                            <p className="text-gray-400 text-base font-semibold mb-1">Call Us</p>
                            <p className="font-medium">(000) 000-1222</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <EmailIcon className="text-[#f3b35c] text-3xl" />
                        <div>
                            <p className="text-gray-400 text-base font-semibold mb-1">Email Us</p>
                            <p className="font-medium">email@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <AccessTimeIcon className="text-[#f3b35c] text-3xl" />
                        <div>
                            <p className="text-gray-400 text-base font-semibold mb-1">Business Hours</p>
                            <p className="font-medium">Mon - Sat: 09:30 AM - 07:30 PM</p>
                            <p className="font-medium">Sun: 11:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-14 gap-6 text-3xl">
                    <a href="#" className="text-white hover:text-[#f3b35c] transition duration-300">
                        <LanguageIcon fontSize="inherit" />
                    </a>
                    <a href="#" className="text-white hover:text-[#f3b35c] transition duration-300">
                        <FacebookIcon fontSize="inherit" />
                    </a>
                    <a href="#" className="text-white hover:text-[#f3b35c] transition duration-300">
                        <InstagramIcon fontSize="inherit" />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Contact7;