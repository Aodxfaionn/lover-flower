import "./style.css";

type Props = {
  onClick?: () => void;
  text: string;
  style: string;
};

export function Button({ onClick, text, style }: Props) {
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
}
