import "./style.css";
import { Breadcrumbs } from "shared/ui";
import { LinkTo } from "shared/ui";
import { Button } from "shared/ui";

export function Cart() {
  const arrPaths = [
    {
      namePage: "Корзина",
    },
  ];
  return (
    <section className="cart">
      <img
        src={require("../../assets/images/bg-img/cart-flower.png")}
        className="cart__flower cart__flower-one"
      />
      <div className="cart__green-one green blur"></div>
      <div className="cart__green-two green blur"></div>
      <div className="cart__pink-one pink blur"></div>
      <div className="cart__pink-two pink blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Корзина</h1>
        <div className="cartContainer">
          <ul className="cartList">
            <li className="cartList__item">
              <img
                src={require("../../assets/images/catalog/catalog-1.jpg")}
                alt="Товар в корзине"
                className="cartContainer_left"
              />
              <div className="cartContainer__middle">
                <p className="cartContainer__title">Рубиновые искры</p>
                <p className="cartContainer__quanity">
                  <button>&#8722;</button>
                  <span>1</span>
                  <button>&#43;</button>
                </p>
              </div>
              <div className="cartContainer__right">
                <p className="cartContainer__price">167.00 ₽</p>
                <Button text="Удалить" style="cartContainer__delete" />{" "}
              </div>
            </li>
            <li className="cartList__item">
              <img
                src={require("../../assets/images/catalog/catalog-1.jpg")}
                alt="Товар в корзине"
                className="cartContainer_left"
              />
              <div className="cartContainer__middle">
                <p className="cartContainer__title">Рубиновые искры</p>
                <p className="cartContainer__quanity">
                  <button>&#8722;</button>
                  <span>1</span>
                  <button>&#43;</button>
                </p>
              </div>
              <div className="cartContainer__right">
                <p className="cartContainer__price">167.00 ₽</p>
                <Button text="Удалить" style="cartContainer__delete" />{" "}
              </div>
            </li>{" "}
            <li className="cartList__item">
              <img
                src={require("../../assets/images/catalog/catalog-1.jpg")}
                alt="Товар в корзине"
                className="cartContainer_left"
              />
              <div className="cartContainer__middle">
                <p className="cartContainer__title">Рубиновые искры</p>
                <p className="cartContainer__quanity">
                  <button>&#8722;</button>
                  <span>1</span>
                  <button>&#43;</button>
                </p>
              </div>
              <div className="cartContainer__right">
                <p className="cartContainer__price">167.00 ₽</p>
                <Button text="Удалить" style="cartContainer__delete" />{" "}
              </div>
            </li>
          </ul>
          <div className="cartContainer__result">
            <p className="cartContainer__result-mint">
              Предварительный итог: 315.00 руб.
            </p>
            <p>
              Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
            </p>
            <LinkTo
              href="arrange"
              text="Оформить заказ"
              styles="cartContainer__btn link-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
