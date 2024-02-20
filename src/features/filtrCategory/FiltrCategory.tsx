import { RadioButton } from "shared/ui/radiobutton/RadioButton";

export function FiltrCategory({ handleCategoryChange }: any) {
  return (
    <div>
      <h3 className="text-mint title-three">Категория</h3>
      <div className="filtrCategory" onClick={handleCategoryChange}>
        <RadioButton
          id="new"
          name="category"
          value="new"
          text="Новинка"
          onChange={handleCategoryChange}
        />
        <RadioButton
          id="hit"
          name="category"
          value="hit"
          text="Популярное"
          onChange={handleCategoryChange}
        />
        <RadioButton
          id="sale"
          name="category"
          value="sale"
          text="Распродажа"
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
}
