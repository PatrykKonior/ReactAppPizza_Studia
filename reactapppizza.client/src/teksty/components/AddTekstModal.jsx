import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddTekstModal = ({ open, onClose, onAdd }) => {
    const [newTekst, setNewTekst] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTekst((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (newTekst.title && newTekst.content) {
            onAdd(newTekst);
            setNewTekst({ title: '', content: '' });
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nową Sekcję Tekstu</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Tytuł Sekcji"
                        name="title"
                        value={newTekst.title}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Treść Sekcji"
                        name="content"
                        value={newTekst.content}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error" variant="outlined">
                    Anuluj
                </Button>
                <Button onClick={handleAdd} variant="contained" color="primary">
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddTekstModal;
