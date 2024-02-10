import React from "react";
import "./style.css";
import { Navigation } from "shared/ui/navigation/Navigation";
import { Icon } from "shared/ui/icon/Icon";

function Footer() {
  return (
    <div className="footer container">
      <div className="footer__top">
        <Icon type="logo" link="/" />
        <div className="footer__nav">
          <Navigation />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__rekvisit">
          <h4 className="text-mint title-four">реквизиты</h4>
          <p>
            ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
            Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
            BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
            Минск, улица Толстого
          </p>
        </div>
        <div className="footer__info">
          <div className="footer__contacts">
            <a
              href="mailto:zakaz@loverflower.by"
              className="text-mint footer-mintText"
            >
              zakaz@loverflower.by
            </a>
            <p>Доставка 24/7 по договоренности с оператором</p>
          </div>
          <div className="footer__adress">
            <p className="text-mint footer-mintText">ул. Тимирязева 67</p>
            <p>10:00 до 21:00 без выходных</p>
          </div>
          <div className="footer__tel">
            <a href="tel:+375 (29) 113-69-69" className="text-mint footer-mintText">
              +375 (29) 113-69-69
            </a>
            <p>прием звонков круглосуточно</p>
          </div>
          <div className="footer__social">
            <Icon type="inst" link="/" />
            <Icon type="whatsapp" link="/" />
            <Icon type="phone" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
