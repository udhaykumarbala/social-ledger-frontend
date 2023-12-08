import React from "react";
import ReactDOM from "react-dom/client";
import { init } from "@airstack/airstack-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component from "./Component";
import WelcomePage from "./WelcomePage";

init(import.meta.env.VITE_AIRSTACK_API_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* Dynamic Component */}
        <Route path="sl">
          <Route path=":id" element={<Component />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Component /> */}
  </React.StrictMode>
);