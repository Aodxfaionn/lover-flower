import "./style.css";
import { contacts } from "shared/model/arr";
import { Breadcrumbs } from "shared/ui";
import { Forma } from "features/forma/Forma";

export function Contacts() {
  const arrPaths = [
    {
      namePage: "Контакты",
    },
  ];
  return (
    <section className="contacts">
      <img
        src={require("../../assets/images/bg-img/contact-redFlower-left.png")}
        className="contacts__flower contacts__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/contact-redFlower-right.png")}
        className="contacts__flower contacts__flower-two"
      />
      <div className="contacts__red-one red blur"></div>
      <div className="contacts__red-two red blur"></div>
      <div className="contacts__red-three red blur"></div>
      <div className="contacts__red-four red blur"></div>
      <div className="contacts__red-five red blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Контакты</h1>
        <ul className="contactsList">
          {contacts.map((item, num) => (
            <li className="contactsList__item" key={num}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
        <Forma />
      </div>
    </section>
  );
}
