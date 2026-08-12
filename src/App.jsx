import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Contact from "../src/Pages/Contact";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import WebDevelopment from "./Pages/Services/WebsiteDevelopment"
import ShopifyDevelopment from "./Pages/Services/ShopifyDevelopment"
import EcommerceDevelopment from "./Pages/Services/EcommerceDevelopment";
import MobileAppDevelopment from "./Pages/Services/MobileAppDevelopment";
import About from "./Pages/About";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
           <Route path="/about" element={<About />} />
          <Route path="/services/website-development" element={<WebDevelopment />}/>      
           <Route path="/services/shopify-development" element={<ShopifyDevelopment />}/> 
           <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />}/> 
           <Route path="/services/mobile-app-development" element={<MobileAppDevelopment/>}/>
      </Routes>
      <Footer/></div>
    </BrowserRouter>
  );
}