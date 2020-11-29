import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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


export default class ChartW2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
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
        <Bar dataKey="Europe" stackId="a" fill="#8884d8" />
        <Bar dataKey="ANord" stackId="a" fill="#82ca9d" />
        <Bar dataKey="ASud" stackId="a" fill="#F7C368" />
        <Bar dataKey="Afrique" stackId="a" fill="#F77E68" />
        <Bar dataKey="Asie" stackId="a" fill="#F768D6" />
      </BarChart>
    );
  }
}




