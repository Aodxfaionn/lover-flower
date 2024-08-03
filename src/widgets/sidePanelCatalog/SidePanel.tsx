import "./style.css";
import { Button } from "shared/ui";
import { SortPrice } from "features/sortPrice/SortPrice";
import { FiltrCategory } from "features/filtrCategory/FiltrCategory";
import { FiltrPrice } from "features/filtrPrice/FiltrPrice";

interface SidePanelProps {
  // resetFilters: () => void;
  resetFilters: any;
}

export function SidePanel({ resetFilters }: SidePanelProps) {
  return (
    <div className="catalogFiltr filter">
      <SortPrice />
      <FiltrCategory />
      <FiltrPrice />
      <Button
        text="Сбросить фильтры"
        style="btn catalogFiltr__btn"
        onClick={resetFilters}
      />
    </div>
  );
}
