import React, { useEffect, useState } from 'react';

const Review5 = () => {

    const testimonials = [
        {
            content:
                "My first ever visit at lavish nail was around the holiday and I’m so happy with the results and been back and will be my regular salon in the neighborhood, I’m from NY but I make sure if I’m in town I need my nail done. DAWN my nail specialist is amazing and take her time to make sure everything is perfect, highly recommend and worth every penny!!",
            author: 'Jessica Canegata',
        },
        {
            content:
                "Took my teenage granddaughter there today and was very pleased. I had a regular pedicure and granddaughter had a pedicure and a gel manicure. Very happy with all services. Friendly staff. Clean. Will be my go to place!  Prices are competitive. Bring cash or there is a fee to use credit card ( which you can’t blame them for adding on)",
            author: 'Emily Tran',
        },
        {
            content:
                "Sam always delivers exactly what I’m looking for in my nail designs! 10/10 every time. The atmosphere is relaxing, and they provide great service.",
            author: 'MaJoy Cruz-Carrea',
        },
    ];


    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
                setFade(true);
            }, 300);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full py-20 flex items-center justify-center bg-[#374740] text-white text-center px-4 sm:px-6">
            <div className="max-w-4xl">
                <p className="text-sm sm:text-base font-stretch-100% mb-2">Testimony</p>
                <h2 className="text-2xl sm:text-4xl font-bold mb-4">Happy Customer</h2>
                <div className="text-4xl sm:text-5xl mb-4">“</div>

                <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-xl sm:text-3xl font-light italic leading-relaxed sm:leading-loose">
                        {testimonials[current].content}
                    </p>
                    <p className="mt-8 sm:mt-12 text-base sm:text-lg font-serif">{testimonials[current].author}</p>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === current ? 'bg-white scale-110' : 'bg-gray-400'
                                }`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Review5;