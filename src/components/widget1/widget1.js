import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Widget1 extends Component{
  state = { 


    };

    render () {

      let{sellsGames} = this.state;
  
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