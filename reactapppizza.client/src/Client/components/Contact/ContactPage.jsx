import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        Imię: '',
        Email: '',
        NumerTelefonu: '',
        Wiadomość: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Dodanie klasy dla stron klienta
        document.body.classList.add('client-mode');
        return () => {
            // Usunięcie klasy, gdy komponent zostanie odmontowany
            document.body.classList.remove('client-mode');
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5178/api/Kontakt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Wiadomość została wysłana!');
                setFormData({
                    Imię: '',
                    Email: '',
                    NumerTelefonu: '',
                    Wiadomość: '',
                });
            } else {
                alert('Wystąpił błąd podczas wysyłania wiadomości.');
            }
        } catch (error) {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 600,
                mx: 'auto',
                p: 3,
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                Skontaktuj się z nami
            </Typography>
            <TextField
                fullWidth
                label="Imię"
                name="Imię"
                variant="outlined"
                value={formData.Imię}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Email"
                name="Email"
                variant="outlined"
                type="email"
                value={formData.Email}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Numer Telefonu"
                name="NumerTelefonu"
                variant="outlined"
                value={formData.NumerTelefonu}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Wiadomość"
                name="Wiadomość"
                variant="outlined"
                multiline
                rows={4}
                value={formData.Wiadomość}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{
                    mt: 2,
                    width: '100%',
                    padding: '10px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
            </Button>
        </Box>
    );
};

export default Kontakt;
