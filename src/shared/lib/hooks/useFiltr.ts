import { item } from "types/types";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortPice, setFiltrPriceMin, setFiltrPriceMax } from "../redux/reducer/filtrSlice";
import { RootState } from "../redux/store";

const SORT_BY_UP_PRICE = "upPrice";
const SORT_BY_DOWN_PRICE = "downPrice"; 

export const useFiltr = (arr: item[]) => {
  const dispatch = useDispatch();
  let category = useSelector((state: RootState) => state.filter.category);
  let sortPrice = useSelector((state: RootState) => state.filter.sortPrice);
  let filtrPriceMin = useSelector(
    (state: any) => state.filter.filtrPriceMin
  ) || { minPrice: 0 };
  const filtrPriceMax = useSelector(
    (state: any) => state.filter.filtrPriceMax
  ) || { maxPrice: 10000000 };

  const filteredList = arr
    .filter((item: item) => {
      return (
        filtrPriceMin.minPrice <= item.price &&
        item.price <= filtrPriceMax.maxPrice &&
        (category == "" || category == item.mark)
      );
    })
    .sort((a: item, b: item) => {
      if (sortPrice === SORT_BY_UP_PRICE) return a.price - b.price;
      if (sortPrice === SORT_BY_DOWN_PRICE) return b.price - a.price;
      return 0;
    });
  const resetFilters = () => {
    const inputElements = document.querySelectorAll('input[type="number"]'),
      radioElements = document.querySelectorAll('input[type="radio"]');
    inputElements.forEach((input) => ((input as HTMLInputElement).value = ""));
    radioElements.forEach(
      (radio) => ((radio as HTMLInputElement).checked = false)
    );
    dispatch(setCategory(''));
    dispatch(setSortPice(''));
    dispatch(setFiltrPriceMin(0));
    dispatch(setFiltrPriceMax(0));
  };

  return [filteredList, resetFilters];
};
