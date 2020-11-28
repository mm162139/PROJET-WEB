import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Widget1 extends Component{
    state = {
        sellsGames: [
            {value: "SpiderMan", nbr: 230},
            {value: "COD", nbr: 1200},
            {value: "Fifa 21", nbr: 2000},

        ]
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

            </div>
        );
    }

}




export default Widget1;