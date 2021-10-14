import { makeStyles } from '@mui/material';



export const useStyles = makeStyles(theme => ({
    root: {
      
      backgroundColor: "orange",
      
      "& input::placeholder": {
        color: "primary"
      }
    },
    
  }));

  