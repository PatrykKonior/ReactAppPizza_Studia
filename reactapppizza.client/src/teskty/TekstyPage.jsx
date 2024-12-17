import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { styled } from '@mui/material/styles';
import '../App.css';

const Teksty = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '10px 0' }}>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '30px' }}>
               EDYCJA TEKSTÓW NA STRONIE KLIENTA
            </Typography>
        </Container>
    );
};

export { Teksty };
