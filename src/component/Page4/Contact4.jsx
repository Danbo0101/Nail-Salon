
import { Phone, Schedule, LocationOn, Email } from "@mui/icons-material";

const Contact4 = () => {
    return (
        <div className="bg-gradient-to-r from-[#ffecde] to-[#f8ebe6] flex flex-col md:flex-row justify-center items-center p-10 md:px-28 md:py-20">
            <div className="text-[#3F2A1D] space-y-6 w-full md:w-1/2 text-center md:text-left px-4 sm:px-10">
                <h3 className="text-sm font-semibold text-[#6d4023] flex items-center gap-2 justify-center md:justify-start">
                    <hr className="w-6 hidden md:block" /> CONTACT US
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Phone className="w-5 h-5" />
                            <h3 className="font-bold text-lg text-[#6d4023]">Phone Number</h3>
                        </div>
                        <div className="flex flex-col space-y-2 py-2 px-4 font-medium text-sm">
                            <p>(000) 000-9999</p>
                            <p>(000) 000-9999</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <LocationOn className="w-5 h-5" />
                            <h3 className="font-bold text-lg text-[#6d4023]">Address</h3>
                        </div>
                        <p className="py-2 px-4 font-medium text-sm">
                            9999 Bellaire Blvd., Suite 1111, Houston, TX 77036
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Schedule className="w-5 h-5" />
                            <h3 className="font-bold text-lg text-[#6d4023]">Business Hours</h3>
                        </div>
                        <div className="flex flex-col space-y-2 py-2 px-4 font-medium text-sm">
                            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Email className="w-5 h-5" />
                            <h3 className="font-bold text-lg text-[#6d4023]">Email</h3>
                        </div>
                        <p className="py-2 px-4 font-medium text-sm">email@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <iframe
                    title="Google Map"
                    className="w-full max-w-[400px] h-[250px] rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.859648278139!2d-95.55600842356752!3d29.70333647544692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ddae73766d5d%3A0x887d48b1e3dd22b!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2s!4v1712232402845!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

    );
}

export default Contact4;