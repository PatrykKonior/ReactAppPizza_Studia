import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';

const SkladnikiTable = ({ skladniki, searchTerm }) => (
    <TableContainer component={Paper} style={{ marginBottom: '20px', marginTop: '20px' }} className="transform-up">
        <Table sx={{ minWidth: 650, maxHeight: 400 }} aria-label="prosta tabela">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nazwa składnika</TableCell>
                    <TableCell align="right">Ilość na magazynie</TableCell>
                    <TableCell align="right">Akcje</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {skladniki.filter(item => item.nazwa.toLowerCase().includes(searchTerm.toLowerCase())).map((row, index) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        style={{ backgroundColor: row.lowStock ? '#ffcccc' : '' }}
                    >
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell>{row.nazwa}</TableCell>
                        <TableCell align="right">{row.ilosc}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            {row.lowStock && (
                                <IconButton aria-label="low stock">
                                    <WarningIcon color="error" />
                                </IconButton>
                            )}
                            {row.lowStock && <span style={{ color: 'red', marginLeft: '5px' }}>Niski stan!</span>}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default SkladnikiTable;
