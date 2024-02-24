import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import loadingImage from './assets/images/loading.jpg'; // Import the image
const LazyHomepage = lazy(() => import("./pages/user/home"));
const LazyLoginPage = lazy(() => import("./pages/user/login"));
const LazyRegistrationPage = lazy(() => import("./pages/user/signup"));
const Contact = lazy(() => import("./pages/user/contact"));
const UserProfile = lazy(() => import("./pages/user/up"));
const About = lazy(() => import("./pages/user/about"));

export default function App() {
  return (
    <div>
    {/* <ProfilePage/> */}
        <Suspense fallback={<img src={loadingImage} alt="Loading..."/>}>
          <Routes>
            <Route path="/" element={<LazyHomepage />} />
            <Route path="/login" element={<LazyLoginPage />} />
            <Route path="/register" element={<LazyRegistrationPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
    </div>
  );
}
