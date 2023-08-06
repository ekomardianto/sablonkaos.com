import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ProdukPage from "./pages/ProdukPage";
import SnKPage from "./pages/SnKPage";
import TestiPage from "./pages/TestiPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/produk" Component={ProdukPage} />
        <Route path="/snk" Component={SnKPage} />
        <Route path="/testimoni" Component={TestiPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
