import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SalesForm = ({ onAddSale }) => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'product') setProduct(value);
        if (name === 'quantity') setQuantity(value);
        if (name === 'price') setPrice(value);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!product) newErrors.product = 'Produkt jest wymagany';
        if (!quantity) {
            newErrors.quantity = 'Ilość jest wymagana';
        } else if (isNaN(quantity) || Number(quantity) <= 0) {
            newErrors.quantity = 'Ilość musi być liczbą dodatnią';
        }
        if (!price) {
            newErrors.price = 'Cena jest wymagana';
        } else if (isNaN(price) || Number(price) <= 0) {
            newErrors.price = 'Cena musi być liczbą dodatnią';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAddSale({ product, quantity: Number(quantity), price: Number(price) });
            setProduct('');
            setQuantity('');
            setPrice('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <TextField
                        label="Produkt"
                        name="product"
                        value={product}
                        onChange={handleInputChange}
                        fullWidth
                        error={!!errors.product}
                        helperText={errors.product}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Ilość"
                        name="quantity"
                        value={quantity}
                        onChange={handleInputChange}
                        fullWidth
                        error={!!errors.quantity}
                        helperText={errors.quantity}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Cena"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        fullWidth
                        error={!!errors.price}
                        helperText={errors.price}
                    />
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" className="sales-form-button" type="submit">Dodaj</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SalesForm;
