import React, { useState } from "react";
import "./style.css";
import { MainSection } from "features/mainSection/MainSection";
import { MainCatalog } from "features/mainCatalog/MainCatalog";
import { MainPopular } from "features/mainPopular/MainPopular";
import { MainOrder } from "features/mainOrder/MainOrder";
import { MainSpecial } from "features/mainSpecial/MainSpecial";
import { Forma } from "features/forma/Forma";
import { MainSocial } from "features/mainSocial/MainSocial";

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
