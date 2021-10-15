import { useFormik, Formik } from 'formik';

//===styles
import {Button} from 'react-bootstrap';
import { TextField } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';
import s from "./SearchBar.module.css";





export default function SearchBar ({query, onSubmit, onChange}) {
  
 
    return (
        <form className={s.SearchForm} onSubmit={onSubmit}>
          <TextField  
              type="text"
              label="Search movie"
              variant="standard"
              color='primary'
              InputProps={{
                disableUnderline: true,
              }}
        
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