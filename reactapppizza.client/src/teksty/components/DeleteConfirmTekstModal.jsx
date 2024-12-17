import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const DeleteConfirmTekstModal = ({ open, onClose, onDelete }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Czy na pewno chcesz usunąć tę sekcję tekstu?</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="primary" variant="outlined">
                    Anuluj
                </Button>
                <Button onClick={onDelete} color="error" variant="contained">
                    Usuń
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmTekstModal;
