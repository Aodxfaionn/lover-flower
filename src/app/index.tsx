import React, { useLayoutEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Header from "widgets/header/Header";
import Footer from "widgets/footer/Footer";
import { Main } from "pages/main/Main";
import { About } from "pages/about/About";
import { Catalog } from "pages/catalog/Catalog";
import { Contacts } from "pages/contacts/Contacts";
import { Corporation } from "pages/corporation/Corporation";
import { DeliveryPay } from "pages/deliveryPay/DeliveryPay";
import { Faq } from "pages/faq/Faq";
import { Error } from "pages/error/Error";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/corporation" element={<Corporation />} />
        <Route path="/deliverypay" element={<DeliveryPay />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
