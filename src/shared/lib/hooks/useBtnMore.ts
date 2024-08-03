import { useState } from "react";
import { item } from "types/types";

export const useBtnMore = (arr: any, quanityElem: number): [item[], () => void] => {
  const [quanity, setQuanity] = useState(quanityElem);
  const sliceArr = arr.slice(0, quanity);

  const loadMore = () => setQuanity(quanityElem + quanity);
  return [sliceArr, loadMore];
};