import gallery from "../../assets/Image7/gallery.jpg"

const Gallery7 = () => {
    const imageList = [
        gallery, gallery, gallery, gallery, gallery, gallery
    ];


    return (
        <div className="bg-neutral-900 min-h-screen py-20 md:py-32 px-10 sm:px-6">
            <div className="text-center my-10 md:mt-0 sm:mb-12">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400">Gallery</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mt-2">Our Gallery</h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6">
                {imageList.map((src, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-xl bg-neutral-800 shadow-md hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Gallery7;