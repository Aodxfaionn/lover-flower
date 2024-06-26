import "./style.css";
import { LinkTo } from "shared/ui/link/Link";
import { catalog } from "shared/model/arr";
import { Button, Carousel, Card } from "shared/ui";
import { item } from "shared/model/types";
import { useAddInCart } from "shared/lib/useAddInCart";

export function MainPopular() {
  const addInCart = useAddInCart();
  const popular = [];
  for (let item of catalog) if (item.mark == "hit") popular.push(item);

  return (
    <section className="main-popular container">
      <h2 className="title-two main-popular__title">
        Популярные <span>букеты</span>
      </h2>
      <p className="main-popular__desc">
        Самые любимые композиции наших клиентов
      </p>
      <Carousel style="popular">
        {popular.map((item: item, num: number) => (
          <Card
            id={num}
            key={num}
            styles="card"
            image={item.img}
            title={item.title}
            onClick={addInCart}
          >
            <p className="card__price">
              <span>{item.price}</span> ₽
            </p>
            <Button style="btn-opacity" text="В корзину" />
          </Card>
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
