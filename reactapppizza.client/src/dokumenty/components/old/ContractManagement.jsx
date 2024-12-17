import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function ContractManagement() {
    return (
        <div>
            <Typography variant="h6">Zarządzanie umowami</Typography>
            <List className="dokumenty-left-panel-list">
                <ListItem button>
                    <ListItemText primary="Przeglądaj umowy" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Dodaj nową umowę" />
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Edytuj umowy" />
                </ListItem>
            </List>
        </div>
    );
}

export default ContractManagement;
