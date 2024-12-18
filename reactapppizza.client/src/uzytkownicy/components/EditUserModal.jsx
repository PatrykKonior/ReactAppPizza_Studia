import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditUserModal = ({ open, onClose, user, onUpdate }) => {
    const [formData, setFormData] = useState({
        użytkownikID: '',
        imię: '',
        nazwisko: '',
        login: '',
        hasłoHash: '',
        email: '',
        poziomDostępu: '',
        dataRejestracji: '',
    });

    useEffect(() => {
        if (user) {
            setFormData({
                użytkownikID: user.użytkownikID,
                imię: user.imię,
                nazwisko: user.nazwisko,
                login: user.login,
                hasłoHash: user.hasłoHash,
                email: user.email,
                poziomDostępu: user.poziomDostępu,
                dataRejestracji: user.dataRejestracji ? user.dataRejestracji.split('T')[0] : '',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        if (!formData.imię || !formData.nazwisko || !formData.login || !formData.email) {
            alert("Proszę wypełnić wymagane pola: Imię, Nazwisko, Login, Email.");
            return;
        }
        onUpdate(formData);
    };

    if (!user) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Użytkownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="imię" value={formData.imię} onChange={handleChange} required />
                    <TextField label="Nazwisko" name="nazwisko" value={formData.nazwisko} onChange={handleChange} required />
                    <TextField label="Login" name="login" value={formData.login} onChange={handleChange} required />
                    <TextField label="Hasło" name="hasłoHash" type="password" value={formData.hasłoHash} onChange={handleChange} />
                    <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
                    <TextField label="Poziom Dostępu" name="poziomDostępu" value={formData.poziomDostępu} onChange={handleChange} />
                    <TextField
                        label="Data Rejestracji"
                        name="dataRejestracji"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.dataRejestracji}
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

export default EditUserModal;
