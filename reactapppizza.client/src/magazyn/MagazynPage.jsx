import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import MagazynList from './components/MagazynList';

const Magazyn = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '1rem',
                margin: '0 auto',
                boxSizing: 'border-box',
                marginRight: '280px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <HeadLine />
                <Box sx={{ mt: 3 }}>
                    <MagazynList />
                </Box>
            </Container>
        </Box>
    );
}

export { Magazyn };
