import { useState } from "react";

export const useBtnMore = (arr: any, quanityElem: number) => {
  const [quanity, setQuanity] = useState(quanityElem);
  const sliceArr = arr.slice(0, quanity);
  const loadMore = () => setQuanity(quanityElem + quanity);
  return [sliceArr, loadMore];
};