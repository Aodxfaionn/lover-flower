import "./style.css";
import { Input } from "shared/ui/input/Input";
import { setFiltrPriceMin, setFiltrPriceMax } from "shared/lib/redux/reducer/filtrSlice";
import { useDispatch } from "react-redux";
import { useDebounce } from "shared/lib/hooks/useDebounce";

export function FiltrPrice() {
  const dispatch = useDispatch();
  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    let valueNum = Number(value);
    if(id == 'minPrice') dispatch(setFiltrPriceMin({[id]: valueNum}));
    if(id == 'maxPrice') dispatch(setFiltrPriceMax({[id]: valueNum}));
  };

  const debounceHandlePriceRangeChange = useDebounce(handlePriceRangeChange, 700)
  
  return (
    <div>
      <h3 className="text-mint title-three">Стоимость</h3>
      <div className="filtrPrice" onChange={debounceHandlePriceRangeChange}>
        <Input
          type="text"
          id="minPrice"
          text="От"
        />
        <Input
          type="text"
          id="maxPrice"
          text="До"
        />
      </div>
    </div>
  );
}
