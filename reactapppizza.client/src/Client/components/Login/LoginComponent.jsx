// Login.jsx
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Zaloguj siê</Typography>
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Has³o" type="password" variant="outlined" sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" fullWidth>Zaloguj</Button>
        </Box>
    );
};

export default Login;