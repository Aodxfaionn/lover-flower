import "./style.css";
import { Breadcrumbs, LinkTo } from "shared/ui";
import { CartItem } from "./CartItem";
import { item } from "types/types";
import { useSelector } from "react-redux";
import { RootState } from "shared/lib/redux/store";

export function Cart() {
  let { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const arrPaths = [{ namePage: "Корзина" }];

  return (
    <section className="cart">
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Корзина</h1>
        {!totalPrice && (
          <p className="emptyCart">
            Корзина пуста. Перейти в{" "}
            <LinkTo href="catalog" text="Каталог" styles="underline" />
          </p>
        )}
        {totalPrice != 0 && <div className="cartContainer">
          <ul className="cartList">
            {items.map((item: item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                count={item.count}
              />
            ))}
          </ul>
          <div className="cartContainer__result">
            <p className="cartContainer__result-mint">
              Предварительный итог: {totalPrice} руб.
            </p>
            <p>
              Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
            </p>
            <LinkTo
              href="order"
              text="Оформить заказ"
              styles="cartContainer__btn link-opacity"
            />
          </div>
        </div> }
      </div>
      <img
        src={require("../../assets/images/bg-img/cart-flower.png")}
        className="cart__flower cart__flower-one"
      />
      <div className="cart__green-one green blur"></div>
      <div className="cart__green-two green blur"></div>
      <div className="cart__pink-one pink blur"></div>
      <div className="cart__pink-two pink blur"></div>
    </section>
  );
}
