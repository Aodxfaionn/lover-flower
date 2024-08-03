import "./style.css";
import { useForma } from "shared/lib";
import { Button, RadioButton } from "shared/ui";

export function Forma() {
  const { register, errors, handleSubmit } = useForma();

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
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              className="input"
              {...register("name", {
                minLength: {
                  value: 2,
                  message: "Поле не должно содержать меньше 2-х символов",
                },
                maxLength: {
                  value: 30,
                  message: "Поле не должно содержать больше 30 символов",
                },
              })}
            />
            {errors?.name && (
              <div className="form__error">{errors.name.message}</div>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Номер телефона"
              className="input"
              {...register("tel", {
                required: "Поле, обязательное для заполнения",
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: "Номер введен не корректно",
                },
              })}
            />
            {errors?.tel && (
              <div className="form__error">{errors.tel.message}</div>
            )}
          </div>
          <div>
            <textarea
              placeholder="Сообщение"
              className="textarea"
              {...register("mess", {
                minLength: {
                  value: 5,
                  message: "Поле не должно содержать меньше 5 символов",
                },
                maxLength: {
                  value: 1000,
                  message: "Поле не должно содержать больше 30 символов",
                },
              })}
            ></textarea>
            {errors?.mess && (
              <div className="form__error">{errors.mess.message}</div>
            )}
          </div>
          <Button text="Отправить" style="btn"></Button>
          <p className="successSend">Ваше сообщение успешно отправлено</p>
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
  const { register, errors, handleSubmit } = useForma();
  return (
    <div className="formCall">
      <h2 className="title-two forma__title">Заказать звонок</h2>
      <p>
        Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при каких
        обстоятельствах не будут переданы третьим лицам.
      </p>
      <form className="formCall__forma form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            className="input"
            {...register("name", {
              minLength: {
                value: 2,
                message: "Поле не должно содержать меньше 2-х символов",
              },
              maxLength: {
                value: 30,
                message: "Поле не должно содержать больше 30 символов",
              },
            })}
          />
          {errors?.name && (
            <div className="form__error">{errors.name.message}</div>
          )}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Номер телефона"
            className="input"
            {...register("tel", {
              required: "Поле, обязательное для заполнения",
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: "Номер введен не корректно",
              },
            })}
          />
          {errors?.tel && (
            <div className="form__error">{errors.tel.message}</div>
          )}
        </div>
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

export function FormaOrder() {
  const { register, errors, handleSubmit } = useForma();
  return (
    <div className="formOrder">
      <form className="formOrder__forma form" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-mint">Контактные данные</h3>
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              className="input"
              {...register("name", {
                required: "Поле, обязательное для заполнения",
                minLength: {
                  value: 2,
                  message: "Поле не должно содержать меньше 2-х символов",
                },
                maxLength: {
                  value: 30,
                  message: "Поле не должно содержать больше 30 символов",
                },
              })}
            />
            {errors?.name && (
              <div className="form__error">{errors.name.message}</div>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Номер телефона"
              className="input"
              {...register("tel", {
                required: "Поле, обязательное для заполнения",
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: "Номер введен не корректно",
                },
              })}
            />
            {errors?.tel && (
              <div className="form__error">{errors.tel.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Имя получателя"
              className="input"
              {...register("nameTwo", {
                minLength: {
                  value: 2,
                  message: "Поле не должно содержать меньше 2-х символов",
                },
                maxLength: {
                  value: 30,
                  message: "Поле не должно содержать больше 30 символов",
                },
              })}
            />
            {errors?.nameTwo && (
              <div className="form__error">{errors.nameTwo.message}</div>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Номер телефона получателя"
              className="input"
              {...register("telTwo", {
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: "Номер введен не корректно",
                },
              })}
            />
            {errors?.telTwo && (
              <div className="form__error">{errors.telTwo.message}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Комментарий к заказу"
              className="input"
            />
          </div>
        </div>
        <div>
          <h3 className="text-mint">Доставка</h3>
          <div>
            <input type="text" placeholder="Введите адрес" className="input" />
          </div>
          <h3 className="text-mint">Оплата</h3>
          <div>
            {" "}
            <RadioButton
              id="cart"
              name="pay"
              value="cart"
              text="Банковская карта"
            />
            <RadioButton id="money" name="pay" value="money" text="Наличными" />
            <RadioButton
              id="google"
              name="pay"
              value="google"
              text="Google pay"
            />
            <RadioButton
              id="score"
              name="pay"
              value="score"
              text="С расчетного счета"
            />
          </div>
        </div>
        <Button text="К оплате" style="btn"></Button>
        <p>
          Нажимая на кнопку «К Оплате», я даю свое согласие на обработку
          персональных данных, в соответствии с{" "}
          <a href="#" target="_blank">
            Политикой конфиденциальности
          </a>
          , а так же ознакомлен с условиями оплаты и доставки
        </p>
      </form>
    </div>
  );
}
