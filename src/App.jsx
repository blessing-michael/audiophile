import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* Footer appears on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
