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
import Widget7 from "../../components/widget7/widget7";
import Widget8 from "../../components/widget8/widget8";
import Widget9 from "../../components/widget9/widget9";


const Home = () => {
  return(

      <GridList cellHeight='auto' cols={3} spacing={30}>
        <GridListTile cols={1}>
            <Widget2/>
        </GridListTile>

        <GridListTile cols={1}>
            <Widget3/>
        </GridListTile>

        <GridListTile cols={1}>
            <Widget4/>
        </GridListTile>

        <GridListTile cols={2}>
            <Widget1/>
        </GridListTile>

        <GridListTile cols={1}>
            <Widget5/>
        </GridListTile>

        <GridListTile cols={3}>
            <Widget6/>
        </GridListTile>

        <GridList cols={1}>
            <Widget7/>
        </GridList>

        <GridList cols={1}>
            <Widget8/>
        </GridList>

        <GridList cols={1}>
            <Widget9/>
        </GridList>


      </GridList>
  )

};

export default Home;


