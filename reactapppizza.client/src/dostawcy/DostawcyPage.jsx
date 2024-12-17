import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import DostawcyList from './components/DostawcyList';

const Dostawcy = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '1rem',
                margin: '0 auto',
                boxSizing: 'border-box',
                marginRight: '210px',
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <HeadLine />
                <Box sx={{ mt: 3 }}>
                    <DostawcyList />
                </Box>
            </Container>
        </Box>
    );
};

export { Dostawcy };
