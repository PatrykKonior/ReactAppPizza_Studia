import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import DocumentTable from './components/DocumentTable';
import DocumentActions from './components/DocumentActions';
import ContractManagement from './components/ContractManagement';
import RecipeManagement from './components/RecipeManagement';
import '../App.css';

function Dokumenty() {
    const [searchTerm, setSearchTerm] = useState('');
    const dokumenty = [
        { id: 1, typ: 'Faktura', nazwa: 'Faktura_2023_01', data: '2023-01-15' },
        { id: 2, typ: 'Umowa', nazwa: 'Umowa_Dostawy_2023', data: '2023-02-20' },
        { id: 3, typ: 'Instrukcja', nazwa: 'Instrukcja_Obslugi_Piekarnika', data: '2023-03-05' },
    ];

    return (
        <div className="dokumenty-container" style={{ paddingBottom: '80px' }}>
            <Typography variant="h4" className="dokumenty-header">Zarządzanie dokumentami</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <DocumentActions />
                    <DocumentTable dokumenty={dokumenty} searchTerm={searchTerm} />
                </Grid>
                <Grid item xs={12} md={4} className="dokumenty-left-panel">
                    <ContractManagement />
                </Grid>
                <Grid item xs={12} md={8} className="dokumenty-right-panel">
                    <RecipeManagement />
                </Grid>
            </Grid>
        </div>
    );
}

export { Dokumenty };
