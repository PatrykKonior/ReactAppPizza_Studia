import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, IconButton, Button, Typography } from '@mui/material';
import SalesForm from './components/SalesForm';
import SalesTable from './components/SalesTable';
import ExportOptions from './components/ExportOptions';
import SalesSummary from './components/SalesSummary';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import './SprzedazPage.css';

const Sprzedaz = () => {
    const [sales, setSales] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddSale = (sale) => {
        setSales([...sales, sale]);
    };

    return (
        <Container className="sprzedaz-page">
            <div className="top-bar">
                <TextField
                    label="Szukaj sprzedazy"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '66%' }}
                />
                <div>
                    <IconButton><PrintIcon  /></IconButton>
                    <IconButton><FileDownloadIcon  /></IconButton>
                    <IconButton><DescriptionIcon  /></IconButton>
                </div>
            </div>
            <Grid container spacing={3} className="sprzedaz-grid">
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesForm onAddSale={handleAddSale} />
                    </Paper>
                </Grid>
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesTable sales={sales.filter(sale => sale.product.toLowerCase().includes(searchTerm.toLowerCase()))} />
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
