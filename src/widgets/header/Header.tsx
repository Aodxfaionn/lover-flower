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
