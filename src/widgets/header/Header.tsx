import React, { useState } from "react";
import "./style.css";
import { Navigation } from "shared/ui/navigation/Navigation";
import { Icon } from "shared/ui/icon/Icon";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Icon type="logo" link="/" />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

{/*<svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
  <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
  <path
        class="line middle"
        d="m 30,50 h 40" />
  <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
</svg>*/}