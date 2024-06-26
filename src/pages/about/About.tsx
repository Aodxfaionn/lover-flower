import "./style.css";
import { Breadcrumbs } from "shared/ui";

export function About() {
  const arrPaths = [{ namePage: "О нас" }];

  return (
    <section className="about">
      <img
        src={require("../../assets/images/bg-img/about-yellowFlower-left.png")}
        className="about__flower about__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/about-yellowFlower-rightBottom.png")}
        className="about__flower about__flower-two"
      />
      <div className="about__yellow-one yellow blur"></div>
      <div className="about__yellow-two yellow blur"></div>
      <div className="about__yellow-three yellow blur"></div>
      <div className="about__yellow-four yellow blur"></div>
      <div className="about__yellow-five yellow blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">О нас</h1>
        <div className="team">
          <h2 className="inner__title-two">Lover flower —</h2>
          <div className="team__text filter">
            <p>молодая команда разных людей с одинаковыми ценностями.</p>
            <p>
              Мы считаем, что удовольствие от качества длится дольше, чем
              удовольствие от низкой цены. И поэтому в создание нашей букетерии
              мы вложили все, чем располагаем: душу, сердце, время и мечты! Мы
              готовы обещать вам только то, что можем сделать. А делаем мы
              только самое качественное, самое интересное и обязательно
              уникальное. Мы всегда честны со своими клиентами во всем – в нашем
              каталоге только те букеты, которые вы действительно сможете
              купить.
            </p>
          </div>
        </div>
        <div className="garant">
          <h2 className="inner__title-two text-mint">гарантии</h2>
          <p>
            Каждый цветок уникален и чтобы вы были уверены в качестве, мы
            пришлем вам фотографию именно вашего букета до его отправки
            получателю. Вся предоставленная Вами информация конфиденциальна и
            будет известна только нам и курьеру для осуществления доставки.
          </p>
        </div>
        <div className="orderThis">
          <h2 className="inner__title-two mint">
            Заказ букетов на сайте компании Lower Flower – это:
          </h2>
          <ul>
            <li>выбор оттенков и сортов цветков в любое время года;</li>
            <li>отправка фото готовой композиции перед отправкой;</li>
            <li>возможность заказать цветы с доставкой в течение часа;</li>
            <li>
              выгодные цены – на сайте только те варианты, что Вы сможете
              купить;
            </li>
            <li>полная конфиденциальность по заказу;</li>
            <li>
              мы подбираем открытку, воздушные шар, подарок по Вашему желанию;
            </li>
            <li>
              в нашем уютном цветочном магазине цветы, которые приятно дарить.
            </li>
          </ul>
        </div>
        <div className="aboutText">
          <p className="inner__title-two">
            Природная гармония цвета, неповторимость бутонов и Ваши чувства в
            нежных лепестках не оставят никого равнодушным.
          </p>
          <p className="aboutText__text">
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него
            душу!
          </p>
        </div>
      </div>
    </section>
  );
}
