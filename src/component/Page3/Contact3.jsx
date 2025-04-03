import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact3 = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="w-screen h-[300px] bg-gradient-to-b from-[#27272a] via-[#777781] to-[#27272a] flex items-center justify-center">
                <h1 className="font-serif bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-500 text-transparent bg-clip-text text-6xl font-medium brightness-85">Contact</h1>
            </div>
            <div className="w-full mt-10 flex flex-col items-center pb-10" data-aos="fade-up">
                <div className="w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.988861979369!2d-95.5489237244668!3d29.71779183231653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dec75904a5d9%3A0x59c0c5d3ef832c4e!2s9999%20Bellaire%20Blvd%20UNIT%201111%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2s!4v1712000000000!5m2!1sen!2s"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div>
    )
}

export default Contact3;