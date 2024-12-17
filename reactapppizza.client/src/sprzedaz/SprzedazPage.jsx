import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import ZamowieniaList from './components/ZamowieniaList';

const Sprzedaz = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '1rem',
                margin: '0 auto',
                boxSizing: 'border-box',
                marginRight: '350px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <HeadLine />
                <Box sx={{ mt: 3 }}>
                    <ZamowieniaList />
                </Box>
            </Container>
        </Box>
    );
};

export { Sprzedaz };
