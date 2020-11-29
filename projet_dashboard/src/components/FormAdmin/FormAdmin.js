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
      <h4> Ventes des jeux :</h4>
        <TextField required id="FIFA" label="FIFA 21" defaultValue="" />
        <TextField required id="COD" label="COD Cold War" defaultValue="" />
        <TextField required id="Spide" label="Spider-Man" defaultValue="" />
        <br />
      </div>

      <div>
      <h4> Nombre de ventes par continent :</h4>
        <TextField required id="Afrique" label="Afrique" defaultValue="" />
        <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
        <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
        <TextField required id="Europe" label="Europe" defaultValue="" />
        <TextField required id="Asie" label="Asie" defaultValue="" />
        <TextField required id="Océanie" label="Océanie" defaultValue="" />
        <br />
      </div>

      <div>
      <h4> Chiffre d'affaires de Sony :</h4>
        <TextField required id="2016" label="2016" defaultValue="" />
        <TextField required id="2017" label="2017" defaultValue="" />
        <TextField required id="2018" label="2018" defaultValue="" />
        <TextField required id="2019" label="2019" defaultValue="" />
        <TextField required id="2020" label="2020" defaultValue="" />
        <br />
      </div>
      
      <div>
      <h4> Ventes des distributeurs :</h4>
        <TextField required id="Fnac" label="Fnac" defaultValue="" />
        <TextField required id="Micromania" label="Micromania" defaultValue="" />
        <TextField required id="Auchan" label="Auchan" defaultValue="" />
        <TextField required id="Carrefour" label="Carrefour" defaultValue="" />
        <TextField required id="Leclerc" label="Leclerc" defaultValue="" />
        <TextField required id="Amazone" label="Amazone" defaultValue="" />
        <br />
      </div>
    </form>
  );
}
