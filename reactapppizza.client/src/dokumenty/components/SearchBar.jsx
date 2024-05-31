import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="dokumenty-search-container">
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
                className="dokumenty-search-field"
            />
        </div>
    );
}

export default SearchBar;
