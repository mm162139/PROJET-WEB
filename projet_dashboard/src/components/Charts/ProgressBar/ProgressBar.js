import React, {PureComponent} from 'react';
import {CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer} from "recharts";

export default class ProgressBar extends PureComponent   {

    constructor(props) {
        super(props);
        this.state={clientHeight:0,clientWidth:0};
    }

    render()
        {
            return (

                <ResponsiveContainer width="100%" height={300} >
                    <BarChart data={this.props.sells}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="value"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="Nombre" fill="#002EF9"/>
                    </BarChart>
                </ResponsiveContainer>

            );
        }


};
