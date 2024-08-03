import "./style.css";
import { Breadcrumbs } from "shared/ui";
import { FormaOrder } from "features/forma/Forma";

export function Order() {
  const arrPaths = [{ namePage: "Оформление заказа" }];

  return (
    <section className="order">
      <img
        src={require("../../assets/images/bg-img/order-left.png")}
        className="order__flower order__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/order-right.png")}
        className="order__flower order__flower-two"
      />
      <div className="order__green-one green blur"></div>
      <div className="order__green-two green blur"></div>
      <div className="order__green-three green blur"></div>
      <div className="order__pink-one pink blur"></div>
      <div className="order__pink-two pink blur"></div>
      <div className="order__pink-three pink blur"></div>
      <div className="order__pink-four pink blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Оформление заказа</h1>
        <FormaOrder />
        <div className="order__text text">lover flower</div>
      </div>
    </section>
  );
}
