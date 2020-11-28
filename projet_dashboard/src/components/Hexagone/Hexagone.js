import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {
        subject: 'Amerique Du Nord', A: 100, fullMark: 150,
    },
    {
        subject: 'Amerique Du Sud', A: 80, fullMark: 150,
    },
    {
        subject: 'Europe', A: 120, fullMark: 150,
    },
    {
        subject: 'Afrique', A: 70, fullMark: 150,
    },
    {
        subject: 'Asie', A: 100, fullMark: 150,
    },
    {
        subject: 'Oceanie', A: 65, fullMark: 150,
    },
];

export default class Hexagone extends PureComponent {


    render() {
        return (
            <RadarChart cx={170} cy={250} outerRadius={100} width={400} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#17202A" fill="#002EF9" fillOpacity={0.6} />
            </RadarChart>
        );
    }
}
