import  "./style.css"
import { Link } from "react-router-dom";

type Props = {
  href: string;
  text: string;
  styles: string;
};

export function LinkTo({ href, text, styles }: Props) {
  return <Link to={`/${href}`} className={`noline ${styles}`}>{text}</Link>;
}
