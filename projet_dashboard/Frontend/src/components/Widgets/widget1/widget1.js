import React, { Component } from 'react';
import ProgressBar from '../../Charts/ProgressBar/ProgressBar';

class Widget1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sellsGames: [
                {value: "SpiderMan", Nombre: 700},
                {value: "COD Cold War", Nombre: 1200},
                {value: "Fifa 21", Nombre: 2000},
                {value: "Cyberpunk", Nombre: 1800},
                {value: "Demon Souls", Nombre: 1700},
                {value: "Assassin's Creed", Nombre: 1500},


            ]
        };
    }


    render () {

        return(
            <div>
                <ProgressBar
                    sells={this.state.sellsGames}
                    title="Sells"

                />

            </div>
        );
    }

}




export default Widget1;