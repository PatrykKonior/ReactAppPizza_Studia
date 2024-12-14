import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Badge } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import Footer from './ClientFooter.jsx';
import { useCart } from '../ShoppingCard/CartContext.jsx';

const Layout = () => {
    const { cart } = useCart();

    // Oblicz sumę produktów w koszyku
    const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Box>
            <AppBar position="sticky" sx={{ background: '#011a20' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                        <header className="header">
                            <h1>Pizza 365</h1>
                        </header>
                    </Link>

                    {/* Nawigacja */}
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/menu"
                            sx={{
                                width: 120,
                                '&:hover': {
                                    backgroundColor: '#c7a42f', // Kolor podświetlenia
                                    color: 'white', // Kolor tekstu podczas hover
                                },
                            }}
                        >
                            Menu
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/kontakt"
                            sx={{
                                width: 120,
                                '&:hover': {
                                    backgroundColor: '#c7a42f', // Kolor podświetlenia
                                    color: 'white', // Kolor tekstu podczas hover
                                },
                            }}
                        >
                            Kontakt
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/login"
                            sx={{
                                width: 120,
                                '&:hover': {
                                    backgroundColor: '#c7a42f', // Kolor podświetlenia
                                    color: 'white', // Kolor tekstu podczas hover
                                },
                            }}
                        >
                            Zaloguj się
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/koszyk"
                            sx={{
                                width: 120,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    backgroundColor: '#c7a42f', // Kolor podświetlenia
                                    color: 'white', // Kolor tekstu podczas hover
                                },
                            }}
                        >
                            <Badge badgeContent={totalItems} color="secondary">
                                🛒 Koszyk
                            </Badge>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <Outlet />
            </Container>
            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Layout;
