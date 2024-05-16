// src/components/Zestawienia.js
import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { styled } from '@mui/material/styles';

const dataYear = [
    { name: 'Styczeñ', revenue: 2400 },
    { name: 'Luty', revenue: 1398 },
    { name: 'Marzec', revenue: 9800 },
    { name: 'Kwiecieñ', revenue: 3908 },
    { name: 'Maj', revenue: 4800 },
    { name: 'Czerwiec', revenue: 3800 },
    { name: 'Lipiec', revenue: 4300 },
    { name: 'Sierpieñ', revenue: 4100 },
    { name: 'Wrzesieñ', revenue: 8000 },
    { name: 'PaŸdziernik', revenue: 2400 },
    { name: 'Listopad', revenue: 1398 },
    { name: 'Grudzieñ', revenue: 9800 },
];

const dataQ1 = [
    { name: 'Styczeñ', value: 2400 },
    { name: 'Luty', value: 1398 },
    { name: 'Marzec', value: 9800 },
];

const dataQ2 = [
    { name: 'Kwiecieñ', value: 3908 },
    { name: 'Maj', value: 4800 },
    { name: 'Czerwiec', value: 3800 },
];

const dataQ3 = [
    { name: 'Lipiec', value: 4300 },
    { name: 'Sierpieñ', value: 4100 },
    { name: 'Wrzesieñ', value: 8000 },
];

const dataQ4 = [
    { name: 'PaŸdziernik', value: 2400 },
    { name: 'Listopad', value: 1398 },
    { name: 'Grudzieñ', value: 9800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const CustomActiveShapePieChart = ({ data, title }) => (
    <Item>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </Item>
);

const Zestawienia = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '20px 0' }}>
            <Typography variant="h4" gutterBottom>
                Zestawienia Przychodów
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Dochody w Podziale na Rok</Typography>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={dataYear}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ1} title="1. Kwarta³" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ2} title="2. Kwarta³" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ3} title="3. Kwarta³" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ4} title="4. Kwarta³" />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Zestawienia };
