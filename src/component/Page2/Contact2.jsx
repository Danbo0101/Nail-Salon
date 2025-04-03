import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AOS from "aos";
import "aos/dist/aos.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact2 = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="contact">
            <div className="pt-24 bg-gradient-to-b from-neutral-600 to-neutral-900 text-white text-center min-h-[250px] flex flex-col justify-center items-center gap-4 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 brightness-90">
                    Contact
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
                            Contact
                        </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center" data-aos="fade-up">
                <h3 className="text-yellow-300 brightness-90 text-xs md:text-sm font-serif uppercase mb-3 flex items-center gap-2">
                    <hr className="w-9 border-yellow-300 brightness-90 border" /> Get In Touch <hr className="w-9 border-yellow-300 brightness-90 border" />
                </h3>
                <h2 className="text-3xl md:text-4xl mb-10 text-yellow-300 brightness-90 font-serif">For Any Query</h2>

                <div className="w-full md:w-9/12 mx-auto flex flex-col md:flex-row justify-center items-start p-4 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col items-center text-center w-full md:w-1/4">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                            <LocationOnIcon />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-amber-400 font-serif">Location</h3>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            <p>9999 Beclaire, Suite 1111.</p>
                            <p>Haa, TX 77036</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                            <PhoneIcon className="text-3xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-amber-400 font-serif">Phone</h3>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            <p>( 000 ) 080-9999</p>
                            <p>1000-000-9598</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                            <EmailIcon className="text-3xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-amber-400 font-serif">Email</h3>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            <p>mail@pasiliam</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                            <AccessTimeIcon className="text-3xl" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-amber-400 font-serif">Business Hours</h3>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            <p>( Sun ): 10:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10 flex flex-col items-center">
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
            </div>

        </div>
    )
}


export default Contact2;