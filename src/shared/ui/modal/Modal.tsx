import "./style.css";
import { useBtnClose } from "shared/lib";

export type Props = {
  active: boolean;
  setActive(arg0: boolean): void;
  children: React.ReactElement;
};

export function Modal({ active, setActive, children }: Props) {
  useBtnClose(setActive);
  return (
    <div
      className={active ? "modal open" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="modal__green green blur"></div>
        <div className="modal__pink pink blur"></div>
      </div>
    </div>
  );
}
