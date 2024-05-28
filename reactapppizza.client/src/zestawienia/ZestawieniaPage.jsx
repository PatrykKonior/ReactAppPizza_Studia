import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { styled } from '@mui/material/styles';
import '../App.css';

const dataYear = [
    { name: 'Styczeń', Przychód: 2400 },
    { name: 'Luty', Przychód: 1398 },
    { name: 'Marzec', Przychód: 9800 },
    { name: 'Kwiecień', Przychód: 3908 },
    { name: 'Maj', Przychód: 4800 },
    { name: 'Czerwiec', Przychód: 3800 },
    { name: 'Lipiec', Przychód: 4300 },
    { name: 'Sierpień', Przychód: 4100 },
    { name: 'Wrzesień', Przychód: 8000 },
    { name: 'Październik', Przychód: 2400 },
    { name: 'Listopad', Przychód: 1398 },
    { name: 'Grudzień', Przychód: 9800 },
];

const dataQ1 = [
    { name: 'Styczeń', value: 2400 },
    { name: 'Luty', value: 1398 },
    { name: 'Marzec', value: 9800 },
];

const dataQ2 = [
    { name: 'Kwiecień', value: 3908 },
    { name: 'Maj', value: 4800 },
    { name: 'Czerwiec', value: 3800 },
];

const dataQ3 = [
    { name: 'Lipiec', value: 4300 },
    { name: 'Sierpień', value: 4100 },
    { name: 'Wrzesień', value: 8000 },
];

const dataQ4 = [
    { name: 'Październik', value: 2400 },
    { name: 'Listopad', value: 1398 },
    { name: 'Grudzień', value: 9800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const romanNumerals = [
    'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
];

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const CustomActiveShapePieChart = ({ data, title, outerRadius = 60, startMonth }) => (
    <Item className="zestawienia-item">
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label={({ value }) => `${value}`} 
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    dataKey="value"
                    labelStyle={{ fontSize: '0.5rem' }} 
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} PLN`, name]} />
            </PieChart>
        </ResponsiveContainer>
        <div className="legend">
            {data.map((entry, index) => (
                <div key={`legend-${index}`} style={{ color: COLORS[index % COLORS.length], margin: '5px' }}>
                    <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: COLORS[index % COLORS.length], marginRight: '5px' }}></span>
                    {romanNumerals[startMonth + index - 1]} 
                </div>
            ))}
        </div>
    </Item>
);

const Zestawienia = () => {
    return (
        <Container maxWidth="lg" className="zestawienia-container">
            <Typography variant="h4" gutterBottom className="zestawienia-header">
                Zestawienia Przychodów
            </Typography>
            <Grid container spacing={2}> 
                <Grid item xs={12}>
                    <Item className="zestawienia-item">
                        <Typography variant="h5" gutterBottom>Dochody w podziale na rok</Typography>
                        <div className="zestawienia-chart-container">
                            <ResponsiveContainer>
                                <LineChart data={dataYear}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Przychód" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ1} title="1. Kwartał" startMonth={1} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ2} title="2. Kwartał" startMonth={4} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ3} title="3. Kwartał" startMonth={7} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CustomActiveShapePieChart data={dataQ4} title="4. Kwartał" startMonth={10} />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Zestawienia };
