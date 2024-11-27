import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Button, Card, CardMedia, CardContent, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../ClientApp.css'
import PizzaVideo from '../../assets/videos/AdobeStock_650450996_Video_HD_Preview.mov'
import PizzaPhoto from '../../assets/photos/SUPER_PIZZA.jpg'
import PizzaWege from '../../assets/photos/WEGE_PIZZA.jpg'
import PizzaPepperoni from '../../assets/photos/PEPPERONI_PIZZA.jpg'
import PizzaMarg from '../../assets/photos/MARG_PIZZA.jpg'
import PizzaHawajska from '../../assets/photos/HAWAJSKA_PIZZA.jpg'


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const pizzaImages = {
        Margherita: PizzaMarg,
        Pepperoni: PizzaPepperoni,
        Veggie: PizzaWege,
        Hawajska: PizzaHawajska,
    };

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

        const pizzaCards = gsap.utils.toArray('.pizza-card');
        gsap.timeline({ repeat: -1 }) // Animacja w pętli
            .to(pizzaCards, {
                xPercent: '-=100', // Przesuwanie w lewo
                duration: 3, // Dłuższy czas trwania każdej animacji
                ease: 'power1.inOut', // Łagodniejsze wprowadzenie i zakończenie
                stagger: {
                    each: 3, // Czas pozostania na ekranie przed przejściem do kolejnej
                },
            })
            .set(pizzaCards, { xPercent: '+=400' }); // Resetowanie pozycji
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
            <Box className="menu-section scroll-section" sx={{ marginTop: '50px' }}>
                <Typography
                    variant="h4"
                    className="section-title"
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#c7a42f', // Dopasowany złoty kolor
                        marginBottom: '20px',
                        textAlign: 'left', // Wyśrodkowanie tekstu
                    }}
                >
                    Nasze polecane pizze
                </Typography>

                <Box
                    className="featured-menu"
                    sx={{
                        position: 'relative',
                        height: '300px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    {["Margherita", "Pepperoni", "Veggie", "Hawajska"].map((pizza, idx) => (
                        <Box
                            key={idx}
                            className="pizza-card"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'absolute',
                                top: 0,
                                left: '100%',
                                width: '100%',
                                height: '100%',
                                padding: '20px',
                                boxSizing: 'border-box',
                                background: idx % 2 === 0 ? '#8f97bf' : '#BFB78F', // Alternatywne tła dla wizualizacji
                                color: idx % 2 === 0 ? '#1d2032' : '#011a20',
                            }}
                        >
                            {/* Obrazek po lewej stronie */}
                            <Box
                                sx={{
                                    flex: '1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px 10px',
                                }}
                            >
                                <img
                                    src={pizzaImages[pizza]} 
                                    alt={pizza}
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        borderRadius: '10px',
                                        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.5)',
                                    }}
                                />
                            </Box>

                            {/* Opis po prawej stronie */}
                            <Box
                                sx={{
                                    flex: '1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    variant="h3" // Większy rozmiar tekstu
                                    sx={{
                                        fontWeight: 'bold', // Pogrubienie
                                        textAlign: 'center', // Wyśrodkowanie tekstu
                                    }}
                                >
                                    {pizza}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Customer Testimonials Section */}
            <Box
                className="testimonials-section scroll-section"
                sx={{
                    marginTop: '50px', // Odstęp od góry
                    padding: '60px 30px', // Wewnętrzne odstępy
                    backgroundColor: '#BFB78F', // Tło sekcji
                    color: '#011a20', // Kolor tekstu
                }}
            >
                <Typography
                    variant="h4"
                    className="section-title"
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#011a20', // Kolor tekstu
                        marginBottom: '20px',
                        textAlign: 'left', // Wyrównanie do lewej
                    }}
                >
                    Opinie naszych klientów
                </Typography>

                <Grid container spacing={3}>
                    {[
                        {
                            opinia: "Najlepsza pizza w Katowicach! Wyjątkowy smak i świeże składniki. Polecam każdemu!",
                            klient: "Anna Nowak",
                        },
                        {
                            opinia: "Obsługa na najwyższym poziomie. Pizza była ciepła, a dowóz szybki. Sosnowiec ma najlepszą pizzę w mieście!",
                            klient: "Jan Kowalski",
                        },
                        {
                            opinia: "Uwielbiam to miejsce! Idealna pizza na każdą okazję, a lokal w Katowicach jest świetny.",
                            klient: "Katarzyna Wiśniewska",
                        },
                    ].map((opiniaObj, idx) => (
                        <Grid item xs={12} sm={4} key={idx}>
                            <Card
                                className="testimonial-card"
                                sx={{
                                    padding: '20px',
                                    backgroundColor: '#ffffff', // Tło kart
                                    color: '#011a20', // Kolor tekstu
                                    borderRadius: '10px',
                                    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {/* Małe kółko z inicjałami */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: '#011a20',
                                            color: '#ffffff',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontWeight: 'bold',
                                            marginRight: '10px',
                                        }}
                                    >
                                        {opiniaObj.klient
                                            .split(' ')
                                            .map((word) => word[0])
                                            .join('')} {/* Inicjały */}
                                    </Box>
                                    <Typography variant="subtitle2" className="customer-name" sx={{ fontWeight: 'bold' }}>
                                        {opiniaObj.klient}
                                    </Typography>
                                </Box>

                                <Typography variant="body1">"{opiniaObj.opinia}"</Typography>
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
