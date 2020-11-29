import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '2016', Europe: 2400, ANord: 1900, ASud: 1200, Afrique: 800 , Asie: 2500,
    },
    {
        name: '2017', Europe: 3000, ANord: 1398, ASud: 2210, Afrique: 1000, Asie: 1000,
    },
    {
        name: '2018', Europe: 2000, ANord: 9800, ASud: 2290, Afrique: 1000, Asie: 1000,
    },
    {
        name: '2019', Europe: 2780, ANord: 3908, ASud: 2000, Afrique: 1000, Asie: 1000,
    },
    {
        name: '2020', Europe: 1890, ANord: 4800, ASud: 2181, Afrique: 1000, Asie: 1000,
    },

];


export default class CA extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

    render() {
        return (
            <ResponsiveContainer width="100%" height={500} >
            <BarChart
                height={400}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Europe" stackId="a" fill="#FFBB28" />
                <Bar dataKey="ANord" stackId="a" fill="#0088FE" />
                <Bar dataKey="ASud" stackId="a" fill="#00C49F" />
                <Bar dataKey="Afrique" stackId="a" fill="#FF8042" />
                <Bar dataKey="Asie" stackId="a" fill="#BE09B0" />
                <Bar dataKey="Oceanie" stackId="a" fill="#D50A0A" />
            </BarChart>
            </ResponsiveContainer>
        );
    }
}
