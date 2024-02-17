import "./style.css";
import { faq } from "shared/model/arr";
import { Breadcrumbs } from "shared/ui";
import { Accordeon } from "shared/ui";

export function Faq() {
  const arrPaths = [
    {
      namePage: "FAQ",
    },
  ];
  return (
    <section className="faq">
      <img
        src={require("../../assets/images/bg-img/faq-blueFlower-left.png")}
        className="faq__flower faq__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/faq-blueFlower-right.png")}
        className="faq__flower faq__flower-two"
      />
      <div className="faq__blue-one blue blur"></div>
      <div className="faq__blue-two blue blur"></div>
      <div className="faq__blue-three blue blur"></div>
      <div className="faq__blue-four blue blur"></div>
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">FAQ</h1>
        <Accordeon arr={faq} />
      </div>
    </section>
  );
}
