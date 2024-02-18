import "./style.css";
import { corporation } from "shared/model/arr";
import { steps } from "shared/model/arr";
import { Breadcrumbs } from "shared/ui";
import { Button } from "shared/ui";

export function Corporation() {
  const arrPaths = [
    {
      namePage: "Корпоративным клиентам",
    },
  ];
  return (
    <section className="сorporation">
      <img
        src={require("../../assets/images/bg-img/boucets-orangeFlower-left.png")}
        className="сorporation__flower сorporation__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/boucets-orangeFlower-right.png")}
        className="сorporation__flower сorporation__flower-two"
      />
      <img
        src={require("../../assets/images/bg-img/boucets-orangeFlower-leftBottom.png")}
        className="сorporation__flower сorporation__flower-three"
      />
      <div className="сorporation__orange-one orange blur"></div>
      <div className="сorporation__orange-two orange blur"></div>
      <div className="сorporation__orange-three orange blur"></div>
      <div className="сorporation__orange-four orange blur"></div>
      <div className="сorporation__orange-five orange blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Букеты</h1>
        <p className="сorporation__desc">поздравления для Ваших работников</p>
        <div className="corporation__info">
          <p className="corporation-marginTop">
            Если у Вас большое количество сотрудников (или не очень) и вы устали
            помнить о каждом их Дне рождении и как чем поздравить, то &nbsp;{" "}
            <span>мы можем делать это за Вас.</span>
          </p>
          <div className="corporation__text">
            <p className="corporation__info-marginLeft corporation-marginTop">
              Одним вариантом сотрудничества является предоставление нам перечня
              сотрудников с Днями их рождений и мы уже самостоятельно
              связываемся с каждым, изготавливаем букет либо композицию и
              доставляем в удобное время сотруднику либо по месту работы либо по
              месту жительства, так как в настоящее время многие сотрудники
              продолжают выполнять работу удалённо либо находятся на больничном
              или в отпуске.
            </p>
            <p className="corporation__info-marginLeft">
              Другим вариантом сотрудничества является заказ букетов
              самостоятельно представителем организации за день до нужной даты.
            </p>
            <p className="corporation__info-marginLeft">
              Так вы &nbsp;<span>экономите время</span> остальных сотрудников на
              сбор денег на поиск подарка и доставку его получателю, а также
              оберегаете себя от риска пропустить кого-либо из важных
              организации людей, а именно так Вы проявляете заботу и внимание к
              сотрудникам для того, чтобы и к делам Вашей организации они
              относились со всей внимательностью и также не пропускали важные
              дни.
            </p>
          </div>
          <p className="corporation__info-big corporation-marginTop">
            Букеты могут изготавливаться в фирменном цвете организации и есть
            возможность делать поздравления на Вашей фирменной открытке, которую
            мы можем изготовить сами.
          </p>
          <div className="bonus corporation-marginTop">
            {corporation.map((item, num) => (
              <div key={num}>
                <h3 className="text-mint">{item.title}</h3>
                <ul>
                  {item.list.map((item, num) => (
                    <li key={num}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="steps corporation-marginTop">
            <h3 className="steps__title">Этапы работы</h3>
            <ul>
              {steps.map((item, num) => (
                <li key={num}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="corporation__info-big corporation-marginTop">
            Если у Вас единичный заказ, то можете выбрать букет в каталоге либо
            заказать индивидуальный букет и указать его стоимость, а при
            оформлении заказа в корзине указать, что оплата будет производиться
            с расчётного счёта организации.
          </p>
        </div>
        <div className="corporation__form corporation-marginTop">
          <h2 className="text-mint">Заполните заявку</h2>
          <div className="corporationForm__text text">lover flower</div>
          <form className="corporationForm">
            <input
              type="text"
              placeholder="Наименование организации"
              className="input"
            />
            <input type="text" placeholder="Почтовый адрес" className="input" />
            <input
              type="text"
              placeholder="Контактное лицои"
              className="input"
            />
            <input
              type="email"
              placeholder="Адрес электронной почты"
              className="input"
            />
            <input type="tel" placeholder="Номер телефона" className="input" />
            <input
              type="text"
              placeholder="Количество букетов в месяц"
              className="input"
            />
            <Button text="Отправить" style="btn"></Button>
            <p>
              Нажимая на кнопку «Отправить», я даю свое согласие на обработку
              персональных данных, в соответствии с &nbsp;
              <a href="#" target="_blank">
                Политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
