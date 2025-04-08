

const Contact5 = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 text-center">
            <div className="mt-20 text-black">
                <h3 className="text-sm text-gray-500">Nails Salon</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Location</h2>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-[1000px] aspect-video rounded-lg overflow-hidden shadow-lg border">
                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13820.927870831052!2d-95.56038914021403!3d29.703355443690273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b36b101bcb%3A0xc6c03aa7e8fc841!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2s!4v1712637726972!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact5;