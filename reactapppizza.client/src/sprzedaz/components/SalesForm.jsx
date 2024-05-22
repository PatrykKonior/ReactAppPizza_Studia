import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SalesForm = ({ onAddSale }) => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSale({ product, quantity, price });
        setProduct('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        label="Produkt"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Ilosc"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Cena"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Dodaj
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SalesForm;
