import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const RevenueChart = ({ data, options }) => (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '80%', height: '90%' }}>
            <Line data={data} options={options} />
        </div>
    </div>
);

export default RevenueChart;
