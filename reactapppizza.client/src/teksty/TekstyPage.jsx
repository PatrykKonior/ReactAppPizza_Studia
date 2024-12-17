import React from 'react';
import { Box, Container } from '@mui/material';
import HeadLine from './components/HeadLine';
import TekstyList from './components/TekstyList';

const Teksty = () => {
    return(
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                padding: '20px 0',
            }}
        >
            <Container maxWidth="lg">
                <HeadLine/>
                <TekstyList />
            </Container>
        </Box>
    );
};

export { Teksty };
