import { RadioButton } from "shared/ui/radiobutton/RadioButton";

export function SortPrice({ handleSortChange }: any) {
  return (
    <div>
      <h3 className="text-mint title-three">Сортировать</h3>
      <div className="sortPrice" onClick={handleSortChange}>
        <RadioButton
          id="upPrice"
          name="sortList"
          value="upPrice"
          text="По возрастанию цены"
        />
        <RadioButton
          id="downPrice"
          name="sortList"
          value="downPrice"
          text="По убыванию цены"
        />
      </div>
    </div>
  );
}
