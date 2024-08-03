import { useDispatch } from "react-redux";
import { addProduct } from "shared/lib/redux/reducer/cartSlice";

export const useAddInCart = () => {
  const dispatch = useDispatch();

  const getItemDetails = (elem: HTMLElement | null) => {
    const id = Number(elem?.id);
    const title = elem?.querySelector("h3")?.textContent ?? null;
    const price = Number(elem?.querySelector(".price span")?.textContent);
    const img = elem?.querySelector("img")?.src ?? null;
    return { id, title, price, img };
  };

  const updateButtonText = (btn: HTMLButtonElement | null, text: string, timeout: number) => {
    if (btn) {
      btn.textContent = text;
      setTimeout(() => btn.textContent = "В корзину", timeout);
    }
  };
  
  const addInCart: React.MouseEventHandler<HTMLElement> = (event) => {
    const elem = (event.target as HTMLElement).parentElement?.parentElement;
    if (!elem) return;
    const item = getItemDetails(elem);
    const btn = elem.querySelector("button") as HTMLButtonElement | null;
    updateButtonText(btn, "Добавлено в корзину", 2000);
    dispatch(addProduct(item));
  };
  return addInCart;
};
