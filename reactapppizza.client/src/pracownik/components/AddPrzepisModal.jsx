import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddPrzepisModal = ({ open, onClose, onAdd }) => {
    const [newPrzepis, setNewPrzepis] = useState({
        NazwaPrzepisu: '',
        Składniki: '',
        InstrukcjaPrzygotowania: '',
        CzasPrzygotowania: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPrzepis((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        onAdd(newPrzepis);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowy Przepis</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Nazwa Przepisu" name="NazwaPrzepisu" onChange={handleChange} />
                    <TextField label="Składniki" name="Składniki" onChange={handleChange} multiline rows={3} />
                    <TextField label="Instrukcja Przygotowania" name="InstrukcjaPrzygotowania" onChange={handleChange} multiline rows={4} />
                    <TextField label="Czas Przygotowania (min)" name="CzasPrzygotowania" type="number" onChange={handleChange} />
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
