import React from 'react';
import "./home.css"
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Widget2 from "../../components/Widgets/widget2/widget2";
import Widget5 from "../../components/Widgets/widget5/widget5";
import Widget4 from "../../components/Widgets/widget4/widget4";
import Widget3 from "../../components/Widgets/widget3/widget3";
import Widget1 from "../../components/Widgets/widget1/widget1";
import Widget6 from "../../components/Widgets/widget6/widget6";
import Widget7 from "../../components/Widgets/widget7/widget7";
import Widget8 from "../../components/Widgets/widget8/widget8";
import Widget9 from "../../components/Widgets/widget9/widget9";
import Widget10 from "../../components/Widgets/widget10/Widget10";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WidgetList from "../../components/widgets-list.component";
import EditWidget from "../../components/edit-widget.component";

const Home = () => {
  return(

      <div class="Header">
      <GridList id={"grid"} cellHeight='auto' cols={3} spacing={30}>
        <GridListTile cols={1}>
            <h3><u>Evolution du Chiffre d'affaires dans chaque continent au fil des années</u></h3>
            <Widget2/>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Les différentes tâches à réaliser dans la journée</u></h3>
            <Widget10/>
            <Widget4/>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Décompte des prochains Stock Disponible</u></h3>
            <Widget9/>
        </GridListTile>

        <GridListTile cols={2}>
            <h3><u>Nombre de ventes des principaux jeux ps5</u></h3>
            <Widget1/>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Le nombre de ventes par continents cette année</u></h3>
            <Widget5/>
        </GridListTile>

        <GridListTile cols={3}>
            <Router>
                <Route path="/" component ={WidgetList}/>
            </Router>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Evolution du nombre de comptes PSN par année</u></h3>
            <Widget8/>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Influence de la console à différents âges d'utilisateur</u></h3>
            <Widget3/>
        </GridListTile>

        <GridListTile cols={1}>
            <h3><u>Influence des différents distributeurs sur le marché de Sony</u></h3>
            <Widget7/>
        </GridListTile>


          <div id="footer" cols={3}>
              Copyright &copy; 2020, Hyseni Lindrit, Popielski Thomas, Menard Maxence
          </div>

      </GridList>
      </div>


  )

};

export default Home;


