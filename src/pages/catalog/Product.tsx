import "./style.css";
import { Breadcrumbs } from "shared/ui";

export function Product() {
  const arrPaths = [{ namePage: "Каталог букетов" }];

  return (
    <div className="catalog">
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Букет</h1>
      </div>
    </div>
  );
}
