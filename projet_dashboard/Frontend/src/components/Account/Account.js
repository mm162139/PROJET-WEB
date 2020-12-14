import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '2016', PSN: 1890,
    },
    {
        name: '2017', PSN: 2450,
    },
    {
        name: '2018', PSN: 2700,
    },
    {
        name: '2019', PSN: 3200,
    },
    {
        name: '2020', PSN: 4000,
    },
];

export default class Account extends PureComponent {


    render() {
        return (
            <ResponsiveContainer width="100%" height={300} >
            <AreaChart
                height={350}
                data={data}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="PSN" stroke="black" fill="#FFF300" />
            </AreaChart>
            </ResponsiveContainer>
        );
    }
}