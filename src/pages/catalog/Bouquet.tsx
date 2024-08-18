import "./style.css";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Button, LinkTo, Carousel, Card } from "shared/ui";
import { catalog, additional } from "shared/model/arr";
import { item } from "types/types";
import { useAddInCart } from "shared/lib";

export function Bouquet() {
  const { id } = useParams();
  const title = catalog.find((item) => item.id === Number(id))?.title,
    price = catalog.find((item) => item.id === Number(id))?.price,
    img = catalog.find((item) => item.id === Number(id))?.img;
  const arrPaths = [
    { namePage: "Каталог ", linkPage: "catalog" },
    { namePage: ` / ${title}` },
  ];
  const popular = [];
  for (let item of catalog) if (item.mark == "hit") popular.push(item);
  const addInCart = useAddInCart();

  return (
    <div className="bouquet">
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <div className="bouquetInfo">
          <img src={img} className="bouquetInfo__img"></img>
          <div className="bouquetInfo__text">
            <LinkTo href="catalog" text="&#60; Назад" styles="link-back" />
            <h3 className="bouquetInfo__title">{title}</h3>
            <p className="price bouquetInfo__price"><span>{price}</span> ₽</p>
            <p className="bouquetInfo__info">
              Состав: Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан),
              Лотос, Роза
            </p>
            <p className="bouquetInfo__info">
              Завораживающая глубина ваших чувств передана красками этого букета
            </p>
            <button className="btn-opacity" onClick={addInCart}>В корзину</button>
            {/* <div className="bouquetInfo__incart">
              <p className="cartContainer__quanity">
                <button onClick={onClickMinus}>&#8722;</button>
                <span>{count}</span>
                <button onClick={onClickPlus}>&#43;</button>
              </p>
            </div> */}
          </div>
        </div>
        <div className="bouquetAddotional">
          <h3 className="bouquetAddotional__title text-pink">
            Дополнительно к заказу:
          </h3>
          <ul className="bouquetAddotional__list">
            {additional.map((item, num) => (
              <li key={num}>
                <h3 className="text-mint">{item.title}</h3>
                <p>{item.desc} </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bouquetLike">
          <h2 className="bouquetLike__title text-mint">
            Вам может понравиться:
          </h2>
          <Carousel style="bouquetPopular popular">
            {popular.map((item: item, num: number) => (
              <Card
                id={num}
                key={num}
                styles="card"
                image={item.img}
                title={item.title}
                onClick={addInCart}
              >
                <p className="price card__price">
                  <span>{item.price}</span> ₽
                </p>
                <Button style="btn-opacity" text="В корзину" />
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
      <img
        src={require("../../assets/images/bg-img/card-leaf.png")}
        className="bouquet__flower bouquet__flower-one"
      />
      <div className="bouquet__green-one green blur"></div>
      <div className="bouquet__green-two green blur"></div>
      <div className="bouquet__green-three green blur"></div>
      <div className="bouquet__green-four green blur"></div>
      <div className="bouquet__pink-one pink blur"></div>
      <div className="bouquet__pink-two pink blur"></div>
      <div className="bouquet__pink-three pink blur"></div>
      <div className="bouquet__pink-four pink blur"></div>
    </div>
  );
}
