import React, { PureComponent } from 'react';
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {
        name: '-18', uv: 31.47, pv: 2400, fill: '#0088FE',
    },
    {
        name: '18-24', uv: 26.69, pv: 4567, fill: '#00C49F',
    },
    {
        name: '25-29', uv: 15.69, pv: 1398, fill: '#FFBB28',
    },
    {
        name: '30-34', uv: 8.22, pv: 9800, fill: '#FF8042',
    },
    {
        name: '35-39', uv: 8.63, pv: 3908, fill: '#BE09B0',
    },
    {
        name: '40+', uv: 2.63, pv: 4800, fill: '#D50A0A',
    },

];

const style = {
    top: 0,
    left: 300,
    lineHeight: '45px',
};


export default class Age extends PureComponent {
    constructor() {
        super();
        this.state = {height: 0, width: 0};
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height={400} outerRadius={140} >
            <RadialBarChart cx={170} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
            </ResponsiveContainer>
        );
    }
}