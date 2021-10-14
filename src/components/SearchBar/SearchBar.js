import { useFormik, Formik } from 'formik';

//===styles
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./SearchBar.module.css";
import { useStyles } from './StyledInput';


export default function SearchBar ({query, onSubmit, onChange}) {
    const classes = useStyles();

    return (
        <form className={s.SearchForm} onSubmit={onSubmit}>
          <TextField 
              classes 
              type="text"
              label="Search movie"
              variant="standard"
              color="primary"
          />

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