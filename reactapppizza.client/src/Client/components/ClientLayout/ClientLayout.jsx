import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Layout = () => {
    return (
        <Box>
            <AppBar position="sticky" sx={{ background: '#D32F2F' }}>
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
                        Pizza 365
                    </Typography>
                    <Button color="inherit" component={Link} to="/menu">Menu</Button>
                    <Button color="inherit" component={Link} to="/kontakt">Kontakt</Button>
                    <Button color="inherit" component={Link} to="/login">Zaloguj siê</Button>
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