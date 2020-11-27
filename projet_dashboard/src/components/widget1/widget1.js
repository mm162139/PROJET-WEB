import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Widget1 extends Component{
  state = {
      sellsCountry: [
        {value: "Europe", nbr: 2000},
        {value: "USA", nbr: 2200},
        {value: "Asia", nbr: 1600},
        {value: "Africa", nbr: 900}

      ], 

      sellsGames: [
        {value: "SpiderMan", nbr: 230},
        {value: "COD", nbr: 1200},
        {value: "Fifa 21", nbr: 2000},

      ]
    };

    render () {

      let{sellsCountry, sellsGames} = this.state;
  
      return(
        <div class= "widget1Sells"> 
          <ProgressBar
            sells={sellsGames}
            class="sellsDisplay"
            title="Sells"

          />

          {/*<ProgressBar */}

          {/*  sells={sellsGames}*/}
          {/*  title="Games Sells"*/}
          {/*  class="GamesSellsDisplay"*/}

          {/*/>*/}

          
        </div>
        );
}

}




export default Widget1;