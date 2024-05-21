import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SalesTable = ({ sales = [] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produkt</TableCell>
                        <TableCell>Iloœæ</TableCell>
                        <TableCell>Cena</TableCell>
                        <TableCell>£¹czna kwota</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sales.map((sale, index) => (
                        <TableRow key={index}>
                            <TableCell>{sale.product}</TableCell>
                            <TableCell>{sale.quantity}</TableCell>
                            <TableCell>{sale.price}</TableCell>
                            <TableCell>{sale.quantity * sale.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SalesTable;
