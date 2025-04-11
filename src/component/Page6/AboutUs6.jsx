import { Facebook, Instagram, Google } from '@mui/icons-material';
import logo from "../../assets/Image6/logo.png";
import about1 from "../../assets/Image6/about1.jpg"

const AboutUs6 = () => {
    return (
        <div>
            <div className="text-white relative">
                <div className="bg-gradient-to-r from-[#4ba3f2] to-[#0d47a1] px-4 sm:px-10 md:px-32 py-6 flex-col md:flex-row md:items-center justify-between gap-6 text-sm font-serif hidden md:flex">
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

            <div className="py-14 px-6 sm:px-10 md:px-24 lg:px-60 text-center bg-white text-black">
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-sky-600/80 tracking-wide mb-4 uppercase">
                    Our Mission
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold font-serif text-gray-800 mb-8">Nail Salon</h3>

                {[
                    `At our salon, we believe that your hands and nails deserve more than just a quick trim and polish. 
       With over a decade of experience, we have perfected our techniques to give your nails the attention 
       they need to look healthy and stunning. Our manicure procedures are designed to enhance the natural beauty of your hands and nails.`,

                    `Our highly skilled technicians provide a seamless, relaxing and effective manicure and pedicure experience 
       that includes nail clipping, filing, shaping and cuticle maintenance. To complete your look, choose from our extensive 
       collection of high-quality polishes, or have your nails buffed for a natural and healthy shine.`,

                    `We take great pride in our creative and experienced nail artists, as well as our meticulous procedures 
       to ensure that every service we provide is of the highest quality. Our commitment to providing upscale services 
       and an unforgettable experience means that we always exceed our customers' expectations of high-end nail services.`,

                    `To be the place for you to unwind and rejuvenate. We are committed to delivering the peace, comfort, and beauty that you deserve.
       To uphold the highest standard in service and sanitation, we promote continuing education for our technicians so that you are receiving the very best.
       We carry “Nails By Design” to bring you beauty.`
                ].map((para, idx) => (
                    <p key={idx} className="text-base sm:text-lg font-medium mb-6 leading-relaxed text-start">
                        {para}
                    </p>
                ))}
            </div>
        </div>

    )
}

export default AboutUs6;