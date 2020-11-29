import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: '2016', uv: 1890, pv: 2400, amt: 2400,
  },
  {
    name: '2017', uv: 2450, pv: 1398, amt: 2210,
  },
  {
    name: '2018', uv: 2700, pv: 9800, amt: 2290,
  },
  {
    name: '2019', uv: 3200, pv: 3908, amt: 2000,
  },
  {
    name: '2020', uv: 4000, pv: 4800, amt: 2181,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  render() {
    return (
      <AreaChart
        width={560}
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
        <Area type="monotone" dataKey="uv" stroke="black" fill="#EE4747" />
      </AreaChart>
    );
  }
}
