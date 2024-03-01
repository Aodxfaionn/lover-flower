import "./style.css";
import { LinkTo } from "shared/ui/link/Link";
import { Icon } from "shared/ui/icon/Icon";

export function MainSection() {
  return (
    <section className="main">
      <div className="container">
        <h1 className="title title-one">
          <span>Lover</span> flower
        </h1>
        <p className="main__desc">
          Создаём для тех, кто ценит свежесть и изящество цветка
        </p>
        <LinkTo styles="link" text="смотреть каталог" href="catalog" />
        <div className="info">
          <div className="main__contacts">
            <a href="mailto:zakaz@loverflower.by" className="text-mint alink">
              zakaz@loverflower.by
            </a>
            <p>Доставка 24/7 по договоренности с оператором</p>
          </div>
          <div className="main__adress">
            <p className="text-mint">ул. Тимирязева 67</p>
            <p>10:00 до 21:00 без выходных</p>
          </div>
          <div className="main__social filter">
            <Icon type="inst" link="/" />
            <Icon type="whatsapp" link="/" />
            <Icon type="phone" link="/" />
          </div>
          <div className="main__icon">
            <a href="tel:+375 (29) 113-69-69" className="text-mint alink">
              +375 (29) 113-69-69
            </a>
            <div className="main__tel">
              <Icon type="mobule" />
              <a href="#form" className="text-mint alink">
                заказать звонок
              </a>
            </div>
            <div className="main__cart filter">
              <Icon type="cart" />
            </div>
          </div>
        </div>
        <div className="main__text text">lover flower</div>
      </div>
      <div className="main__green green blur"></div>
      <div className="main__pink pink blur"></div>
    </section>
  );
}
