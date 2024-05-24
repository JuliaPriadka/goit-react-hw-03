import css from '../SearchBox/searchbox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchboxWrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        className={css.searchbox}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
