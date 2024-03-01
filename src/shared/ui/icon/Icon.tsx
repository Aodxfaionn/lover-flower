import React from "react";
import  "./style.css";

export type IconType =
  | "cart"
  | "inst"
  | "whatsapp"
  | "phone"
  | "mobule"
  | "prev"
  | "next"
  | "logo";

export type Props = {
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  link?: string;
  type: IconType;
};

export function Icon({ onClick, link, type }: Props) {
  if (link) {
    return (
      <a href={`${link}`}>
        <img
          src={require(`./icons/${type}.svg`)}
          alt="icon"
          onClick={onClick}
          className="icon"
        />
      </a>
    );
  } else {
    return (
      <img src={require(`./icons/${type}.svg`)} alt="icon" onClick={onClick} className="icon" />
    );
  }
}
