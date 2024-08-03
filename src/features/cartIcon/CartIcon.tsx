import "./style.css";
import { Link } from "react-router-dom";
import { Icon } from "shared/ui";
import { useSelector } from "react-redux";
import { RootState } from "shared/lib/redux/store";

export function CartIcon() {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <Link to="/cart" className="cartIcon">
      <Icon type="cart" />
      <p>{items.length}</p>
    </Link>
  );
}
