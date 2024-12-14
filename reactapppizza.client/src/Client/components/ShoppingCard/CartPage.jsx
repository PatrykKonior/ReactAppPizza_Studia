import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useCart } from './CartContext.jsx';
import { gsap } from "gsap";

const CartPage = () => {
    const { cart, addToCart, removeFromCart } = useCart();
    const cartItems = Object.values(cart);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.cena, 0);

    useEffect(() => {
        // GSAP animacja dla elementów koszyka przy załadowaniu strony
        gsap.fromTo(
            '.cart-item',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
        );
    }, []);

    const handleAddClick = (item) => {
        addToCart(item);

        // GSAP animacja dla przycisku +
        gsap.fromTo(
            `#add-${item.nazwa}`,
            { scale: 1 },
            { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
        );
    };

    const handleRemoveClick = (itemName) => {
        removeFromCart(itemName);

        // GSAP animacja dla przycisku -
        gsap.fromTo(
            `#remove-${itemName}`,
            { scale: 1 },
            { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
        );
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
                Twój Koszyk
            </Typography>
            <Grid container spacing={2}>
                {cartItems.map((item) => (
                    <Grid item xs={12} key={item.nazwa} className="cart-item">
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#f4f4f4',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#011a20' }}>
                                {item.nazwa}
                            </Typography>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        marginBottom: '10px',
                                        color: '#011a20',
                                    }}
                                >
                                    {item.quantity} x {item.cena} zł
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        id={`add-${item.nazwa}`}
                                        size="small"
                                        onClick={() => handleAddClick(item)}
                                        sx={{
                                            border: '2px solid #011a20',
                                            borderRadius: '8px',
                                            backgroundColor: '#c7a42f',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#d9b356',
                                            },
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        id={`remove-${item.nazwa}`}
                                        size="small"
                                        onClick={() => handleRemoveClick(item.nazwa)}
                                        sx={{
                                            border: '2px solid #011a20',
                                            borderRadius: '8px',
                                            backgroundColor: '#8f97bf',
                                            color: '#fff',
                                            '&:hover': {
                                                backgroundColor: '#8f97bf',
                                            },
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        -
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Box
                sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#011a20',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    animation: 'pulse 1.5s infinite',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase' }}
                >
                    Razem:
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        backgroundColor: '#c7a42f',
                        padding: '5px 15px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                        textAlign: 'center',
                    }}
                >
                    {totalPrice.toFixed(2)} zł
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: '#8f97bf',
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#d9b356',
                        },
                    }}
                >
                    Przejdź do płatności
                </Button>
            </Box>
        </Box>
    );
};

export default CartPage;
