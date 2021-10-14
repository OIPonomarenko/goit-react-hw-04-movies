import s from "./SearchBar.module.css";

export default function SearchBar ({query, onSubmit, onChange}) {
    return (
        <form className={s.SearchForm} onSubmit={onSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            name="movieSearch"
            value={query}
            onChange={onChange}
            placeholder="Search movie"
          />
          <button type="submit" className={s.SearchFormButton}>
            Search
          </button>
        </form>
    )
}