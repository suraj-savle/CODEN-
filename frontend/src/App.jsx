import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/LandingPage";
import FeaturesPage from "./pages/features/FeaturesPage";
import PricingPage from "./pages/pricing/PricingPage";
import UnderDevelopmentPage from "./pages/utils/UnderDevelopmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/*" element={<UnderDevelopmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
