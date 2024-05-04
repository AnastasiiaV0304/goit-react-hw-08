import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "../../components/SearchBox/SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const onChange = (event) => {
    dispatch(changeFilter({ inputValue: event.currentTarget.value }));
  };

  return (
    <div>
      <label className={css.searchBoxWrapp}>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={onChange}
          className={css.inputField}
          id="nameInput"
        />
      </label>
    </div>
  );
}

export default SearchBox;
