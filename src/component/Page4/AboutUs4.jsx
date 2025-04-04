import about1 from "../../assets/Image4/about1.jpg";
import about2 from "../../assets/Image4/about2.jpg";
import about3 from "../../assets/Image4/about3.jpg";
import about4 from "../../assets/Image4/about4.jpg";

const AboutUs4 = () => {
    return (
        <div className="bg-gradient-to-r from-[#f8ebe6] to-[#ffecde] flex flex-col md:flex-row items-center p-6 md:p-16 min-h-screen">
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-sm font-semibold text-[#6d4023] flex items-center justify-center md:justify-start gap-2">
                    <hr className="w-6 hidden md:block" />ABOUT US
                </h3>
                <h2 className="text-3xl font-extrabold text-[#6d4023]">We Are Nail Salon</h2>
                <p className="text-gray-700 font-medium">
                    Come relax and experience the difference at Nail Salon. We hold ourselves to
                    a standard of excellence on all our services including our spa pedicures,
                    manicures, waxing, specialist acrylic nails and GelX nails.
                </p>
                <p className="text-gray-700 font-medium">
                    We are committed to providing not only the best pedicure service, but also
                    the most <span className="font-bold">SANITARY</span>. Our new Disposable Pedicure Jet-Liners will
                    protect you from cross-contamination and provide you with the most hygienic
                    pedicure experience.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                    <img src={about1} alt="Nail art" className="w-full object-cover rounded-lg" />
                    <img src={about2} alt="Beautiful nails" className="w-full object-cover rounded-lg" />
                    <img src={about3} alt="Manicure session" className="w-full object-cover rounded-lg" />
                </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                <img src={about4} alt="Glamorous woman" className="w-3/4 sm:w-full md:w-3/4 rounded-lg" />
            </div>
        </div>

    );
}

export default AboutUs4;