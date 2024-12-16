import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogTitle,
    TextField, Button, Box
} from '@mui/material';

const EditItemModal = ({ open, onClose, item, onUpdate }) => {
    const [formData, setFormData] = useState({
        nazwa: '',
        opis: '',
        cenaZakupu: '',
        cenaSprzedaży: '',
        dataDodania: '',
    });

    useEffect(() => {
        if (item) {
            console.log('Ustawianie edytowanego elementu:', item); // Logowanie danych wejściowych
            setFormData(item); // Ustaw stan tylko, gdy `item` nie jest null
        }
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        console.log('Aktualizowanie towaru:', formData); // Logowanie danych przed wysłaniem
        onUpdate(formData);
        onClose();
    };

    if (!item) return null; // Jeśli `item` jest null, nie renderuj niczego

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Towar</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Nazwa" name="nazwa" value={formData.nazwa} onChange={handleChange} />
                    <TextField label="Opis" name="opis" value={formData.opis} onChange={handleChange} />
                    <TextField label="Cena Zakupu" name="cenaZakupu" value={formData.cenaZakupu} onChange={handleChange} />
                    <TextField label="Cena Sprzedaży" name="cenaSprzedaży" value={formData.cenaSprzedaży} onChange={handleChange} />
                    <TextField
                        label="Data Dodania"
                        name="dataDodania"
                        type="date"
                        value={formData.dataDodania}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleUpdate}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                    variant="contained"
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};


export default EditItemModal;
