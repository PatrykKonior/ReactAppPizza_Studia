import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditDostawcyModal = ({ open, onClose, dostawca, onUpdate }) => {
    const [formData, setFormData] = useState({
        Nazwa: '',
        KontaktEmail: '',
        KontaktTelefon: '',
        Adres: '',
        Miasto: '',
        KodPocztowy: '',
        Kraj: '',
    });

    useEffect(() => {
        if (dostawca) {
            setFormData(dostawca);
        }
    }, [dostawca]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!dostawca) return null; // Jeśli brak danych, nie renderuj

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Dostawcę</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Nazwa"
                        name="Nazwa"
                        value={formData.Nazwa}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kontakt Email"
                        name="KontaktEmail"
                        value={formData.KontaktEmail}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kontakt Telefon"
                        name="KontaktTelefon"
                        value={formData.KontaktTelefon}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Adres"
                        name="Adres"
                        value={formData.Adres}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Miasto"
                        name="Miasto"
                        value={formData.Miasto}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kod Pocztowy"
                        name="KodPocztowy"
                        value={formData.KodPocztowy}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kraj"
                        name="Kraj"
                        value={formData.Kraj}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleUpdate}
                    variant="contained"
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDostawcyModal;
