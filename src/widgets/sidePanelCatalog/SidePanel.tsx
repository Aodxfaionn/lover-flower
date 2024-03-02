import "./style.css";
import { Button } from "shared/ui";
import { SortPrice } from "features/sortPrice/SortPrice";
import { FiltrCategory } from "features/filtrCategory/FiltrCategory";
import { FiltrPrice } from "features/filtrPrice/FiltrPrice";

export function SidePanel({
  handleSortChange,
  handleCategoryChange,
  handlePriceRangeChange,
  resetFilters,
}: any) {
  return (
    <div className="catalogFiltr filter">
      <SortPrice handleSortChange={handleSortChange} />
      <FiltrCategory handleCategoryChange={handleCategoryChange} />
      <FiltrPrice handlePriceRangeChange={handlePriceRangeChange} />
      <Button
        text="Сбросить фильтры"
        style="btn catalogFiltr__btn"
        onClick={resetFilters}
      />
    </div>
  );
}
