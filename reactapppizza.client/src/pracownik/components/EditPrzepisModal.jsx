import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditPrzepisModal = ({ open, onClose, przepis, onUpdate }) => {
    const [formData, setFormData] = useState({
        nazwaPrzepisu: '',
        składniki: '',
        instrukcjaPrzygotowania: '',
        czasPrzygotowania: '',
    });

    useEffect(() => {
        if (przepis) {
            setFormData(przepis);
        }
    }, [przepis]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!przepis) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Przepis</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Nazwa Przepisu"
                        name="nazwaPrzepisu"
                        onChange={handleChange}
                        value={formData.nazwaPrzepisu}
                    />
                    <TextField
                        label="Składniki"
                        name="składniki"
                        onChange={handleChange}
                        value={formData.składniki}
                        multiline rows={3}
                    />
                    <TextField
                        label="Instrukcja Przygotowania"
                        name="instrukcjaPrzygotowania"
                        onChange={handleChange}
                        value={formData.instrukcjaPrzygotowania}
                        multiline rows={4}
                    />
                    <TextField
                        label="Czas Przygotowania (minuty)"
                        name="czasPrzygotowania"
                        type="number"
                        onChange={handleChange}
                        value={formData.czasPrzygotowania}
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
