import { useEffect } from "react";

export const useBtnClose = (setActive: Function) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === 27) setActive(false);
      setActive(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setActive]);
};
