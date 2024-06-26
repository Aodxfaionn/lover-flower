import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "shared/lib/redux/reducer/cartSlice";

export const useAddInCart = () => {
  const dispatch = useDispatch();
  const addInCart: React.MouseEventHandler<HTMLElement> = (event) => {
    const elem = event.currentTarget,
      id = event.currentTarget.id,
      title = event.currentTarget.querySelector("h3")?.textContent,
      price = Number(
        event.currentTarget.querySelector(".card__price span")?.textContent
      ),
      img = event.currentTarget.querySelector("img")?.src;
    const item = {
      id,
      title,
      price,
      img,
    };
    dispatch(addProduct(item));
  };
  return addInCart;
};
