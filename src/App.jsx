import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}