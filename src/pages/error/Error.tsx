import "./style.css";

export function Error() {
  return (
    <section className="error">
      <img
        src={require("../../assets/images/bg-img/error-blueFlower.png")}
        className="error__flower"
      />
      <div className="error__darkblue-one darkblue blur"></div>
      <div className="error__darkblue-two darkblue blur"></div>
      <div className="error__darkblue-three darkblue blur"></div>
      <h1 className="error__num">404</h1>
      <div className="error__info">
        <p>Такой страницы не существует</p>
        <a href="/" className="text-mint">На главную</a>
      </div>
      <div className="error__text text">lover flower</div>
    </section>
  );
}
