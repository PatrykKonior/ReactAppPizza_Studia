import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const Chart = ({ dataBar, COLORS }) => (
    <BarChart width={320} height={220} data={dataBar} style={{ marginLeft: '-10px' }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value">
            {dataBar.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Bar>
    </BarChart>
);

export default Chart;
