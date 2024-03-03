import "./style.css";
import { LinkTo } from "shared/ui";
import { Icon } from "shared/ui";
import { useBtnClose } from "shared/lib/useBtnClose";
import { item } from "shared/model/types";

export function Cart() {
  return <div></div>
}

// type PropsCart = {
//   active: boolean;
//   setActive(arg0: boolean): void;
//   cartItems: item[];
// };

// export function Cart({ active, setActive, cartItems }: PropsCart) {
//   useEffect(() => {
//     console.log("CartItems updated:", cartItems); // Логируем обновленное состояние
//   }, [cartItems]);
//   useBtnClose(setActive);
//   return (
//     <div
//       className={active ? "cart open" : "cart"}
//       onClick={() => setActive(false)}
//     >
//       <div className="cart__content" onClick={(e) => e.stopPropagation()}>
//         <div className="cartContainer">
//           <h2 className="title-three">Ваша корзина</h2>
//           {cartItems.length === 0 ? (
//             <p>Корзина пуста</p>
//           ) : (
//             cartItems.map((item, key) => <p key={key}>{item.id}</p>)
//           )}
//           <div className="cartContainer__bottom">
//             <p>
//               Предварительный итог: &nbsp;
//               <span className="text-mint">315.00 руб.</span> Чтобы узнать
//               стоимость доставки, перейдите к оформлению заказа.
//             </p>
//             <LinkTo href="order" text="Оформить заказ" styles="btn-opacity" />
//           </div>
//         </div>
//         <div className="cart__pink pink blur"></div>
//       </div>
//     </div>
//   );
// }

// type PropsIcon = {
//   onClick: () => void;
//   cartItems: item[];
// };

// export function CartBtn({ onClick, cartItems }: PropsIcon) {
//   return (
//     <div className="cartIcon" onClick={onClick}>
//       <Icon type="cart" />
//       <span>{cartItems.length}</span>
//     </div>
//   );
// }
