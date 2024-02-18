import "./style.css";
import { Icon } from "shared/ui/icon/Icon";

export function MainSocial() {
  return (
    <section className="main-social">
      <div className="container">
        <img
          src={require("../../assets/images/sections/main-social1.jpg")}
          alt="Наша работа"
        />
        <img
          src={require("../../assets/images/sections/main-social2.jpg")}
          alt="Наша работа"
        />{" "}
        <img
          src={require("../../assets/images/sections/main-social3.jpg")}
          alt="Наша работа"
        />{" "}
        <img
          src={require("../../assets/images/sections/main-social4.jpg")}
          alt="Наша работа"
        />
        <div className="main-social__list">
          <p>our social networks</p>
          <div>
            <Icon type="inst" link="/" />
            <Icon type="whatsapp" link="/" />
            <Icon type="phone" link="/" />
          </div>
        </div>
      </div>
      <div className="main-social__pink pink blur"></div>
      <div className="main-social__green-one green blur"></div>
      <div className="main-social__green-two green blur"></div>
      <p className="main-social__text title-big">Social</p>
    </section>
  );
}
