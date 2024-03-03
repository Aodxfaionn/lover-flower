import "./style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "shared/ui/button/Button";

interface Fields {
  name: string;
  tel: string | number;
  mess: string;
}

export function Forma() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Fields>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
    reset();
  };

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
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                  value: /^\d{11}$/,
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
