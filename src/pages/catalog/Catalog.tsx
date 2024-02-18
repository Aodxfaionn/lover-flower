import "./style.css";
import { catalog } from "shared/model/arr";
import { Card } from "shared/ui";
import { Button } from "shared/ui";
import { Breadcrumbs } from "shared/ui";
import { Pagination } from "shared/ui";
import { usePagination } from "shared/lib/usePagination";

type catalogArr = {
  img: string;
  id: number;
  title: string;
  price: number;
  mark: string;
};

export function Catalog() {
  const pagination = usePagination(15, catalog);
  const arrPaths = [{ namePage: "Каталог букетов" }];
  return (
    <div className="catalog">
      <div className="container">
        <Breadcrumbs arr={arrPaths} />
        <h1 className="inner__title-one">Каталог букетов</h1>
        <div className="catalog__list">
          {pagination.curArr.map((item: catalogArr, num: number) => (
            <Card
              id={num}
              key={num}
              styles="card"
              image={item.img}
              title={item.title}
            >
              {item.mark == "new" && <div className="mark new">New</div>}
              {item.mark == "sale" && <div className="mark sale">sale</div>}
              <p>{item.price} ₽</p>
              <Button style="btn-opacity" text="В корзину"></Button>
            </Card>
          ))}
        </div>
        <Pagination
          curPage={pagination.quan}
          lengthArr={catalog.length}
          paginate={pagination.paginate}
          activePage={pagination.curPage}
        />
      </div>
      <img
        src={require("../../assets/images/bg-img/catalog-redFlower-left.png")}
        className="catalog__flower catalog__flower-one"
      />
      <img
        src={require("../../assets/images/bg-img/catalog-redFlower-right.png")}
        className="catalog__flower catalog__flower-two"
      />
      <div className="catalog__green-one green blur"></div>
      <div className="catalog__green-two green blur"></div>
      <div className="catalog__green-three green blur"></div>
      <div className="catalog__pink-one pink blur"></div>
      <div className="catalog__pink-two pink blur"></div>
      <div className="catalog__pink-three pink blur"></div>
      <div className="catalog__pink-four pink blur"></div>
    </div>
  );
}
