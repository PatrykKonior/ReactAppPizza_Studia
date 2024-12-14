import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, IconButton, Badge } from '@mui/material';
import { gsap } from "gsap";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useCart } from '../ShoppingCard/CartContext';

const Menu = () => {
    const [menuSections, setMenuSections] = useState({});
    const { cart, addToCart, removeFromCart } = useCart();

    // Pobieranie danych z API
    useEffect(() => {
        fetch("http://localhost:5178/api/Menu")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const sections = data.reduce((acc, item) => {
                    const category = item.kategoria || "MENU";
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push(item);
                    return acc;
                }, {});
                setMenuSections(sections);
            })
            .catch((error) => {
                console.error("Error fetching menu:", error);
            });
    }, []);

    const handleCardClick = (card, item) => {
        // Animacja GSAP
        gsap.fromTo(
            card,
            { scale: 1, rotateY: 0 },
            {
                scale: 1.2,
                rotateY: 360,
                duration: 0.5,
                onComplete: () => {
                    gsap.to(card, { scale: 1, duration: 0.3 }); // Powrót do pierwotnego rozmiaru
                },
            }
        );

        // Dodaj do koszyka
        addToCart(item);
    };



    const sectionStyles = {
        marginTop: '20px',
        padding: '20px 0',
        backgroundColor: '#011a20',
        color: '#d3d3d3',
        borderRadius: '10px',
        marginBottom: '40px', // Większy odstęp między sekcjami
    };

    const cardStyles = {
        padding: '15px',
        backgroundColor: '#BFB78F',
        color: '#011a20',
        borderRadius: '10px',
        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '420px', // Stała wysokość karty
        maxWidth: '300px',
        margin: '0 auto',
        overflow: 'hidden', // Ukryj wychodzące elementy
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.05)', // Powiększenie całej karty
            boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.7)',
        },
    };

    return (
        <Box sx={{ padding: '20px' }}>
            {/* Sekcje menu */}
            {Object.entries(menuSections).map(([section, items], idx) => (
                <Box key={idx} sx={sectionStyles}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: '#c7a42f',
                            marginBottom: '20px',
                            textAlign: 'center',
                        }}
                    >
                        {section}
                    </Typography>
                    <Grid container spacing={2}>
                        {items.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={cardStyles}
                                    onClick={(e) => handleCardClick(e.currentTarget, item)}
                                >
                                    {/* Kółko z nazwą */}
                                    <Box
                                        sx={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            backgroundColor: '#011a20',
                                            color: '#ffffff',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontWeight: 'bold',
                                            marginBottom: '15px',
                                            fontSize: '1.1rem',
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                                            lineHeight: '80px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.nazwa
                                            .split(' ')
                                            .map((word) => word[0])
                                            .join('')}
                                    </Box>
                                    <CardContent
                                        sx={{
                                            flex: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '10px',
                                        }}
                                    >
                                        {/* Opis w kursywie */}
                                        <Typography
                                            sx={{
                                                fontStyle: 'italic',
                                                fontSize: '0.9rem',
                                                marginBottom: '10px',
                                                textAlign: 'justify',
                                                color: '#011a20',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            {item.opis}
                                        </Typography>
                                        {/* Składniki jako lista z kółkami */}
                                        <Typography
                                            sx={{
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                marginBottom: '10px',
                                                color: '#011a20',
                                            }}
                                        >
                                            Składniki:
                                        </Typography>
                                        <Box
                                            component="ul"
                                            sx={{
                                                padding: 0,
                                                margin: 0,
                                                textAlign: 'center',
                                                listStyleType: 'circle',
                                                color: '#011a20',
                                            }}
                                        >
                                            {item.składniki.split(',').map((składnik, i) => (
                                                <Typography
                                                    component="li"
                                                    key={i}
                                                    sx={{
                                                        fontSize: '0.9rem',
                                                        marginBottom: '5px',
                                                        listStyleType: 'circle',
                                                    }}
                                                >
                                                    {składnik.trim()}
                                                </Typography>
                                            ))}
                                        </Box>
                                        {/* Cena większą czcionką */}
                                        <Typography
                                            sx={{
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                marginTop: '10px',
                                                marginBottom: '10px',
                                                color: '#011a20',
                                            }}
                                        >
                                            Cena: {item.cena} zł
                                        </Typography>
                                        {/* Dostępność z efektem */}
                                        <Typography
                                            sx={{
                                                fontSize: '1rem',
                                                color: item.dostępność ? '#2E7D32' : '#D32F2F',
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                },
                                            }}
                                        >
                                            {item.dostępność ? "Dostępne" : "Niedostępne"}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default Menu;
