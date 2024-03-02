import { useState } from "react";

interface PriceRange {
  minPrice: number;
  maxPrice: number;
}

const SORT_BY_UP_PRICE = "upPrice";
const SORT_BY_DOWN_PRICE = "downPrice";

export const useFiltr = (arr: any) => {
  const [sort, setSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({
    minPrice: 0,
    maxPrice: Infinity,
  });

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.closest("input")) setSort(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedCategory((prevCategories) => {
      if (checked) return [...prevCategories, value];
      else return prevCategories.filter((category) => category !== value);
    });
  };

  const debouncedPriceRangeChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;
      setPriceRange((prevRange) => ({ ...prevRange, [id]: value }));
    },
    1000
  );

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    debouncedPriceRangeChange(event);
  };

  const filteredList = arr
    .filter((item: any) => {
      return (
        priceRange.minPrice <= item.price &&
        item.price <= priceRange.maxPrice &&
        (selectedCategory.length === 0 || selectedCategory.includes(item.mark))
      );
    })
    .sort((a: any, b: any) => {
      if (sort === SORT_BY_UP_PRICE) return a.price - b.price;
      if (sort === SORT_BY_DOWN_PRICE) return b.price - a.price;
      return 0;
    });

  const resetFilters = () => {
    setSort("");
    setPriceRange({ minPrice: 0, maxPrice: Infinity });
    setSelectedCategory([]);
    const inputElements = document.querySelectorAll('input[type="number"]');
    inputElements.forEach((input) => (input as HTMLInputElement).value = '');
    const radioElements = document.querySelectorAll('input[type="radio"]');
    radioElements.forEach((radio) => (radio as HTMLInputElement).checked = false);
  };

  return [
    handleSortChange,
    handleCategoryChange,
    handlePriceRangeChange,
    resetFilters,
    filteredList,
  ];
};
