import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div id="header-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
            label="Szukaj składnika"
            variant="outlined"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            id="search-bar"
            style={{ width: '400px', height: '40px' }}
        />
    </div>
);

export default SearchBar;
