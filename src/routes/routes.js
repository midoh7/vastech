import { Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Index from "../pages/Index";

export default function Routers() {
  return (
    <Routes>
      {/* <Route element={<Home />} path="/home" />
      <Route element={<Home />} path="/" /> */}
      <Route element={<Index />} path="/" />
    </Routes>
  );
}
