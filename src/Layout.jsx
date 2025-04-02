import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import FuzzyText from "./utils/FuzzyText.jsx"
import App1 from "./apps/App1.jsx";
import App2 from "./apps/App2.jsx";
import HomePage2 from "./component/Page2/HomePage2.jsx";
import AboutUs2 from "./component/Page2/AboutUs2.jsx";


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
                <Route path="/template-2" element={<App2 />}>
                    <Route index element={<HomePage2 />} />
                    <Route path="about" element={< AboutUs2 />} />
                    {/* <Route path="merchant-service" element={<MerchantService />} />
                    <Route path="templates" element={<Templates />} />
                    <Route path="about" element={<About />} /> */}
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