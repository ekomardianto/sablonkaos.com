import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop.jsx";

//mengimport css react bootstrap yg sudah diinstall
import "bootstrap/dist/css/bootstrap.min.css";

//mengimport main css yang sudah dibuat di lokal
import "./assets/css/main.css";

//animate css
import "animate.css";

import { BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
