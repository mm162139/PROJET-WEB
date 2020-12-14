import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BoutonAdmin from "../BoutonAdmin/BoutonAdmin";


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
                <h3> Widget 1:</h3>
                <h4> Chiffre d'affaires par continent :</h4>
                <h5> 2016 :</h5>

                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>

                <h5> 2017 :</h5>

                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>

                <h5> 2018 :</h5>

                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>

                <h5> 2019 :</h5>

                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>

                <h5> 2020 :</h5>

                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>

            <div>
                <h3> Widget 2 :</h3>
                <h4> Tâches / Objectifs :</h4>
                <TextField required id="Obj" label="Objectif de la semaine" defaultValue="" />
                <TextField required id="Task1" label="TASK 1" defaultValue="" />
                <TextField required id="Task2" label="TASK 2" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>


            <div>
                <h3> Widget 3 :</h3>
                <h4> Compteur nouveaux stocks :</h4>

                <TextField required id="jours" label="jours" defaultValue="" />
                <TextField required id="Heures" label="Heures" defaultValue="" />
                <TextField required id="Minutes" label="Minutes" defaultValue="" />
                <TextField required id="Secondes" label="Secondes" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>




            <div>
                <h3> Widget 5 :</h3>
                <h4> Nombre de ventes par continent cette année :</h4>
                <TextField required id="Afrique" label="Afrique" defaultValue="" />
                <TextField required id="Amerique-N" label="Amerique du Nord" defaultValue="" />
                <TextField required id="Amerique-S" label="Amerique du Sud" defaultValue="" />
                <TextField required id="Europe" label="Europe" defaultValue="" />
                <TextField required id="Asie" label="Asie" defaultValue="" />
                <TextField required id="Océanie" label="Océanie" defaultValue="" />
                <BoutonAdmin/>
            </div>

            <div>
                <h3> Widget 6 :</h3>
                <h4> Stocks PS5 :</h4>
                <TextField required id="Novembre" label="Novembre" defaultValue="" />
                <TextField required id="Décembre" label="Décembre" defaultValue="" />
                <TextField required id="Janvier" label="Janvier" defaultValue="" />
                <TextField required id="Février" label="Février" defaultValue="" />
                <TextField required id="Mars" label="Mars" defaultValue="" />
                <TextField required id="Avril" label="Avril" defaultValue="" />
                <TextField required id="Mai" label="Mai" defaultValue="" />
                <BoutonAdmin/>
                <h4> Ventes PS5 :</h4>
                <TextField required id="Novembre" label="Novembre" defaultValue="" />
                <TextField required id="Décembre" label="Décembre" defaultValue="" />
                <TextField required id="Janvier" label="Janvier" defaultValue="" />
                <TextField required id="Février" label="Février" defaultValue="" />
                <TextField required id="Mars" label="Mars" defaultValue="" />
                <TextField required id="Avril" label="Avril" defaultValue="" />
                <TextField required id="Mai" label="Mai" defaultValue="" />
                <BoutonAdmin/>z
                <br />
            </div>

            <div>
                <h3> Widget 7 :</h3>
                <h4> Nombre de comptes PSN :</h4>
                <TextField required id="2016" label="2016" defaultValue="" />
                <TextField required id="2017" label="2017" defaultValue="" />
                <TextField required id="2018" label="2018" defaultValue="" />
                <TextField required id="2019" label="2019" defaultValue="" />
                <TextField required id="2020" label="2020" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>

            <div>
                <h3> Widget 8 :</h3>
                <h4> Tranches d'age des utilisateurs</h4>
                <TextField required id="18-24" label="18-24" defaultValue="" />
                <TextField required id="25-29" label="25-29" defaultValue="" />
                <TextField required id="30-34" label="30-34" defaultValue="" />
                <TextField required id="35-39" label="35-39" defaultValue="" />
                <TextField required id="40-49" label="40-49" defaultValue="" />
                <TextField required id="50+" label="50+" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>

            <div>
                <h3> Widget 9 :</h3>
                <h4> Ventes des distributeurs :</h4>
                <TextField required id="Fnac" label="Fnac" defaultValue="" />
                <TextField required id="Micromania" label="Micromania" defaultValue="" />
                <TextField required id="Auchan" label="Auchan" defaultValue="" />
                <TextField required id="Carrefour" label="Carrefour" defaultValue="" />
                <TextField required id="Leclerc" label="Leclerc" defaultValue="" />
                <TextField required id="Amazone" label="Amazone" defaultValue="" />
                <BoutonAdmin/>
                <br />
            </div>

        </form>
    );
}