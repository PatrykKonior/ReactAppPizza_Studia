import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const Menu = () => {
    const menuSections = {
        "Pizze": [
            { name: "Margherita", ingredients: "Pomidor, Mozzarella, Bazylia" },
            { name: "Pepperoni", ingredients: "Pomidor, Mozzarella, Pepperoni" },
            { name: "Wegetariańska", ingredients: "Pomidor, Mozzarella, Warzywa" },
            { name: "Hawajska", ingredients: "Pomidor, Mozzarella, Szynka, Ananas" },
            { name: "Cztery Sery", ingredients: "Cztery rodzaje sera" },
            { name: "Capricciosa", ingredients: "Pomidor, Mozzarella, Pieczarki, Szynka" },
        ],
        "Makarony": [
            { name: "Carbonara", ingredients: "Makaron, Jajka, Pancetta, Ser" },
            { name: "Bolognese", ingredients: "Makaron, Sos pomidorowy, Mięso mielone" },
            { name: "Pesto", ingredients: "Makaron, Sos pesto, Parmezan" },
        ],
        "Desery": [
            { name: "Tiramisu", ingredients: "Biszkopty, Kawa, Mascarpone" },
            { name: "Panna Cotta", ingredients: "Śmietana, Wanilia, Owoce" },
            { name: "Lody", ingredients: "Różne smaki lodów" },
        ],
        "Napoje": [
            { name: "Coca Cola", ingredients: "Napój gazowany" },
            { name: "Woda Mineralna", ingredients: "Niegazowana" },
            { name: "Sok Pomarańczowy", ingredients: "Naturalny sok z pomarańczy" },
        ],
    };

    const sectionStyles = {
        marginTop: '20px', // Mniejszy odstęp od poprzedniego elementu
        padding: '20px 0',
        backgroundColor: '#011a20', // Tło sekcji
        color: '#d3d3d3', // Tekst
        borderRadius: '10px',
    };

    return (
        <Box sx={{ padding: '20px' }}>
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
                                    sx={{
                                        padding: '15px',
                                        backgroundColor: '#BFB78F',
                                        color: '#011a20',
                                        borderRadius: '10px',
                                        boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        height: '280px', // Wyższy prostokąt
                                        maxWidth: '300px', // Ograniczenie szerokości karts
                                        margin: '0 auto', // Wyśrodkowanie
                                    }}
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
                                        }}
                                    >
                                        {item.name
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
                                            padding: '0',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                marginBottom: '10px',
                                                color: '#011a20',
                                                Text: 'bold',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                textAlign: 'justify',
                                                color: '#011a20',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            {item.ingredients}
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
