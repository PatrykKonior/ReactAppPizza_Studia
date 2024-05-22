import React from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const SalesSummary = ({ sales = [] }) => {
    const totalSales = sales.reduce((sum, sale) => sum + sale.quantity * sale.price, 0);

    const data = sales.map((sale) => ({
        name: sale.product,
        value: sale.quantity * sale.price,
    }));

    return (
        <Paper style={{ padding: '16px', height: '100%' }}>
            <Typography variant="h7" component="h2" gutterBottom>
                Podsumowanie sprzedazy
            </Typography>
            <Typography variant="h5" component="p">
                Aktualna kwota: {totalSales} PLN
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
};

export default SalesSummary;
