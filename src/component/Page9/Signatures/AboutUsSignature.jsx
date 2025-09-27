import React, { useEffect, useRef } from "react";

const AboutUsSignature = () => {
    const pathsRef = useRef([]);

    useEffect(() => {
        const animatePaths = () => {
            pathsRef.current.forEach((path) => {
                if (path) {
                    const length = path.getTotalLength();
                    path.style.strokeDasharray = length;
                    path.style.strokeDashoffset = length;

                    // Remove animation
                    path.style.animation = "none";
                    path.getBoundingClientRect(); // Trigger reflow

                    // Apply animation
                    path.style.animation = "draw-stroke 3s ease forwards";
                }
            });
        };

        animatePaths(); // Run once at start
        const interval = setInterval(animatePaths, 5000); // Every 5s

        return () => clearInterval(interval);
    }, []);

    const paths = [
        "M7.7,99.4 C7.7,99.4 15.2,61.8 28.7,38.6 C42.2,15.4 55.1,1.7 63.2,3.3 C71.3,4.9 66.6,31 58,61.3 C55.87,68.81 54.06,75.18 52.56,80.51",
        "M46.6,69 C46.6,69 -3.7,68.6 2.2,54.5 C8.1,40.4 35.7,50.7 43.5,54.3 C45.08,55.03 46.57,55.91 47.94,56.85",
        "M81.9,3.2 C81.9,3.2 73.1,32.9 71.9,38.8 C70.7,44.7 65.8,72.1 65.8,72.1 C65.8,72.1 74.2,43.9 81,43.3 C84.17,42.98 84.01,52.03 81.32,57.58",
        "M93.6,41.4 C93.6,41.4 89.4,45.8 88.7,54.6 C88,63.4 89.8,65.5 92.5,65.3 C95.2,65.1 98.9,60.2 99.6,52.3 C100.3,44.5 99.5,39.2 97.6,38.9 C95.7,38.5 91.8,58.1 103.4,57.7 C104.88,57.65 106.17,57.52 107.31,57.33",
        "M118.5,41.1 C118.5,41.1 114.7,52.7 114.5,60.3 C114.3,67.9 117.4,70.7 123.1,62.6 C128.7,54.5 135.6,40.1 135.6,40.1 C135.6,40.1 131.1,62.6 138,63.6 C140.47,63.99 142.78,62.5 144.73,60.4",
        "M162.4,1.1 C162.4,1.1 151.7,38.1 149.7,58.2 C147.7,78.4 149.2,84.2 152.8,83 C155.62,82.06 160.59,77.62 166.84,65.45",
        "M123.9,29.1 C123.9,29.1 130.7,20 144.2,21.4 C157.7,22.8 164.6,32 177.3,28.8 C183.09,27.34 187.57,24.28 190.73,21.38",
        "M196.7,43.3 C197.3,40.6 201.8,20.9 205.5,14.1 C209.2,7.3 213.4,0.71 222.1,1.51 C230.8,2.31 230.9,10.81 224.2,33.81 C217.5,56.81 206.7,97.61 217.4,102.11 C228.1,106.61 265.39,8.91 265.59,6.61 C265.79,4.32 258.83,47.39 257.6,65.77",
        "M276.4,34.3 C276.4,34.3 265.6,43.6 268.6,48.8 C271.6,54.1 280.2,54.7 280.2,61 C280.2,67.3 267,81.8 262.9,78.4 C258.8,75 265.8,66.1 275.8,59.8 C278.91,57.84 281.99,56.19 284.77,54.85"
    ];

    return (
        <div>
            <style>
                {`
          @keyframes draw-stroke {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
            </style>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 106"
                width="100%"
                height="auto"
            >
                <g transform="matrix(1.3333,0,0,1.3359,0,0)">
                    <g transform="scale(0.75)">
                        {paths.map((d, index) => (
                            <path
                                key={index}
                                ref={(el) => (pathsRef.current[index] = el)}
                                d={d}
                                style={{
                                    fill: "none",
                                    stroke: "#DDAA60",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }}
                            />
                        ))}
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default AboutUsSignature;
