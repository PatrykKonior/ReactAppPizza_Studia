import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Button, Card, CardMedia, CardContent, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../ClientApp.css'
import PizzaVideo from '../../assets/videos/AdobeStock_650450996_Video_HD_Preview.mov'
import PizzaPhoto from '../../assets/photos/SUPER_PIZZA.jpg'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        // GSAP Animation for hero text
        gsap.fromTo(
            '.hero-text-container',
            { y: '100%' },
            { y: '-90%', duration: 1.5, ease: 'power2.out', delay: 0.5 }
        );

        // GSAP Animation for scrolling
        gsap.utils.toArray('.scroll-section').forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 1, y: 140 }, // Startowa pozycja: przesunięcie w dół
                {
                    opacity: 1,
                    y: 0, // Docelowa pozycja: brak przesunięcia
                    duration: 5.0, // Czas animacji: krótszy dla szybszego efektu
                    ease: 'power2.out', // Płynniejsze wyjście
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 120%', // Animacja zaczyna się wcześniej
                        end: 'top 70%', // Animacja kończy się wcześniej
                        scrub: true, // Synchronizacja ze scrollowaniem
                    },
                }
            );
        });
    }, []);

    useEffect(() => {
        // Dodanie klasy dla stron klienta
        document.body.classList.add('client-mode');
        return () => {
            // Usunięcie klasy, gdy komponent zostanie odmontowany
            document.body.classList.remove('client-mode');
        };
    }, []);

    const handlePopupOpen = () => setOpenPopup(true);
    const handlePopupClose = () => setOpenPopup(false);

    return (
        <Box className="home-container">
            {/* Hero Section */}
            <Box className="home-container">
                {/* Sekcja Hero z wideo */}
                <Box
                    className="hero-section"
                    sx={{
                        width: '100%',
                        height: '630px',
                        maxHeight: '630px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <video
                        className="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        <source src={PizzaVideo} type="video/mp4" />
                        Twoja przeglądarka nie obsługuje tagu wideo.
                    </video>
                    <Box
                        className="hero-text-container"
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            textAlign: 'center',
                            background: 'rgba(191, 183, 143, 0.5)', // Tło z 50% przezroczystością
                            padding: '20px 0',
                        }}
                    >
                        <Typography
                            variant="h2"
                            className="hero-text"
                            sx={{
                                color: '#011a20',
                                marginBottom: '10px',
                            }}
                        >
                            Witamy w Pizza 365
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className="hero-button"
                            onClick={handlePopupOpen}
                            sx={{
                                marginBottom: '10px',
                                zIndex: 2,
                                backgroundColor: 'black', // Czarny przycisk
                                '&:hover': {
                                    backgroundColor: '#BFB78F', // Kolor hover
                                },
                            }}
                        >
                            Zadzwoń do nas!
                        </Button>
                        <Typography
                            variant="h5"
                            className="hero-text"
                            sx={{
                                color: '#011a20',
                            }}
                        >
                            Najlepsze pizze w mieście, przygotowane z miłością i pasją!
                        </Typography>
                    </Box>
                </Box>

                {/* Popup z numerami telefonów */}
                <Dialog open={openPopup} onClose={handlePopupClose}
                    sx={{
                        '& .MuiDialog-paper': {
                            minWidth: '400px', // Zwiększenie minimalnej szerokości okna
                            padding: '20px', // Dodatkowe odstępy wewnętrzne
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            textAlign: 'center',
                        }}
                    >
                        Kontakt
                    </DialogTitle>
                    <DialogContent>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold', // Pogrubienie
                                fontSize: '1.2rem', // Większy rozmiar
                                textAlign: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            Katowice
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1rem',
                                textAlign: 'center',
                                animation: 'pulse 1.5s infinite',
                            }}
                        >
                            Telefon: +48 32 123 4567
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold', 
                                fontSize: '1.2rem', 
                                textAlign: 'center',
                                marginTop: '20px',
                                marginBottom: '10px',
                            }}
                        >
                            Sosnowiec
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1rem',
                                textAlign: 'center',
                                animation: 'pulse 1.5s infinite', 
                            }}
                        >
                            Telefon: +48 32 765 4321
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handlePopupClose} variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: 'black', // Czarny przycisk
                                '&:hover': {
                                    backgroundColor: '#BFB78F', // Hover
                                },
                                margin: 'auto', // Wyśrodkowanie przycisku
                            }}>
                            Zamknij
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>

            {/* About Us Section */}
            <Box
                className="about-section scroll-section"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Układ kolumnowy dla mobilnych, wierszowy dla większych ekranów
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '50px', // Większy odstęp od sekcji hero
                    padding: '60px 30px',
                    backgroundColor: '#011a20',
                    borderTop: '2px solid #8e8e86',
                }}
            >
                {/* Lewa część - Opis */}
                <Box
                    sx={{
                        flex: 1,
                        color: '#d3d3d3',
                        paddingRight: { md: '30px' }, // Odstęp od prawej strony
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h4"
                        className="section-title"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: '#c7a42f',
                            marginBottom: '20px',
                        }}
                    >
                        O nas
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            fontFamily: 'Georgia, serif',
                            textAlign: 'justify',
                        }}
                    >
                        Pizza 365 to miejsce, gdzie pasja do gotowania spotyka się z najwyższą jakością składników.
                        Codziennie przygotowujemy świeże ciasto, używając tradycyjnych włoskich receptur.
                        Naszym celem jest dostarczanie wyjątkowych doświadczeń kulinarnych dla każdego klienta.
                        Jesteśmy otwarci codziennie od 10:00 do 22:00.
                    </Typography>
                </Box>

                {/* Prawa część - Zdjęcie pizzy */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#BFB78F', // Tło dla prawej części
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <img
                        src={PizzaPhoto}
                        alt="Pizza"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                </Box>
            </Box>

            {/* Featured Menu Section */}
            <Box className="menu-section scroll-section">
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
                                    <Typography>Wyjątkowy smak i świeże składniki.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Customer Testimonials Section */}
            <Box className="testimonials-section scroll-section">
                <Typography variant="h4" className="section-title">
                    Opinie naszych klientów
                </Typography>
                <Grid container spacing={3}>
                    {["Fantastyczne jedzenie!", "Najlepsza pizza w Krakowie!", "Obsługa na medal!"].map((opinia, idx) => (
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
                    Gotowy na kulinarną podróż?
                </Typography>
                <Button variant="contained" color="secondary" className="cta-button">
                    Zobacz nasze menu
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
