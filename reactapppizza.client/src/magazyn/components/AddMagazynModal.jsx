import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, MenuItem } from '@mui/material';

const AddMagazynModal = ({ open, onClose, onAdd }) => {
    const [newMagazyn, setNewMagazyn] = useState({
        towarID: '', // TowarID jako klucz obcy
        ilość: '', // Ilość produktu w magazynie
        lokalizacja: '', // Lokalizacja magazynu
    });
    const [availableTowary, setAvailableTowary] = useState([]);

    // Pobierz dostępne towary z API
    const fetchTowary = async () => {
        try {
            const response = await fetch('http://localhost:5178/api/Towary'); // Endpoint dla towarów
            const data = await response.json();
            setAvailableTowary(data);
        } catch (error) {
            console.error('Błąd podczas pobierania towarów:', error);
        }
    };

    useEffect(() => {
        if (open) {
            fetchTowary(); // Pobierz towary tylko po otwarciu modala
        }
    }, [open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMagazyn((prev) => ({ ...prev, [name]: value })); // Aktualizuj stan nowego magazynu
    };

    const handleAdd = () => {
        // Dane do wysłania
        const payload = {
            towarID: parseInt(newMagazyn.towarID, 10), // TowarID jako liczba
            ilość: parseInt(newMagazyn.ilość, 10), // Ilość jako liczba
            lokalizacja: newMagazyn.lokalizacja.trim(), // Lokalizacja bez białych znaków
            towary: null, // Wymagane pole Towary jako null
        };

        console.log('Dodajemy nowy magazyn:', payload);

        if (!payload.towarID || !payload.ilość || !payload.lokalizacja) {
            alert('Wszystkie pola muszą być wypełnione!');
            return;
        }

        // Wywołanie funkcji onAdd
        onAdd(payload);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowy Produkt do Magazynu</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        select
                        label="Towar"
                        name="towarID"
                        value={newMagazyn.towarID}
                        onChange={handleChange}
                        helperText="Wybierz towar"
                        required
                    >
                        {availableTowary.map((towar) => (
                            <MenuItem key={towar.towarID} value={towar.towarID}>
                                {towar.nazwa} - {towar.opis}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Ilość"
                        name="ilość"
                        type="number"
                        value={newMagazyn.ilość}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Lokalizacja"
                        name="lokalizacja"
                        value={newMagazyn.lokalizacja}
                        onChange={handleChange}
                        required
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

export default AddMagazynModal;
