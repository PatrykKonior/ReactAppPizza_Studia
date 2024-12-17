import React from 'react';
import { Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function RecipeManagement() {
    return (
        <div className="dokumenty-przepisy-container">
            <Typography variant="h6">Zarządzanie przepisami kulinarnymi</Typography>
            <Typography variant="body2">
                Tutaj można dodawać, edytować i udostępniać przepisy kulinarnie w restauracji.
            </Typography>
            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                Dodaj przepis
            </Button>
            <Button variant="contained" startIcon={<EditIcon />} sx={{ mt: 2, ml: 2 }}>
                Edytuj przepisy
            </Button>
        </div>
    );
}

export default RecipeManagement;
