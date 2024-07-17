import {ButtonApp} from "@/components/ui/Button/ButtonApp.jsx";
import SortTableStyle from "./SortTable.module.scss"

export function SortTable({ onSortChange }) {
    return (
      <div className={SortTableStyle['sort']}>
          <ButtonApp onClick={() => onSortChange('unsorted')} text={"По умолчанию"}></ButtonApp>
          <ButtonApp onClick={() => onSortChange('increasing')} text={"По возрастанию (Возраст)"}></ButtonApp>
          <ButtonApp onClick={() => onSortChange('descending')} text={"По убыванию (Возраст)"}></ButtonApp>
          <ButtonApp onClick={() => onSortChange('male')} text={"По полу (Мужчины)"}></ButtonApp>
          <ButtonApp onClick={() => onSortChange('female')} text={"По полу (Женщины)"}></ButtonApp>
      </div>
    );
}