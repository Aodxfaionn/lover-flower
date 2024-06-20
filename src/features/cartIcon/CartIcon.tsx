import "./style.css";
import { Link } from "react-router-dom";
import { Icon } from "shared/ui";

export function CartIcon() {
  return (
    <Link to="/cart" className="cartIcon">
      <Icon type="cart" />
      <p>5</p>
    </Link>
  );
}
