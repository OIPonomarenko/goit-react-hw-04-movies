import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Button   type="submit" 
                    variant="outline-secondary" 
                    className='mr-2 '>Search
          </Button>
        </form>
    )
}