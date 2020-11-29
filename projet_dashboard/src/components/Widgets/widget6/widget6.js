import React from 'react';
import {AreaChart, Legend, ResponsiveContainer} from "recharts";
import {XAxis} from "recharts";
import {YAxis} from "recharts";
import {CartesianGrid} from "recharts";
import Tooltip from "@material-ui/core/Tooltip";
import {Area} from "recharts";

const data = [
            {
                    "name": "Novembre",
                    "Stock": 4000,
                    "Ventes": 6000,

            },
            {
                    "name": "Decembre",
                    "Stock": 8000,
                    "Ventes": 9000,

            },
            {
                    "name": "Janvier",
                    "Stock": 2500,
                    "Ventes": 4500,

            },
            {
                    "name": "Fevrier",
                    "Stock": 3000,
                    "Ventes": 4000,

            },
            {
                    "name": "Mars",
                    "Stock": 4000,
                    "Ventes": 2000,

            },
            {
                    "name": "Avril",
                    "Stock": 10000,
                    "Ventes": 5000,

            },
            {
                    "name": "Mai",
                    "Stock": 6000,
                    "Ventes": 4300,

            }
    ]

const Widget6 = () => {
        return(
            <ResponsiveContainer width="100%" height={400} >
                    <AreaChart  height={400} data={data}>
                            <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#002EF9" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#002EF9" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#17202A" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#17202A" stopOpacity={0}/>
                                    </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="Stock" stroke="#002EF9" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="Ventes" stroke="#17202A" fillOpacity={1} fill="url(#colorPv)" />
                        <Legend verticalAlign={"bottom"} iconType={"circle"}/>
                    </AreaChart>
            </ResponsiveContainer>
        );

}


export default Widget6;