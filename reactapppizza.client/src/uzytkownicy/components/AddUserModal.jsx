import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddUserModal = ({ open, onClose, onAdd }) => {
    const [newUser, setNewUser] = useState({
        imię: '',
        nazwisko: '',
        login: '',
        hasłoHash: '',
        email: '',
        poziomDostępu: '',
        dataRejestracji: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAdd = () => {
        if (!newUser.imię || !newUser.nazwisko || !newUser.login || !newUser.email) {
            alert("Proszę wypełnić wymagane pola: Imię, Nazwisko, Login, Email.");
            return;
        }
        onAdd(newUser);
        setNewUser({
            imię: '',
            nazwisko: '',
            login: '',
            hasłoHash: '',
            email: '',
            poziomDostępu: '',
            dataRejestracji: '',
        });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowego Użytkownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="imię" value={newUser.imię} onChange={handleChange} required />
                    <TextField label="Nazwisko" name="nazwisko" value={newUser.nazwisko} onChange={handleChange} required />
                    <TextField label="Login" name="login" value={newUser.login} onChange={handleChange} required />
                    <TextField label="Hasło" name="hasłoHash" type="password" value={newUser.hasłoHash} onChange={handleChange} />
                    <TextField label="Email" name="email" value={newUser.email} onChange={handleChange} required />
                    <TextField label="Poziom Dostępu" name="poziomDostępu" value={newUser.poziomDostępu} onChange={handleChange} />
                    <TextField
                        label="Data Rejestracji"
                        name="dataRejestracji"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={newUser.dataRejestracji}
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
