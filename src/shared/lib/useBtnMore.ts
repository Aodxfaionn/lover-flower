import { useState } from "react";
import { item } from "shared/model/types";

export const useBtnMore = (arr: any, quanityElem: number) => {
  const [quanity, setQuanity] = useState(quanityElem);
  const sliceArr = arr.slice(0, quanity);
  const loadMore = () => setQuanity(quanityElem + quanity);
  return [sliceArr, loadMore];
};