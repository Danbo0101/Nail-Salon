import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SparkleStars = () => {
    const [startSpin, setStartSpin] = useState(false);
    const [visible, setVisible] = useState(true);
    const [starsVisible, setStarsVisible] = useState([false, false, false]);
    const [exitAnimation, setExitAnimation] = useState(false);

    const triggerAnimation = () => {
        setStarsVisible([false, false, false]); // Reset the star visibility
        setStartSpin(false);
        setExitAnimation(false);
        setVisible(true);

        // Show stars one by one
        setTimeout(() => setStarsVisible(prev => [true, prev[1], prev[2]]), 500);
        setTimeout(() => setStarsVisible(prev => [prev[0], true, prev[2]]), 1000);
        setTimeout(() => setStarsVisible(prev => [prev[0], prev[1], true]), 1500);

        // Start spinning animation
        setTimeout(() => {
            setStartSpin(true);
            setTimeout(() => {
                setExitAnimation(true);
                setTimeout(() => {
                    setVisible(false);
                    // Restart the animation after it disappears
                    setTimeout(() => {
                        triggerAnimation();
                    }, 4000); // Wait for 4s after disappearance before starting the animation again
                }, 1000);
            }, 2000);
        }, 5000);
    };

    useEffect(() => {
        // Start the animation on component mount
        triggerAnimation();
    }, []);

    const starPath = (
        <path
            fill="rgb(203,153,58)"
            fillOpacity="1"
            d="M-0.019,-23.804 C-2.539,-6.874 -1.799,-1.894 -19.569,-0.004 C-2.099,2.326 -1.869,7.536 -0.019,23.806 C2.431,7.366 1.961,2.546 19.571,-0.004 C1.801,-1.864 2.401,-6.874 -0.019,-23.804z"
        />
    );

    return (
        <div className="relative w-64 h-64 bg-transparent overflow-hidden">
            <AnimatePresence>
                {visible && (
                    <motion.svg
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            rotate: startSpin ? 360 : 0,
                            scale: exitAnimation ? 0 : 1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 2 },
                            rotate: {
                                duration: 2,
                                ease: "linear",
                                repeat: exitAnimation ? 0 : Infinity
                            },
                            scale: {
                                duration: 1,
                                ease: "easeInOut"
                            }
                        }}
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Star lớn ở giữa */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: starsVisible[0] ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            transform="translate(50,50) scale(1.2)"
                            style={{ transformOrigin: "center" }}
                        >
                            {starPath}
                        </motion.g>

                        {/* Star nhỏ bên trái */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: starsVisible[1] ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            transform="translate(25,70) scale(0.6)"
                            style={{ transformOrigin: "center" }}
                        >
                            {starPath}
                        </motion.g>

                        {/* Star nhỏ bên phải */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: starsVisible[2] ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            transform="translate(75,30) scale(0.8)"
                            style={{ transformOrigin: "center" }}
                        >
                            {starPath}
                        </motion.g>
                    </motion.svg>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SparkleStars;
