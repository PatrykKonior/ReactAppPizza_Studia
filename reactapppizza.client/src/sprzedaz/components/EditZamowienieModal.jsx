import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, MenuItem } from '@mui/material';

const EditZamowienieModal = ({ open, onClose, zamowienie, onUpdate, uzytkownicy = [] }) => {
    const [formData, setFormData] = useState({
        użytkownikID: '',
        dataZamówienia: '',
        status: '',
        kwotaCałkowita: '',
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
        if (!formData.użytkownikID || !formData.dataZamówienia || !formData.status) {
            alert('Wszystkie pola muszą być wypełnione!');
            return;
        }
        onUpdate(formData);
        onClose();
    };

    if (!zamowienie) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Zamówienie</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Użytkownik"
                        name="użytkownikID"
                        select
                        value={formData.użytkownikID}
                        onChange={handleChange}
                    >
                        {uzytkownicy.length > 0 ? (
                            uzytkownicy.map((user) => (
                                <MenuItem key={user.użytkownikID} value={user.użytkownikID}>
                                    {`${user.imię} ${user.nazwisko}`}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>Brak użytkowników</MenuItem>
                        )}
                    </TextField>
                    <TextField
                        label="Data Zamówienia"
                        name="dataZamówienia"
                        type="date"
                        value={formData.dataZamówienia}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Całkowita"
                        name="kwotaCałkowita"
                        type="number"
                        value={formData.kwotaCałkowita}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">
                    Anuluj
                </Button>
                <Button
                    onClick={handleUpdate}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
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
