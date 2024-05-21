import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import SalesForm from './components/SalesForm';
import SalesTable from './components/SalesTable';
import ExportOptions from './components/ExportOptions';
import SalesSummary from './components/SalesSummary';
import './SprzedazPage.css';

const Sprzedaz = () => {
    const [sales, setSales] = useState([]);

    const handleAddSale = (sale) => {
        setSales([...sales, sale]);
    };

    return (
        <Container className="sprzedaz-page">
            <Grid container spacing={3} className="sprzedaz-grid">
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesForm onAddSale={handleAddSale} />
                    </Paper>
                </Grid>
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesTable sales={sales} />
                    </Paper>
                </Grid>
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesSummary sales={sales} />
                    </Paper>
                </Grid>
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <ExportOptions />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Sprzedaz };
