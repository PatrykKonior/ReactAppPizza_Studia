import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { green, red, blue } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

function DocumentTable({ dokumenty, searchTerm }) {
    return (
        <TableContainer component={Paper} className="dokumenty-table-container">
            <Table>
                <TableHead className="dokumenty-table-header">
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Typ</TableCell>
                        <TableCell>Nazwa</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Akcje</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dokumenty.filter(dok => dok.nazwa.toLowerCase().includes(searchTerm.toLowerCase())).map((dok, index) => (
                        <TableRow key={dok.id} className={index % 2 === 0 ? 'dokumenty-table-row-even' : 'dokumenty-table-row-odd'}>
                            <TableCell>{dok.id}</TableCell>
                            <TableCell>{dok.typ}</TableCell>
                            <TableCell>{dok.nazwa}</TableCell>
                            <TableCell>{dok.data}</TableCell>
                            <TableCell>
                                <IconButton style={{ color: green[500] }}><AddIcon /></IconButton>
                                <IconButton style={{ color: red[500] }}><LockIcon /></IconButton>
                                <IconButton style={{ color: blue[500] }}><SearchIcon /></IconButton>
                                <IconButton><EditIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DocumentTable;
