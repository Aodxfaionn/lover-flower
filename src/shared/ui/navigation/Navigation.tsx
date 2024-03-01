import "./style.css";
import { NavLink } from "react-router-dom";

type Props = {
  styles?: string | boolean;
};

export function Navigation({ styles }: Props) {
  return (
    <nav>
      <ul className={`nav ${styles}`}>
        <li className="nav__item">
          <NavLink to="/catalog" className="alink">Каталог</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/deliveryPay" className="alink">Доставка и оплата </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="alink">О нас</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contacts" className="alink">Контакты</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/faq" className="alink">FAQ</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/corporation" className="alink">Корпоративным клиентам</NavLink>
        </li>
      </ul>
    </nav>
  );
}
