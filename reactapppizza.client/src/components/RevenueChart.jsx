import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const RevenueChart = ({ data, options }) => (
    <Line data={data} options={options} />
);

export default RevenueChart;