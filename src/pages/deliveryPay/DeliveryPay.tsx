import "./style.css";
import { howPay } from "shared/model/arr";
import { Breadcrumbs } from "shared/ui";

export function DeliveryPay() {
  const arrPaths = [{ namePage: "Доставка и оплата" }];

  return (
    <section className="deliveryPay">
      <img
        src={require("../../assets/images/bg-img/pay-pinkFlower-top.png")}
        className="deliveryPay__flower deliveryPay__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/pay-pinkFlower-left.png")}
        className="deliveryPay__flower deliveryPay__flower-two"
      />
      <img
        src={require("../../assets/images/bg-img/pay-pinkFlower-right.png")}
        className="deliveryPay__flower deliveryPay__flower-three"
      />
      <div className="deliveryPay__lightpink-one lightpink blur"></div>
      <div className="deliveryPay__lightpink-two lightpink blur"></div>
      <div className="deliveryPay__lightpink-three lightpink blur"></div>
      <div className="deliveryPay__lightpink-four lightpink blur"></div>
      <div className="deliveryPay__lightpink-five lightpink blur"></div>
      <div className="deliveryPay__lightpink-six lightpink blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Доставка и оплата</h1>
        {howPay.map((item, num) => (
          <div className={`deliveryPayContainer ${item.style}`} key={num}>
            <h2 className="text-pink">{item.title}</h2>
            <ul>
              {item.list.map((item, num) => (
                <li key={num}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="deliveryPayAdditional">
          <div>
            <h2 className="text-pink">Дополнительно:</h2>
            <p>
              Доставка иному лицу возможна только в случае оплаты заказа
              заказчиком. Доставка осуществляется не ранее чем через 2 часа
              после оплаты заказа, но может быть ранее, если букет есть в
              наличии либо по договорённости с менеджером.
            </p>
            <p>Время ожидания курьера составляет 15 минут. </p>
            <p>
              В случае если на момент доставки цветов получателя нет либо нет
              возможности по иным причинам произвести доставку (указан неточный
              адрес, закрытая входная дверь, контрольно-пропускная система и
              др.), мы оставляем за собой право по собственному выбору:
            </p>
            <ul>
              <li>оставить цветы тому, кто открыл дверь;</li>
              <li>
                с заказчиком согласовать повторную доставку, которая
                дополнительно оплачивается;
              </li>
              <li>
                отказаться от передачи цветов без возврата денежных средств.
              </li>
            </ul>
            <p>
              Если вы либо иной получатель не получили заказ, вам необходимо
              сообщить об этом менеджеру по телефону &nbsp;
              <a
                href="tel:+375 (29) 113-69-69"
                className="deliveryPayAdditional__tel"
              >
                +375 (29) 113-69-69
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-pink">Возврат денег:</h2>
            <p>
              При отказе заказчика от заказа в течение двух часов, если заказ
              ещё не начал готовиться, средства возвращаются в полном объёме.
              Если же флорист начал подготовку, то заказчик имеет право на
              возврат 50% стоимости, либо, если ещё не был оплачен, то обязан
              оплатить 50%.
            </p>
            <p>
              Цветы надлежащего качества возврату и обмену не подлежат, а если
              имеются какие-либо недостатки в цветах – возврат производится лишь
              если эти недостатки не являются природными и естественными
              изъянами растения. Возврат денежных средств производится
              незамедлительно на тот счёт, с которого произошла оплата, их же
              поступление на счёт зависит от платёжной системы.
            </p>
          </div>
        </div>
        <div className="deliveryPayAdditional__text text">lover flower</div>
      </div>
    </section>
  );
}
