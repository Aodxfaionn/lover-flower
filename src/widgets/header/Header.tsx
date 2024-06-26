import { useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { Icon } from "shared/ui";
import { Navigation } from "shared/ui";
import { CartIcon } from "features/cartIcon/CartIcon";

export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Icon type="logo" link="/" />
        </div>
        <Navigation styles={mobileMenu && "active"} />
        {location.pathname !== "/cart" && <CartIcon />}
        <svg
          viewBox="0 0 100 100"
          width="80"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={mobileMenu ? "burger active" : "burger"}
        >
          <path
            className="burger__line burger__line-top"
            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          />
          <path className="burger__line burger__line-middle" d="m 30,50 h 40" />
          <path
            className="burger__line burger__line-bottom"
            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          />
        </svg>
      </div>
    </header>
  );
}
