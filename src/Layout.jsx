import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import FuzzyText from "./utils/FuzzyText.jsx"
import App1 from "./apps/App1.jsx";


const NotFound = () => {
    return (
        <div className="bg-black h-screen flex items-center justify-center">
            <FuzzyText
                baseIntensity={0.2}
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
                <Route path="/template-1" element={<App1 />}>
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