import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Basket from "./Basket";
import Location from "./Location";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}
