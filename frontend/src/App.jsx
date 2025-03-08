import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";
import Footer from "./components/Footer";
function App() {
  const { theme } = useThemeStore();
  return (
    <div
      className="min-h-screen bg-base-200 transition-colors duration-300 "
      data-theme={theme}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
