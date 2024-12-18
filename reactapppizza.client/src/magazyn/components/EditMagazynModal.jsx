import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditMagazynModal = ({ open, onClose, magazyn, onUpdate }) => {
    const [formData, setFormData] = useState({
        magazynID: '',
        towarID: '',
        ilość: '',
        lokalizacja: '',
    });

    useEffect(() => {
        if (magazyn) {
            setFormData({
                ...magazyn,
                towary: null, // Dodaj pole towary jako null, aby spełniało wymagania backendu
            });
        }
    }, [magazyn]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        const payload = {
            ...formData,
            ilość: parseInt(formData.ilość, 10),
            towary: null, // Towary musi być null
        };

        onUpdate(payload);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Produkt w Magazynie</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Towar ID"
                        name="towarID"
                        value={formData.towarID}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Ilość"
                        name="ilość"
                        type="number"
                        value={formData.ilość}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Lokalizacja"
                        name="lokalizacja"
                        value={formData.lokalizacja}
                        onChange={handleChange}
                        required
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button onClick={handleUpdate} variant="contained">Zapisz</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditMagazynModal;
