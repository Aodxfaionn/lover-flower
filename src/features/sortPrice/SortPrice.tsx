import { RadioButton } from "shared/ui/radiobutton/RadioButton";
import { setSortPice } from "shared/lib/redux/reducer/filtrSlice";
import { useAppDispatch } from "shared/lib/redux/store";

export function SortPrice() {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    dispatch(setSortPice(id));
  };

  return (
    <div>
      <h3 className="text-mint title-three">Сортировать</h3>
      <div className="sortPrice" onChange={handleSortChange}>
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
