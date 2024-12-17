import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddUserModal = ({ open, onClose, onAdd }) => {
    const [newUser, setNewUser] = useState({
        Imię: '',
        Nazwisko: '',
        Login: '',
        HasłoHash: '',
        Email: '',
        PoziomDostępu: '',
        DataRejestracji: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAdd = () => {
        onAdd(newUser);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowego Użytkownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="Imię" onChange={handleChange} />
                    <TextField label="Nazwisko" name="Nazwisko" onChange={handleChange} />
                    <TextField label="Stanowisko" name="Login" onChange={handleChange} />
                    <TextField label="Telefon" name="HasłoHash" onChange={handleChange} />
                    <TextField label="Email" name="Email" onChange={handleChange} />
                    <TextField label="Poziom Dostępu" name="PoziomDostępu" onChange={handleChange} />
                    <TextField
                        label="Data Rejestracji"
                        name="DataRejestracji"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleAdd}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                    variant="contained"
                >
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddUserModal;
