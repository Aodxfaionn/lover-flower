import "./style.css";
import { Link } from "react-router-dom";
import { Icon } from "shared/ui";
import { useSelector } from "react-redux";

export function CartIcon() {
  const { items } = useSelector((state: any) => state.cart);

  return (
    <Link to="/cart" className="cartIcon">
      <Icon type="cart" />
      <p>{items.length}</p>
    </Link>
  );
}
