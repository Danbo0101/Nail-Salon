import { LocationOn, Email, Phone } from "@mui/icons-material";
import logoFooter from "../../assets/Image/logoFooter.png";

const Footer1 = () => {
    return (
        <div>
            <div className="bg-black text-gray-300 py-16 px-6 sm:px-12 md:px-20 lg:px-44 flex flex-col md:flex-row justify-center items-start gap-16">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="w-full h-80 sm:h-96">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.988861979369!2d-95.5489237244668!3d29.71779183231653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dec75904a5d9%3A0x59c0c5d3ef832c4e!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2s!4v1712000000000!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Store Location</h3>
                            <p className="font-light">9999 Bellaire Blvd., Suite 1111, Houston, TX 77036</p>
                        </div>
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Phone</h3>
                            <p className="font-light">(000) 000-9999</p>
                        </div>
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Email</h3>
                            <p className="font-light">demo@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Business Hours</h3>
                            <p className="font-light">Mon-Sat: 09:00 AM - 07:00 PM</p>
                            <p className="font-light">Sunday: Closed</p>
                        </div>
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Social Media</h3>
                            <p className="font-light">Facebook, Instagram, Google</p>
                        </div>
                        <div>
                            <h3 className="text-yellow-500 brightness-90 font-semibold uppercase text-sm">Office Location</h3>
                            <p className="font-light">Houston, Texas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#181818] text-gray-400 text-center py-8">
                <div className="flex flex-col items-center space-y-4">
                    <img src={logoFooter} alt="Logo" className="w-20 h-20" />
                    <p className="text-yellow-500 flex items-center">
                        <LocationOn className="mr-2" /> 9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                    </p>
                    <p className="text-yellow-500 flex items-center">
                        <Phone className="mr-2" /> (000) 000-9999
                    </p>
                    <p className="flex items-center">
                        <Email className="mr-2" /> demo@gmail.com
                    </p>
                </div>
                <div className="border-t border-gray-700 my-6 mx-auto w-2/3"></div>
                <p className="text-sm">Copyright Designed by &copy; LLDTEK</p>
                <p className="text-sm">All Rights Reserved</p>
            </div>
        </div>



    )
}
export default Footer1;
