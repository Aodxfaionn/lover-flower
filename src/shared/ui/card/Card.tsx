import  "./style.css"
import { Link } from "react-router-dom";

type Props = {
  id: any;
  image: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  styles: string;
};

export function Card({ image, title, children, onClick, id, styles }: Props) {
  return (
    <div className={styles} onClick={onClick} key={id} id={id} >
      <Link to={`/catalog/${id}`}>
        <img src={image}></img>
      </Link>
      <div className={`${styles}__text`}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
