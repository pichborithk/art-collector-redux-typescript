import { SelectProps } from '../types/types';

const Select = ({ name, category, categoryList, setCategory }: SelectProps) => {
  return (
    <fieldset>
      <label htmlFor={`select-${name}`}>
        {name}
        <span className={`${name}-count`}>({categoryList.length})</span>
      </label>
      <select
        name={name}
        id={`select-${name}`}
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value='any'>Any</option>
        {categoryList.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default Select;
