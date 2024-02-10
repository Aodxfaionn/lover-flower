import "./style.css";
import { Button } from "shared/ui/button/Button";

export function MainForma() {
  return (
    <section className="main-forma">
      <div className="container">
        <div className="main-forma__top">
          <h2 className="title-two main-forma__title">
            Остались <span>Вопросы?</span>
          </h2>
          <p>
            Отправьте ваш вопрос, заказ, предложение или жалобу через форму
            обратной связи, и наш специалист свяжется с вами в течение 15 минут.
          </p>
        </div>
        <div className="main-forma__bottom">
          <p className="main-forma__text text">have any questions?</p>
          <form className="mainForm">
            <input type="text" placeholder="Ваше имя" className="input" />
            <input type="tel" placeholder="Номер телефона" className="input" />
            <textarea placeholder="Сообщение" className="textarea"></textarea>
            <Button text="Отправить" style="btn"></Button>
            <p>
              Нажимая на кнопку «Отправить», я даю свое согласие на обработку
              персональных данных, в соответствии с &nbsp;
              <a href="#" target="_blank">Политикой конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
      <img
        src={require("../../assets/images/bg-img/main-leaf.png")}
        className="main-forma__flower"
      />
      <div className="main-forma__pink pink"></div>
      <div className="main-forma__green green"></div>
    </section>
  );
}
