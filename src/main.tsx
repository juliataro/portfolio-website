import React from "react";
import Scrollbar from "react-smooth-scrollbar";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Bodydetox from "./projects/bodydetox";
import Spavarska from "./projects/spavarska";
import Tobroxwood from "./projects/tobroxwood";
import Nagemisteraapia from "./projects/nagemisteraapia";

import Almarpuit from "./projects/almarpuit";

import Peipsikaup from "./projects/peipsikaup";
import "./index.css";
import CVProject from "./projects/cv";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scrollbar damping={0.1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/bodydetox" element={<Bodydetox />} />
          <Route path="/projects/spavarska" element={<Spavarska />} />
          <Route path="/projects/tobroxwood" element={<Tobroxwood />} />
          <Route
            path="/projects/nagemisteraapia"
            element={<Nagemisteraapia />}
          />

          <Route path="/projects/almarpuit" element={<Almarpuit />} />

          <Route path="/projects/peipsikaup" element={<Peipsikaup />} />
          <Route path="/projects/cv" element={<CVProject />} />
        </Routes>
      </Scrollbar>
    </BrowserRouter>
  </React.StrictMode>
);
