import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5178/api/Użytkownicy/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Przeniesienie na stronę /system po zalogowaniu
                navigate('/system');
            } else if (response.status === 401) {
                setError('Niepoprawny login lub hasło.');
            } else {
                setError('Wystąpił błąd podczas logowania.');
            }
        } catch (error) {
            console.error('Błąd:', error);
            setError('Nie udało się połączyć z serwerem.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 4,
                p: 3,
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Zaloguj się
            </Typography>
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}
            <TextField
                fullWidth
                label="Login"
                name="login"
                variant="outlined"
                value={formData.login}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Hasło"
                name="password"
                type="password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{
                    mt: 2,
                    fontWeight: 'bold',
                }}
            >
                {isSubmitting ? 'Logowanie...' : 'Zaloguj'}
            </Button>
        </Box>
    );
};

export default Login;
