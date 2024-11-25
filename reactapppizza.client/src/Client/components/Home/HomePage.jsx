// Home.jsx
import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { gsap } from 'gsap';

const Home = () => {
    useEffect(() => {
        gsap.fromTo(
            '.home-title',
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    return (
        <Box>
            <Typography variant="h3" className="home-title" sx={{ textAlign: 'center', mb: 4 }}>
                Witamy w Pizza 365
            </Typography>
            <Typography sx={{ textAlign: 'center' }}>
                Odkryj nasze wyj¹tkowe pizze i zamów ju¿ teraz!
            </Typography>
        </Box>
    );
};

export default Home;