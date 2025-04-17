import React from "react";

export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}) {
    const gradientColors = colors.join(", ");
    const animationName = `gradientShift`;

    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${gradientColors})`,
        animation: `${animationName} ${animationSpeed}s linear infinite`,
        backgroundSize: "300% 100%",
    };

    return (
        <div
            className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
        >
            <style>
                {`
          @keyframes ${animationName} {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
            </style>

            {showBorder && (
                <div
                    className="absolute inset-0 bg-cover z-0 pointer-events-none"
                    style={gradientStyle}
                >
                    <div
                        className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
                        style={{
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>
            )}

            <div
                className="inline-block relative z-2 text-transparent bg-cover"
                style={{
                    ...gradientStyle,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                }}
            >
                {children}
            </div>
        </div>
    );
}
