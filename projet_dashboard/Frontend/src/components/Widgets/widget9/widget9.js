import React from "react";
import Clock from '../../Charts/Clock/Clock'
export default class Widget9 extends React.Component {



    render() {
        let date=new Date();
        date.setFullYear(2020,10,30);
        date.setHours(5,40,30,0);
        console.log(date);

        return (
            <Clock date={date}/>
        );
    }
}
