import "./style.css";
import { LinkTo } from "../link/Link";

type Props = {
  arr: Array<arrBreadcrumbs>;
};

type arrBreadcrumbs = {
  namePage: string;
  linkPage?: string;
};

export function Breadcrumbs({ arr }: Props) {
  return (
    <div className="breadcrumbs">
      <LinkTo href="/" styles="link-white" text="Главная" /> &nbsp; / &nbsp;
      {arr.map((item, num) =>
        item.linkPage ? (
          <LinkTo
            href={item.linkPage}
            styles="link-white"
            text={item.namePage}
            key={num}
          />
        ) : (
          <p key={num}>{item.namePage}</p>
        )
      )}
    </div>
  );
}
