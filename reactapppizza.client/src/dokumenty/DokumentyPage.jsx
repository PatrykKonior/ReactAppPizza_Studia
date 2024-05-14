import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton, Button, Typography, Divider, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Grid, ListItemIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

function Dokumenty() {
    const [searchTerm, setSearchTerm] = useState('');
    const dokumenty = [
        { id: 1, typ: 'Faktura', nazwa: 'Faktura_2023_01', data: '2023-01-15' },
        { id: 2, typ: 'Umowa', nazwa: 'Umowa_Dostawy_2023', data: '2023-02-20' },
        { id: 3, typ: 'Instrukcja', nazwa: 'Instrukcja_Obslugi_Piekarnika', data: '2023-03-05' },
    ];

    return (
        <div style={{ display: 'flex', padding: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Zarz¹dzanie umowami</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Przegl¹daj umowy" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Dodaj now¹ umowê" />
                                    <ListItemIcon>
                                        <AddIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Edytuj umowy" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Zarz¹dzanie przepisami kulinarnymi</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2">
                                Tutaj mo¿na dodawaæ, edytowaæ i udostêpniaæ przepisy kulinarnie w restauracji.
                            </Typography>
                            <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                                Dodaj przepis
                            </Button>
                            <Button variant="contained" startIcon={<EditIcon />} sx={{ mt: 2, ml: 2 }}>
                                Edytuj przepisy
                            </Button>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>Zarz¹dzanie dokumentami</Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TextField
                            label="Szukaj dokumentu"
                            variant="outlined"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <div>
                            <IconButton color="primary" aria-label="print">
                                <PrintIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="download">
                                <FileDownloadIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="export to Excel">
                                <DescriptionIcon />
                            </IconButton>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Typ</TableCell>
                                    <TableCell>Nazwa</TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Akcje</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dokumenty.filter(dok => dok.nazwa.toLowerCase().includes(searchTerm.toLowerCase())).map((dok) => (
                                    <TableRow key={dok.id}>
                                        <TableCell>{dok.id}</TableCell>
                                        <TableCell>{dok.typ}</TableCell>
                                        <TableCell>{dok.nazwa}</TableCell>
                                        <TableCell>{dok.data}</TableCell>
                                        <TableCell>
                                            <IconButton><EditIcon /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}

export { Dokumenty };
