import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import PrzepisList from './components/PrzepisList';


const Deklaracje = () => {
    return (
        <Box
            sx={{
                width: '98%',
                padding: '1rem',
                margin: '0 auto',
                boxSizing: 'border-box',
                marginRight: '-20px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <HeadLine />
                <Box sx={{ mt: 3 }}>
                    <PrzepisList />
                </Box>
            </Container>
        </Box>
    );
};

export { Deklaracje };
