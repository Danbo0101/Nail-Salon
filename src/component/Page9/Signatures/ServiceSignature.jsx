import React, { useEffect, useRef } from "react";

const ServiceSignature = () => {
    const pathsRef = useRef([]);

    const paths = [
        "M35.2,61.5 C35.2,61.5 50.5,38 51.6,19.8 C52.7,1.6 44.5,-1.5 30,7.7 C15.5,16.9 9,27.4 7.6,40.1 C6.2,52.8 14.2,60.8 23.6,69.9 C33,79 35.2,88.8 30.4,93.6 C25.6,98.4 12.8,100.4 0.5,86.5",
        "M53.4,55.4 C53.4,55.4 56.6,59.4 59.8,56.7 C63,54 65.6,44.5 61.6,45.4 C57.7,46.4 43.91,67.4 55.41,69.9 C64.11,72 73.51,57.1 73.51,57.1",
        "M77.7,39.7 C77.7,39.7 69.2,73 71.5,73.3 C73.8,73.6 83.6,41.8 89.5,42.7 C94,43.4 86.1,56.7 92.1,57.9 C99.4,59.4 102.8,54.3 102.8,54.3",
        "M105.3,42 C105.3,42 97.3,71.4 105.1,71.2 C112.9,71 130.41,35.4 124.01,18.4",
        "M129.3,45.5 C129.3,45.5 119.2,71.5 129,70.2 C137,69.1 142.2,58 142.2,58",
        "M150.9,51.7 C151,51.5 151.1,45.9 147.4,46.8 C143.7,47.8 137.7,67.7 145.4,68.4 C153.1,69.1 163.6,57.8 163.6,57.8",
        "M164.2,55.7 C164.2,55.7 165.9,60.3 170,57.4 C174.1,54.5 174.6,46.39 172.8,45.99 C169.2,45.29 164.3,50.8 163.1,60.4 C161.9,70 164.01,71.5 168.91,71.2 C172.31,71 182.41,63.5 185.81,55.6",
        "M190.7,39.2 C190.7,39.2 181.6,48.6 183.9,53.3 C186.2,57.9 195.7,59 195.7,65.2 C195.7,71.4 184.7,87.3 178.8,83 C172.9,78.7 187.7,59.1 211.6,54.8",
        "M133.7,33.5 C131.4,32.7 130.1,36.1 132.1,36.7 C134.2,37.3 136,34.3 133.7,33.5"
    ];

    useEffect(() => {
        const animate = () => {
            pathsRef.current.forEach((path) => {
                if (path) {
                    const length = path.getTotalLength();
                    path.style.strokeDasharray = length;
                    path.style.strokeDashoffset = length;

                    path.style.animation = "none"; // reset
                    path.getBoundingClientRect(); // force reflow
                    path.style.animation = "draw 3s ease forwards";
                }
            });
        };

        animate(); // lần đầu
        const interval = setInterval(animate, 5000); // mỗi 5s

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <style>
                {`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
            </style>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 214 100"
                style={{ width: "100%", height: "auto" }}
                preserveAspectRatio="xMidYMid meet"
            >
                <g transform="matrix(1.3302,0,0,1.332,0,0)">
                    <g transform="scale(0.75)">
                        {paths.map((d, idx) => (
                            <path
                                key={idx}
                                ref={(el) => (pathsRef.current[idx] = el)}
                                d={d}
                                fill="none"
                                stroke="#DDAA60"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        ))}
                    </g>
                </g>
            </svg>
        </div>
    );
}
export default ServiceSignature