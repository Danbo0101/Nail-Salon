import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App";
import HomePage from "./component/Page/HomePage";
import FuzzyText from "./utils/FuzzyText.jsx"


const NotFound = () => {
    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <FuzzyText
                baseIntensity={0.2}
            // hoverIntensity={hoverIntensity}
            // enableHover={enableHover}
            >
                404 Not Found
            </FuzzyText>
        </div>

    );
};

const Layout = () => {
    return (
        <Suspense fallback="...is loading">
            <Routes>
                <Route path="/" element={<App />}>
                    {/* <Route index element={<HomePage />} /> */}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Suspense>

    )
}

export default Layout;