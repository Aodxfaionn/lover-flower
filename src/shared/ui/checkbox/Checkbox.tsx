import "./style.css";

type Props = {
  id: string,
  name: string,
  value: string,
  text: string,
  onChange: () => void;
}

export function Checkbox({ id, name, value, text, onChange }: Props) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={value} name={name} onChange={onChange} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
