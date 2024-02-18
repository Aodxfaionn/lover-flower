import "./style.css";
import { LinkTo } from "shared/ui/link/Link";
import { catalogLists } from "shared/model/arr";

export function MainCatalog() {
  const items = catalogLists.map((elem, num) => (
    <div className="catalogLists__list filter" key={num}>
      <h3 className="title-three catalogLists__title">{elem.title}</h3>
      <ul className="productLis">
        {elem.list.map((item, num) => (
          <li className="productList__item" key={num}>
            {item}
          </li>
        ))}
      </ul>
      <LinkTo
        text="Смотреть каталог"
        styles="catalogList__link link-pink"
        href="/catalog"
      ></LinkTo>
    </div>
  ));
  return (
    <section className="main-catalog">
      <div className="container">
        <h2 className="title-two">Каталог</h2>
        <div className="catalogLists">
          <div className="catalogLists__desc">
            <p>
              У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
              всегда поможем вам подобрать букет для вашего события, наш
              менеджер вас проконсультирует и поможет определиться с выбором
            </p>
            <p>Ознакомьтесь с нашими разделами каталога</p>
          </div>
          {items}
        </div>
      </div>
      <div className="mainCatalog__green green blur"></div>
      <div className="mainCatalog__pink pink blur"></div>
      <p className="mainCatalog__text mainCatalog__text-one title-big">
        букеты
      </p>
      <p className="mainCatalog__text mainCatalog__text-two title-big">цветы</p>
      <p className="mainCatalog__text mainCatalog__text-three title-big">
        дополнительно
      </p>
    </section>
  );
}
