import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="Spider-Man" label="Widget 1 / Ventes jeux PS5" defaultValue="Spider-Man" />
        <TextField required id="COD" label=" " defaultValue="COD Cold War" />
        <TextField required id="FIFA" label=" " defaultValue="FIFA 21" />
      </div>

      <div>
        <TextField required id="Afrique" label="Widget 2 / Ventes PS5" defaultValue="Afrique" />
        <TextField required id="Amerique-N" label=" " defaultValue="Amerique du Nord" />
        <TextField required id="Amerique-S" label=" " defaultValue="Amerique du Sud" />
        <TextField required id="Europe" label=" " defaultValue="Europe" />
        <TextField required id="Asie" label=" " defaultValue="Asie" />
      </div>

      <div>
        <TextField required id="2016" label="Widget 3 / CA de Sony" defaultValue="2016" />
        <TextField required id="2017" label=" " defaultValue="2017" />
        <TextField required id="2018" label=" " defaultValue="2018" />
        <TextField required id="2019" label=" " defaultValue="2019" />
        <TextField required id="2020" label=" " defaultValue="2020" />
      </div>
      
    </form>
  );
}
