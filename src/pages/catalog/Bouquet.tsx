import "./style.css";
import { useParams } from "react-router-dom";
import { Breadcrumbs, Icon, Button } from "shared/ui";
import { catalog } from "shared/model/arr";
import { useAddInCart } from "shared/lib/useAddInCart";

export function Bouquet() {
  const { id } = useParams();

  // console.log(catalog[id].title)
  // const bouqet = Object.values(catalog)[id];
  const arrPaths = [
    { namePage: "Каталог ", linkPage: "/catalog" },
    { namePage: ` / ${Object.values(catalog)[1].title}` },
  ];
  const addInCart = useAddInCart();

  return (
    <div className="container">
      <Breadcrumbs arr={arrPaths} />
      <div className="bouquet">
        <div className="bouquetInfo">
          <img src={Object.values(catalog)[1].img}></img>
          <div className="bouquetInfo__text" onClick={addInCart}>
            <div className="back">
              <Icon type="prev" link="/catalog" /> Назад
            </div>
            <h2>{Object.values(catalog)[1].title}</h2>
            <p className="bouquetInfo__price">
              {Object.values(catalog)[1].price} ₽
            </p>
            <p>
              Состав: Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан),
              Лотос, Роза
            </p>
            <p>
              Завораживающая глубина ваших чувств передана красками
              этого букета
            </p>
            <Button style="btn-opacity" text="В корзину" />
            {/* <div className="bouquetInfo__incart">
              <p className="cartContainer__quanity">
                <button onClick={onClickMinus}>&#8722;</button>
                <span>{count}</span>
                <button onClick={onClickPlus}>&#43;</button>
              </p>
            </div> */}
          </div>
        </div>
        <div className="bouqyetAddotional">
          <h3>Дополнительно к заказу:</h3>
          <ul>
            <li>
              <h3 className="text-mint">Удобрения для срезанных цветов</h3>
              <p>При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас</p>
            </li>
            <li>
              <h3 className="text-mint">подпишем
открытку</h3>
              <p>В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку</p>
            </li>
            <li>
              <h3 className="text-mint">Фото букета перед отправкой</h3>
              <p>В примечании к заказу укажите 
об этом и мы отправим фото готового букета перед доставкой. 
В праздничные дни в связи 
с большой загруженностью такой возможности нет</p>
            </li>
            <li>
              <h3 className="text-mint">Букет-сюрприз</h3>
              <p>Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом 
в примечании к заказу</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
