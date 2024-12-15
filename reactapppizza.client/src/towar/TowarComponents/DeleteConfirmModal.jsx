import React from 'react';
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material';

const DeleteConfirmModal = ({ open, onClose, onDelete }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm">
            <DialogTitle>Czy na pewno chcesz usun�� ten produkt?</DialogTitle>
            <DialogActions>
                <Button onClick={onClose} color="primary">Anuluj</Button>
                <Button onClick={onDelete} color="error" variant="contained">Usu�</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmModal;
