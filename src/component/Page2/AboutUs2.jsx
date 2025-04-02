import { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AOS from "aos";
import "aos/dist/aos.css";
import homepage1 from '../../assets/Image2/homepage1.jpg';


const AboutUs2 = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="pt-24 bg-gradient-to-b from-neutral-600 to-neutral-900 text-white text-center min-h-[250px] flex flex-col justify-center items-center gap-4 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 brightness-90">
                    About Us
                </h1>
                <div>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={<span style={{ color: "white" }}>/</span>}
                        sx={{
                            "& .MuiBreadcrumbs-separator": { color: "white" },
                            fontSize: "16px",
                            "@media (min-width: 640px)": { fontSize: "20px" },
                            fontFamily: "serif",
                        }}
                    >
                        <Link
                            underline="hover"
                            color="white"
                            href="/template-2"
                            sx={{
                                fontSize: "16px",
                                "@media (min-width: 640px)": { fontSize: "20px" },
                                fontFamily: "serif",
                            }}
                        >
                            Home
                        </Link>
                        <Typography
                            sx={{
                                color: "#ecd453",
                                fontSize: "16px",
                                "@media (min-width: 640px)": { fontSize: "20px" },
                                fontFamily: "serif",
                            }}
                        >
                            About Us
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className=" text-white flex items-center justify-center p-8" data-aos="fade-up">
                <div className="max-w-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-[#303030] p-6 ">
                    <div className="w-full md:w-1/3 p-4 flex justify-end">
                        <img
                            src={homepage1}
                            alt="Nail Salon"
                            className="rounded-lg shadow-lg "
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6 text-center md:text-left">
                        <h3 className="text-yellow-500 brightness-90 text-sm md:text-base font-serif font-semibold uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
                            <hr className="w-8 border-yellow-500 border" /> About Us <hr className="w-8 border-yellow-500 border" />
                        </h3>
                        <h1 className="text-xl md:text-2xl font-serif font-bold mb-4 flex flex-col gap-1">
                            Welcome to <span className="text-yellow-500 brightness-90 text-2xl md:text-3xl">NAIL SALON</span>
                        </h1>
                        <p className="text-white mb-4 font-medium font-serif leading-relaxed">
                            We always strive to provide the highest quality and customer experience with our services. We constantly improve our technology to offer you the best service.
                        </p>
                        <p className="text-white font-medium font-serif leading-relaxed">
                            We provide a range of nail care services, including pedicures, manicures, nail polish, dip powders, waxing, and more. We strive to satisfy all of our clients.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs2;