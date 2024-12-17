import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditDostawcyModal = ({ open, onClose, dostawca, onUpdate }) => {
    const [formData, setFormData] = useState({
        nazwa: '',
        kontaktEmail: '',
        kontaktTelefon: '',
        adres: '',
        miasto: '',
        kodPocztowy: '',
        kraj: '',
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
                    <TextField label="Nazwa" name="nazwa" value={formData.nazwa} onChange={handleChange} />
                    <TextField label="Kontakt Email" name="kontaktEmail" value={formData.kontaktEmail} onChange={handleChange} />
                    <TextField label="Kontakt Telefon" name="kontaktTelefon" value={formData.kontaktTelefon} onChange={handleChange} />
                    <TextField label="Adres" name="adres" value={formData.adres} onChange={handleChange} />
                    <TextField label="Miasto" name="miasto" value={formData.miasto} onChange={handleChange} />
                    <TextField label="Kod Pocztowy" name="kodPocztowy" value={formData.kodPocztowy} onChange={handleChange} />
                    <TextField label="Kraj" name="kraj" value={formData.kraj} onChange={handleChange} />
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
