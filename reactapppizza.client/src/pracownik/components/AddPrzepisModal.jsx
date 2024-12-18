import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddPrzepisModal = ({ open, onClose, onAdd }) => {
    const [newPrzepis, setNewPrzepis] = useState({
        nazwaPrzepisu: '',
        składniki: '',
        instrukcjaPrzygotowania: '',
        czasPrzygotowania: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPrzepis((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (!newPrzepis.nazwaPrzepisu || !newPrzepis.składniki || !newPrzepis.instrukcjaPrzygotowania) {
            alert("Wszystkie pola muszą być wypełnione!");
            return;
        }
        onAdd(newPrzepis);
        setNewPrzepis({ nazwaPrzepisu: '', składniki: '', instrukcjaPrzygotowania: '', czasPrzygotowania: '' });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowy Przepis</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Nazwa Przepisu" name="nazwaPrzepisu" onChange={handleChange} value={newPrzepis.nazwaPrzepisu} />
                    <TextField label="Składniki" name="składniki" onChange={handleChange} value={newPrzepis.składniki} multiline rows={3} />
                    <TextField
                        label="Instrukcja Przygotowania"
                        name="instrukcjaPrzygotowania"
                        onChange={handleChange}
                        value={newPrzepis.instrukcjaPrzygotowania}
                        multiline rows={4}
                    />
                    <TextField
                        label="Czas Przygotowania (minuty)"
                        name="czasPrzygotowania"
                        type="number"
                        onChange={handleChange}
                        value={newPrzepis.czasPrzygotowania}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleAdd}
                    variant="contained"
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddPrzepisModal;
