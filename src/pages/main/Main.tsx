import React, { useState } from "react";
import "./style.css";
import { MainSection } from "features/mainSection/MainSection";
import { MainCatalog } from "features/mainCatalog/MainCatalog";
import { MainPopular } from "features/mainPopular/MainPopular";
import { MainOrder } from "features/mainOrder/MainOrder";
import { MainSpecial } from "features/mainSpecial/MainSpecial";
import { MainForma } from "features/mainForma/MainForma";
import { MainSocial } from "features/mainSocial/MainSocial";

export function Main() {
  return (
    <main>
      <MainSection />
      <MainCatalog />
      <MainPopular />
      <MainOrder />
      <MainSpecial />
      <MainForma />
      <MainSocial />
    </main>
  );
}
