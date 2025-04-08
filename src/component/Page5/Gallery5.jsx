import { Facebook, Instagram, Google } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import gallery1 from "../../assets/Image5/gallery1.jpg";
import gallery2 from "../../assets/Image5/gallery2.jpg";
import gallery3 from "../../assets/Image5/gallery3.jpg";
import gallery4 from "../../assets/Image5/gallery4.jpg";
import gallery5 from "../../assets/Image5/gallery5.jpg";
import gallery6 from "../../assets/Image5/gallery6.jpg";
import gallery7 from "../../assets/Image5/gallery7.jpg";
import gallery8 from "../../assets/Image5/gallery8.jpg";
import gallery9 from "../../assets/Image5/gallery9.jpg";
import gallery10 from "../../assets/Image5/gallery10.jpg";
import gallery11 from "../../assets/Image5/gallery11.jpg";
import gallery12 from "../../assets/Image5/gallery12.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Gallery5 = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const isGalleryPage = location.pathname === "/template-5/gallery";

    const imageUrls = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
    ];


    const displayedImages = isGalleryPage ? imageUrls : imageUrls.slice(0, 6);



    return (
        <div className="py-20 bg-white text-black">
            {!isGalleryPage ?
                <>
                    <h2 className="text-center text-gray-600 mb-2">Beauty at the tips of your fingers</h2>
                    <h1 className="text-center text-3xl md:text-4xl font-bold mb-20">Gallery</h1>
                </>
                :
                <div className="mt-20">
                    <h3 className="text-center text-sm text-gray-500">Beauty at the tips of your fingers</h3>
                    <h2 className="text-center text-4xl font-bold mb-16">Gallery</h2>
                </div>
            }

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 max-w-4xl mx-auto cursor-pointer">
                {displayedImages.map((url, idx) => (
                    <div
                        key={idx}
                        className="relative group rounded-xl overflow-hidden shadow-lg"
                    >
                        <img
                            src={url}
                            alt={`Nail Art ${idx + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Facebook className="text-white hover:text-blue-500 text-3xl transition-colors duration-200" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Instagram className="text-white hover:text-pink-500 text-3xl transition-colors duration-200" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Google className="text-white hover:text-red-500 text-3xl transition-colors duration-200" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {!isGalleryPage && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigate("/template-5/gallery")}
                        className="px-6 py-2 bg-green-700/60 text-sm text-white rounded-full font-extrabold cursor-pointer hover:bg-green-700 transition flex items-center gap-2"
                    >
                        VIEW MORE
                        <ArrowForwardIcon fontSize="small" />
                    </button>
                </div>
            )}
        </div>
    );
}
export default Gallery5;