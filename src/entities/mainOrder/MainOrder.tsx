import "./style.css";
import { howOrder } from "shared/model/arr";

export function MainOrder() {
  return (
    <section className="main-order">
      <div className="container">
        <h2 className="title-two main-order__title">Как сделать заказ </h2>
        <div className="main-order__how howOrder">
          {howOrder.map((item, num) => (
            <div className="howOrder__item" key={num}>
              <p className="howOrder__item-pink">{item.title}</p>
              <p className="howOrder__item-mainText">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-order__text text">lover flower</div>
      </div>
      <img
        src={require("../../assets/images/bg-img/main-pinkFlower.png")}
        alt=""
        className="main-order__flower"
      />
    </section>
  );
}
