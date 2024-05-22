import React from 'react';
import { Paper, Typography } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const SalesSummary = ({ sales = [] }) => {
    const totalSales = sales.reduce((sum, sale) => sum + sale.quantity * sale.price, 0);

    const data = sales.map((sale) => ({
        name: sale.product,
        value: sale.quantity * sale.price,
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <Paper>
            <Typography variant="h6" component="h2" gutterBottom>
                Podsumowanie sprzedazy
            </Typography>
            <Typography variant="h4" component="p">
                Aktualna kwota: {totalSales} PLN
            </Typography>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </Paper>
    );
};

export default SalesSummary;
