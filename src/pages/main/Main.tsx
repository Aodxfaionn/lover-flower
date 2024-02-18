import React, { useState } from "react";
import "./style.css";
import { MainSection } from "entities/mainSection/MainSection";
import { MainCatalog } from "entities/mainCatalog/MainCatalog";
import { MainPopular } from "entities/mainPopular/MainPopular";
import { MainOrder } from "entities/mainOrder/MainOrder";
import { MainSpecial } from "entities/mainSpecial/MainSpecial";
import { Forma } from "features/forma/Forma";
import { MainSocial } from "entities/mainSocial/MainSocial";

export function Main() {
  return (
    <main>
      <MainSection />
      <MainCatalog />
      <MainPopular />
      <MainOrder />
      <MainSpecial />
      <section className="main-forma">
        <Forma />
        <img
          src={require("../../assets/images/bg-img/main-leaf.png")}
          className="main-forma__flower"
        />
        <div className="main-forma__pink pink blur"></div>
        <div className="main-forma__green green blur"></div>
      </section>
      <MainSocial />
    </main>
  );
}
