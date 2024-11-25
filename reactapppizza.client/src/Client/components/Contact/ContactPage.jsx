// Kontakt.jsx
import React, { useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Kontakt = () => {
    useEffect(() => {
        // Dodanie klasy dla stron klienta
        document.body.classList.add('client-mode');
        return () => {
            // Usuniêcie klasy, gdy komponent zostanie odmontowany
            document.body.classList.remove('client-mode');
        };
    }, []);

    return (
        <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Skontaktuj siê z nami</Typography>
            <TextField fullWidth label="Imiê" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Wiadomoœæ" variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Wyœlij</Button>
        </Box>
    );
};

export default Kontakt;
