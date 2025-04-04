import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import FuzzyText from "./utils/FuzzyText.jsx"
import App1 from "./apps/App1.jsx";
import App2 from "./apps/App2.jsx";
import HomePage2 from "./component/Page2/HomePage2.jsx";
import AboutUs2 from "./component/Page2/AboutUs2.jsx";
import Services2 from "./component/Page2/Services2.jsx";
import Gallery2 from "./component/Page2/Gallery2.jsx";
import Specialties2 from "./component/Page2/Specialties2.jsx";
import Contact2 from "./component/Page2/Contact2.jsx";
import App3 from "./apps/App3.jsx";
import HomePage3 from "./component/Page3/HomePage3.jsx";
import AboutUs3 from "./component/Page3/AboutUs3.jsx";
import Gallery3 from "./component/Page3/Gallery3.jsx";
import Service3 from "./component/Page3/Service3.jsx";
import Contact3 from "./component/Page3/Contact3.jsx";
import App4 from "./apps/App4.jsx";
import HomePage4 from "./component/Page4/HomePage4.jsx";


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
                    <Route path="services" element={<Services2 />} />
                    <Route path="gallery" element={<Gallery2 />} />
                    <Route path="specialties" element={<Specialties2 />} />
                    <Route path="contact" element={<Contact2 />} />
                </Route>
                <Route path="/template-3" element={<App3 />}>
                    <Route index element={<HomePage3 />} />
                    <Route path="about" element={< AboutUs3 />} />
                    <Route path="gallery" element={<Gallery3 />} />
                    <Route path="services" element={<Service3 />} />
                    <Route path="contact" element={<Contact3 />} />
                </Route>
                <Route path="/template-4" element={<App4 />}>
                    <Route index element={<HomePage4 />} />
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