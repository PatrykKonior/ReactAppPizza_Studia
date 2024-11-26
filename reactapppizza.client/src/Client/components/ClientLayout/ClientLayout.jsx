import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Layout = () => {
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
                                '&:active': {
                                    backgroundColor: '#BFB78F', // Kolor podświetlenia
                                    color: 'white', // Kolor tekstu podczas naciśnięcia
                                },
                                '&:hover': {
                                    backgroundColor: '#c7a42f',
                                    color: 'white',
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
                                '&:active': {
                                    backgroundColor: '#BFB78F',
                                    color: 'white',
                                },
                                '&:hover': {
                                    backgroundColor: '#c7a42f',
                                    color: 'white',
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
                                '&:active': {
                                    backgroundColor: '#BFB78F',
                                    color: 'white',
                                },
                                '&:hover': {
                                    backgroundColor: '#c7a42f',
                                    color: 'white',
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
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&:hover': {
                                    backgroundColor: '#c7a42f',
                                    color: 'white',
                                },
                            }}
                        >
                            🛒 Koszyk
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <Outlet />
            </Container>
            <Box component="footer" sx={{ mt: 5, p: 3, background: '#f7f7f7', display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="subtitle1">Pizza 365</Typography>
                    <Typography>Adres: ul. Pizzerii 365, Kraków</Typography>
                </Box>
                <Box>
                    <iframe
                        title="Pizza 365 Map"
                        src="https://maps.google.com/maps?q=krakow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="300"
                        height="200"
                        style={{ border: 'none' }}
                    ></iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;