import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { Header } from "widgets/header/Header";
import Footer from "widgets/footer/Footer";
import { Main } from "pages/main/Main";
import { About } from "pages/about/About";
import { Catalog  } from "pages/catalog/Catalog";
import { Bouquet } from "pages/catalog/Bouquet";
import { Contacts } from "pages/contacts/Contacts";
import { Corporation } from "pages/corporation/Corporation";
import { DeliveryPay } from "pages/deliveryPay/DeliveryPay";
import { Cart } from "pages/cart/Cart";
import { Order } from "pages/order/Order";
import { Error } from "pages/error/Error"
import { Faq } from "pages/faq/Faq";

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Bouquet />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/corporation" element={<Corporation />} />
        <Route path="/deliverypay" element={<DeliveryPay />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
