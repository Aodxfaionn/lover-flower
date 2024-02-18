import "./style.css";
import { LinkTo } from "shared/ui/link/Link";
import { catalog } from "shared/model/arr";
import { Card } from "shared/ui/card/Card";
import { Button } from "shared/ui/button/Button";
import { Carousel } from "shared/ui/carousel/Carousel";

export function MainPopular() {
  const popular = [];
  for (let item of catalog) if (item.mark == "popular") popular.push(item);
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
          <Card
            id={item.id}
            key={item.id}
            styles="сard"
            image={item.img}
            title={item.title}
          >
            <p>{item.price} ₽</p>
            <Button style="btn-opacity" text="В корзину"></Button>
          </Card>
        ))}
      </Carousel>
      <LinkTo
        text="Смотреть весь каталог"
        styles="main-popular__link link-pink"
        href="/catalog"
      ></LinkTo>
      <div className="main-popular__green green blur"></div>
      <div className="main-popular__pink pink blur"></div>
    </section>
  );
}
