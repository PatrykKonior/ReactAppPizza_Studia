import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditPrzepisModal = ({ open, onClose, przepis, onUpdate }) => {
    const [formData, setFormData] = useState({
        NazwaPrzepisu: '',
        Składniki: '',
        InstrukcjaPrzygotowania: '',
        CzasPrzygotowania: '',
    });

    // Załadowanie danych istniejącego przepisu do formularza
    useEffect(() => {
        if (przepis) {
            setFormData(przepis);
        }
    }, [przepis]);

    // Obsługa zmian w formularzu
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Obsługa aktualizacji przepisu
    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!przepis) return null; // Jeśli nie ma przepisu, nie renderuj modala

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Przepis</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Nazwa Przepisu"
                        name="NazwaPrzepisu"
                        value={formData.NazwaPrzepisu}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Składniki"
                        name="Składniki"
                        value={formData.Składniki}
                        onChange={handleChange}
                        multiline
                        rows={3}
                    />
                    <TextField
                        label="Instrukcja Przygotowania"
                        name="InstrukcjaPrzygotowania"
                        value={formData.InstrukcjaPrzygotowania}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                    <TextField
                        label="Czas Przygotowania (min)"
                        name="CzasPrzygotowania"
                        type="number"
                        value={formData.CzasPrzygotowania}
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

export default EditPrzepisModal;
