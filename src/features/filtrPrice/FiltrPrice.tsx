import "./style.css";
import { Input } from "shared/ui/input/Input";

export function FiltrPrice({ handlePriceRangeChange }: any) {
  return (
    <div>
      <h3 className="text-mint title-three">Стоимость</h3>
      <div className="filtrPrice" onClick={handlePriceRangeChange}>
        <Input
          type="number"
          id="minPrice"
          text="От"
          onChange={handlePriceRangeChange}
        />
        <Input
          type="number"
          id="maxPrice"
          text="До"
          onChange={handlePriceRangeChange}
        />
      </div>
    </div>
  );
}
