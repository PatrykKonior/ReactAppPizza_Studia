import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from '@mui/material';

const EditZamowienieModal = ({ open, onClose, zamowienie, onUpdate }) => {
    const [formData, setFormData] = useState({
        UzytkownikID: '',
        DataZamowienia: '',
        Status: '',
        KwotaCałkowita: '',
    });

    useEffect(() => {
        if (zamowienie) {
            setFormData(zamowienie);
        }
    }, [zamowienie]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!zamowienie) return null; // Jeśli zamówienie jest null, nic nie renderuj

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Zamówienie</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="ID Użytkownika"
                        name="UzytkownikID"
                        value={formData.UzytkownikID}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Data Zamówienia"
                        name="DataZamowienia"
                        type="date"
                        value={formData.DataZamowienia}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Status"
                        name="Status"
                        value={formData.Status}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Całkowita"
                        name="KwotaCałkowita"
                        value={formData.KwotaCałkowita}
                        onChange={handleChange}
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

export default EditZamowienieModal;
