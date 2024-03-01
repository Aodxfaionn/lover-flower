import "./style.css";
import { Link } from "react-router-dom";
import { LinkTo } from "shared/ui/link/Link";
import { catalog } from "shared/model/arr";
import { Card } from "shared/ui/card/Card";
import { Button } from "shared/ui/button/Button";
import { Carousel } from "shared/ui/carousel/Carousel";

export function MainPopular() {
  const popular = [];
  for (let item of catalog) if (item.mark == "hit") popular.push(item);
  const styles = {
    margin: "10px 0",
  };
  return (
    <section className="main-popular container">
      <h2 className="title-two main-popular__title">
        Популярные <span>букеты</span>
      </h2>
      <p className="main-popular__desc">
        Самые любимые композиции наших клиентов
      </p>
      <Carousel style="popular">
        {popular.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.img}></img>
            </Link>
            <div className="card__text">
              <h3>{item.title}</h3>
              <p style={styles}>{item.price} ₽</p>
              <Button style="btn-opacity" text="В корзину"></Button>
            </div>
          </div>
        ))}
      </Carousel>
      <LinkTo
        text="Смотреть весь каталог"
        styles="main-popular__link link-pink"
        href="catalog"
      ></LinkTo>
      <div className="main-popular__green green blur"></div>
      <div className="main-popular__pink pink blur"></div>
    </section>
  );
}
