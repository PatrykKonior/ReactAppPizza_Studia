import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import FakturyList from './components/FakturyList';

function Dokumenty() {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '1rem',
                margin: '0 auto',
                boxSizing: 'border-box',
                marginRight: '60px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <HeadLine />
                <Box sx={{ mt: 3 }}>
                    <FakturyList />
                </Box>
            </Container>
        </Box>
    );
}

export { Dokumenty };
