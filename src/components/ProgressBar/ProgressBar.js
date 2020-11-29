import React from 'react';
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts";

const sellsGames= [
    {"game": "SpiderMan", "nbr": 1230},
    {"game": "COD", "nbr": 1200},
    {"game": "Fifa 21", "nbr": 2000},

]
const ProgressBar = (props) => {

  console.log(props);
  
  return(

      <BarChart width={730} height={250} data={sellsGames}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="game" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="nbr" fill="#8884d8" />
      </BarChart>
    );

};

export default ProgressBar;