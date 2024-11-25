import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { gsap } from 'gsap';
import '../../ClientApp.css'

const Home = () => {
    useEffect(() => {
        gsap.fromTo(
            '.hero-text',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 }
        );
        gsap.fromTo(
            '.featured-menu',
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 }
        );
    }, []);

    useEffect(() => {
        // Dodanie klasy dla stron klienta
        document.body.classList.add('client-mode');
        return () => {
            // Usuni�cie klasy, gdy komponent zostanie odmontowany
            document.body.classList.remove('client-mode');
        };
    }, []);

    return (
        <Box className="home-container">
            {/* Hero Section */}
            <Box className="hero-section">
                <Typography variant="h2" className="hero-text">
                    Witamy w Pizza 365
                </Typography>
                <Typography variant="h5" className="hero-text">
                    Najlepsze pizze w mie�cie, przygotowane z mi�o�ci� i pasj�!
                </Typography>
                <Button variant="contained" color="primary" className="hero-button">
                    Zam�w teraz
                </Button>
            </Box>

            {/* About Us Section */}
            <Box className="about-section">
                <Typography variant="h4" className="section-title">
                    O nas
                </Typography>
                <Typography>
                    Pizza 365 to miejsce, gdzie pasja do gotowania spotyka si� z najwy�sz� jako�ci� sk�adnik�w.
                    Codziennie przygotowujemy �wie�e ciasto, u�ywaj�c tradycyjnych w�oskich receptur.
                    Naszym celem jest dostarczanie wyj�tkowych do�wiadcze� kulinarnych dla ka�dego klienta.
                </Typography>
            </Box>

            {/* Featured Menu Section */}
            <Box className="menu-section">
                <Typography variant="h4" className="section-title">
                    Nasze polecane pizze
                </Typography>
                <Grid container spacing={3} className="featured-menu">
                    {["Margherita", "Pepperoni", "Veggie", "Hawajska"].map((pizza, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                            <Card className="menu-card">
                                <CardMedia
                                    component="img"
                                    image={`https://via.placeholder.com/300?text=${pizza}`}
                                    alt={pizza}
                                    className="menu-card-img"
                                />
                                <CardContent>
                                    <Typography variant="h6">{pizza}</Typography>
                                    <Typography>Wyj�tkowy smak i �wie�e sk�adniki.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Customer Testimonials Section */}
            <Box className="testimonials-section">
                <Typography variant="h4" className="section-title">
                    Opinie naszych klient�w
                </Typography>
                <Grid container spacing={3}>
                    {["Fantastyczne jedzenie!", "Najlepsza pizza w Krakowie!", "Obs�uga na medal!"].map((opinia, idx) => (
                        <Grid item xs={12} sm={4} key={idx}>
                            <Card className="testimonial-card">
                                <Typography variant="body1">"{opinia}"</Typography>
                                <Typography variant="subtitle2" className="customer-name">
                                    - Klient {idx + 1}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Call to Action Section */}
            <Box className="cta-section">
                <Typography variant="h4" className="cta-text">
                    Gotowy na kulinarn� podr�?
                </Typography>
                <Button variant="contained" color="secondary" className="cta-button">
                    Zobacz nasze menu
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
