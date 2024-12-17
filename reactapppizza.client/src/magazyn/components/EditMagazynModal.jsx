import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditMagazynModal = ({ open, onClose, magazyn, onUpdate }) => {
    const [formData, setFormData] = useState({
        TowarID: '',
        Nazwa: '',
        Opis: '',
        Ilosc: '',
        Lokalizacja: '',
    });

    useEffect(() => {
        if (magazyn) {
            setFormData(magazyn);
        }
    }, [magazyn]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!magazyn) return null; // Nie renderuj nic, jeśli brak danych magazynu

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Magazyn</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Towar ID"
                        name="TowarID"
                        value={formData.TowarID}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Nazwa"
                        name="Nazwa"
                        value={formData.Nazwa}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Opis"
                        name="Opis"
                        value={formData.Opis}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Ilość"
                        name="Ilosc"
                        type="number"
                        value={formData.Ilosc}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Lokalizacja"
                        name="Lokalizacja"
                        value={formData.Lokalizacja}
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
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditMagazynModal;
