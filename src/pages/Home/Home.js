import React from 'react';
import "./home.css"
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Widget2 from "../../components/widget2/widget2";
import Widget5 from "../../components/widget5/widget5";
import Widget4 from "../../components/widget4/widget4";
import Widget3 from "../../components/widget3/widget3";
import Widget1 from "../../components/widget1/widget1";
import Widget6 from "../../components/widget6/widget6";
import Widget9 from "../../components/widget9/widget9";

const Home = () => {
  return(
    <div class="header">
      <div class="overlay"></div>
      <GridList cellHeight='auto' cols={3} spacing={20}>
        <GridListTile cols={1}>
            <p>Chiffre d'affaire Sony par annnée et par région: </p>
            <Widget2/>
        </GridListTile>

        <GridListTile cols={1}>
            <p>Age des utilisateurs: </p>
            <Widget3/>
        </GridListTile>

        <GridListTile cols={1}>
        <p>Reseller de produit Sony en nombre de vente: </p>
            <Widget4/>
        </GridListTile>

        <GridListTile cols={2}>
            <Widget1/>
        </GridListTile>

        <GridListTile cols={1}>
        <p>Nombre de compte PSN: </p>
            <Widget9/>
        </GridListTile>

        <GridListTile cols={3}>
            <Widget6/>
        </GridListTile>

      </GridList>
    </div>
  )

};

export default Home;


