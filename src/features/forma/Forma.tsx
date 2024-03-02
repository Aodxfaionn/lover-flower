import "./style.css";
import { Button } from "shared/ui/button/Button";

export function Forma() {
  return (
    <div className="container">
      <div className="forma__top">
        <h2 className="title-two forma__title">
          Остались <span>Вопросы?</span>
        </h2>
        <p>
          Отправьте ваш вопрос, заказ, предложение или жалобу через форму
          обратной связи, и наш специалист свяжется с вами в течение 15 минут.
        </p>
      </div>
      <div className="forma__bottom">
        <p className="forma__text text">have any questions?</p>
        <form className="form">
          <input type="text" placeholder="Ваше имя" className="input" />
          <input type="tel" placeholder="Номер телефона" className="input" />
          <textarea placeholder="Сообщение" className="textarea"></textarea>
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
  );
}

export function FormaOrderCall() {
  return (
    <div className="formCall">
      <h2 className="title-two forma__title">Заказать звонок</h2>
      <p>
        Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при каких
        обстоятельствах не будут переданы третьим лицам.
      </p>
      <form className="formCall__forma form">
        <input type="text" placeholder="Ваше имя" className="input" />
        <input type="tel" placeholder="Номер телефона" className="input" />
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
  );
}
