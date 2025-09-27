import { Home, Phone } from "@mui/icons-material";
import { motion } from "framer-motion";
import TestimonialsSignature from "./Signatures/TestimonialsSignature";

const HomePage9 = () => {
    return (
        <div className="home-page9">
            <div className="relative bg-black font-sans min-h-screen overflow-hidden text-white">
                {/* Background lighting effect */}
                <div
                    className="absolute inset-0 opacity-40 z-0"
                    style={{
                        backgroundImage: "url('/path-to-light-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                    }}
                ></div>
                //TestimonialsSignature
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
                    {/* Left Content */}
                    <TestimonialsSignature />
                    <div className="max-w-xl text-left">
                        <h4 className="text-sm tracking-widest font-semibold mb-2" style={{ color: "#d4af37" }}>
                            ZOTA NAILS SALON
                        </h4>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#d4af37" }}>
                            Pretty nails for<br />pretty lady
                        </h1>

                        <div className="mt-8 space-y-4 text-base">
                            <div className="flex items-start space-x-3">
                                <Home style={{ color: "#d4af37" }} />
                                <div>
                                    3751 Island Avenue Ste 201-202C,<br />
                                    Philadelphia, PA 19153
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone style={{ color: "#d4af37" }} />
                                <div>(866) 542-3702</div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - woman image */}
                    <div className="relative mt-10 md:mt-0 md:ml-10 flex-shrink-0">
                        <div
                            className="w-[400px] h-[500px] rounded-lg shadow-lg bg-center bg-cover"
                            style={{
                                backgroundImage: "url('/your-nail-image.jpg')", // ảnh người phụ nữ chính
                            }}
                        ></div>

                        {/* Floating polish image with framer-motion fade-in-left */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="absolute -right-28 top-1/2 transform -translate-y-1/2 w-[180px] h-[180px] bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/your-polish-bottle-image.png')", // ảnh 2 lọ sơn bên phải
                            }}
                        ></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage9;
