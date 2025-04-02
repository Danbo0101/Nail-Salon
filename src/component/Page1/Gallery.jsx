import { useState } from "react";
import gallery1 from "../../assets/Image/gallery1.jpeg"



const Gallery = () => {
    const images = [
        [
            gallery1,
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
        ],
        [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
        ],
        [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
        ],
        [
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
            "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
        ]
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-black text-white py-16 flex flex-col gap-16 px-6 sm:px-12 md:px-20 lg:px-44">
            <h2 className="text-2xl md:text-4xl font-semibold text-yellow-500 brightness-75 text-center">
                GALLERY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((column, colIndex) => (
                    <div key={colIndex} className="grid gap-4">
                        {column.map((src, index) => (
                            <div key={index}>
                                <img
                                    src={src}
                                    alt="Gallery Image"
                                    className="w-full h-auto rounded-lg cursor-pointer object-cover"
                                    onClick={() => setSelectedImage(src)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-full max-h-full rounded-lg object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>

    );
};

export default Gallery;
