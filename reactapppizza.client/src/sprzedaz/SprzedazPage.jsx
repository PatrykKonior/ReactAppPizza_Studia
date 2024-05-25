import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, IconButton, Typography, Button } from '@mui/material';
import SalesForm from './components/SalesForm';
import SalesTable from './components/SalesTable';
import ExportOptions from './components/ExportOptions';
import SalesSummary from './components/SalesSummary';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import './SprzedazPage.css';

const Sprzedaz = () => {
    const [sales, setSales] = useState([
        { product: 'Margherita', quantity: 10, price: 18 },
        { product: 'Pepperoni', quantity: 5, price: 38 },
        { product: 'Hawaiian', quantity: 7, price: 37 },
        { product: 'Vegetarian', quantity: 3, price: 45 },
        { product: 'Kawa', quantity: 50, price: 12 },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddSale = (sale) => {
        setSales([...sales, sale]);
    };

    const titleStyle = {
        fontSize: '35px',
        fontFamily: 'Montserrat, sans-serif',
        margin: '15px 0',
        color: '#000'
    };

    return (
        <Container className="sprzedaz-page">
            <div className="top-bar">
                <div style={titleStyle}>Zarejestruj sprzedaz</div>
                <TextField
                    label="Szukaj sprzedazy"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '50%' }}
                />
                <div>
                    <IconButton><PrintIcon /></IconButton>
                    <IconButton><FileDownloadIcon /></IconButton>
                    <IconButton><DescriptionIcon /></IconButton>
                </div>
            </div>
            <Grid container spacing={3} className="sprzedaz-grid">
                <Grid item xs={12} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesForm onAddSale={handleAddSale} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} className="sprzedaz-item">
                    <Paper className="card">
                        <SalesTable sales={sales.filter(sale => sale.product.toLowerCase().includes(searchTerm.toLowerCase()))} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} className="sprzedaz-item">
                    <Paper className="card sales-summary-card">
                        <SalesSummary sales={sales} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Sprzedaz };
