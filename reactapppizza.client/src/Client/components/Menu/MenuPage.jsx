// Menu.jsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const Menu = () => {
    const pizzas = Array.from({ length: 8 }, (_, i) => `Pizza ${i + 1}`);

    return (
        <Grid container spacing={4}>
            {pizzas.map((pizza, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://via.placeholder.com/300?text=${pizza}`}
                            alt={pizza}
                        />
                        <CardContent>
                            <Typography variant="h6">{pizza}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Menu;
