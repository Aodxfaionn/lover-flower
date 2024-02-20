import "./style.css";

type Props = {
  id: string;
  name: string;
  value: string;
  text: string;
  onChange?: () => void;
};

export function RadioButton({ id, name, value, text, onChange }: Props) {
  return (
    <div className="radioBtn">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
