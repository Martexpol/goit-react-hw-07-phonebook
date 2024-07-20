import styles from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
