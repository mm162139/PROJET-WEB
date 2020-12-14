import React, { PureComponent } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,} from 'recharts';

const data = [
    {
        subject: 'Auchan', A: 100, fullMark: 150,
    },
    {
        subject: 'Fnac', A: 80, fullMark: 150,
    },
    {
        subject: 'Carrefour', A: 120, fullMark: 150,
    },
    {
        subject: 'Micromania', A: 70, fullMark: 150,
    },
    {
        subject: 'Amazon', A: 100, fullMark: 150,
    },
    {
        subject: 'E.Leclerc', A: 65, fullMark: 150,
    },
];

export default class Hexagone extends PureComponent {


    render() {
        return (
            <ResponsiveContainer width="100%" height={500} >
                <RadarChart cx={"50%"} cy={"30%"} outerRadius={"60%"} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#17202A" fill="#002EF9" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>

        );
    }
}
