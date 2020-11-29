import React, { PureComponent } from 'react';
import {PieChart, Pie, Cell} from 'recharts';

const data = [
    { name: 'Amerique du Nord', value: 400 },
    { name: 'Amerique du Sud', value: 300 },
    { name: 'Europe', value: 300 },
    { name: 'Afrique', value: 200 },
    { name: 'Asie', value: 200 },
    { name: 'Oceanie', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#BE09B0', '#D50A0A'];

const RADIAN = Math.PI / 180;

//Cette fonction sert à afficher le pourcentage , référence:https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index,}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Camembert extends PureComponent {
    render() {
        return (
            <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
            </div>
        );
    }
}




