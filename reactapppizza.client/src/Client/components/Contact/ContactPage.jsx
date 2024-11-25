// Kontakt.jsx
import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Kontakt = () => {
    return (
        <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Skontaktuj si� z nami</Typography>
            <TextField fullWidth label="Imi�" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Wiadomo��" variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Wy�lij</Button>
        </Box>
    );
};

export default Kontakt;
