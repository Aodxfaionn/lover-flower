import "./style.css";

export function MainSpecial() {
  return (
    <section className="main-special">
      <div className="container">
        <div className="main-special__top">
          <h2 className="title-two main-special__title">
            Особенный <span>повод?</span>
          </h2>
          <img
            src={require("../../assets/images/sections/main-order4.jpg")}
            alt="Цветы для особенного повода"
          />
        </div>
        <div className="main-special__bottom">
          <ul className="main-special__list">
            <p>
              Мы готовы прийти на помощь и собрать уникальный букет, на любой
              вкус, бюджет и для любого события по вашему индивидуальному
              заказу.
            </p>
            <li>учтем даже самые изысканные пожелания;</li>
            <li>
              подберем свежайшие цветы и сделаем уникальный букет или
              композицию;
            </li>
            <li>оплатить можно при получении или онлайн на сайте</li>
          </ul>
          <img
            src={require("../../assets/images/sections/main-order1.jpg")}
            alt="Цветы для особенного повода"
          />
          <img
            src={require("../../assets/images/sections/main-order2.jpg")}
            alt="Цветы для особенного повода"
          />
          <img
            src={require("../../assets/images/sections/main-order3.jpg")}
            alt="Цветы для особенного повода"
          />
        </div>
      </div>
      <div className="main-special__pink pink"></div>
    </section>
  );
}
