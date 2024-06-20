import "./style.css";

type Props = {
  id: string;
  text: string;
  type: string;
  onChange?: () => void;
};

export function Input({ id, text, type, onChange }: Props) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={onChange} className="input" />
    </div>
  );
}
