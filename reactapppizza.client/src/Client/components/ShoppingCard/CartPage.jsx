import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { gsap } from 'gsap';

const CartPage = () => {
    useEffect(() => {
        // Animacja wejścia dla każdego elementu
        gsap.fromTo(
            '.cart-item',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
        );
    }, []);

    const items = [
        { id: 1, name: 'Pizza Margherita', price: 25 },
        { id: 2, name: 'Pizza Pepperoni', price: 30 },
        { id: 3, name: 'Napój gazowany', price: 8 },
    ];

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Twój Koszyk
            </Typography>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={12} key={item.id} className="cart-item">
                        <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="h6">{item.name}</Typography>
                            <Typography variant="body1">{item.price} zł</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Razem: {items.reduce((acc, item) => acc + item.price, 0)} zł</Typography>
                <Button variant="contained" color="primary">
                    Przejdź do płatności
                </Button>
            </Box>
        </Box>
    );
};

export default CartPage;
