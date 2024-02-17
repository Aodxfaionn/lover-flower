import "./style.css";
import { useState } from "react";

type Props = {
  arr: arr[];
};

type arr = {
  question: string;
  answer: string;
  id: number;
};

export function Accordeon({ arr }: Props) {
  const [openId, setOpenId] = useState(0);
  const openText = (id: number) =>
    id === openId ? setOpenId(0) : setOpenId(id);
  return (
    <div className="accordeon">
      {arr.map((item) => (
        <div className="question" key={item.id}>
          <div className="question__head" onClick={() => openText(item.id)}>
            <h3 className="question__question">{item.question}</h3>
            <svg
              className={`question__arrow ${
                item.id == openId ? "down" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
            </svg>
            
          </div>
          <div
            className={`question__text ${item.id == openId ? "open" : ""}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
