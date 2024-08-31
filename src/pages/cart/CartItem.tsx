import "./style.css";
import { Button } from "shared/ui";
import { item } from "types/types";
import {
  addProduct,
  removeProduct,
  minusProduct,
} from "shared/lib/redux/reducer/cartSlice";
import { useAppDispatch } from "shared/lib/redux/store";

export function CartItem({ id, title, price, img, count }: item) {
  const dispatch = useAppDispatch();
  const onClickPlus = () => {
    dispatch(
      addProduct({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusProduct(id));
    if (Number(count) < 2) dispatch(removeProduct(id));
  };
  const onClickRemove = () => {
    dispatch(removeProduct(id));
  };
  return (
    <li className="cartList__item">
      <img src={img} alt="Товар в корзине" className="cartContainer_left" />
      <div className="cartContainer__middle">
        <p className="cartContainer__title">{title}</p>
        <p className="cartContainer__quanity">
          <button onClick={onClickMinus}>&#8722;</button>
          <span>{count}</span>
          <button onClick={onClickPlus}>&#43;</button>
        </p>
      </div>
      <div className="cartContainer__right">
        <p className="cartContainer__price">{price} ₽</p>
        <Button
          text="Удалить"
          style="cartContainer__delete"
          onClick={onClickRemove}
        />
      </div>
    </li>
  );
}
