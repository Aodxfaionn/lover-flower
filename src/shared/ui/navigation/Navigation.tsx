import "./style.css";
import { NavLink } from "react-router-dom";

type Props = {
  styles?: string;
};

export function Navigation({ styles }: Props) {
  return (
    <nav>
      <ul className={`nav ${styles}`}>
        <li className="nav__item">
          <NavLink to="/catalog">Каталог</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/deliveryPay">Доставка и оплата </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contacts">Контакты</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/corporation">Корпоративным клиентам</NavLink>
        </li>
      </ul>
    </nav>
  );
}
