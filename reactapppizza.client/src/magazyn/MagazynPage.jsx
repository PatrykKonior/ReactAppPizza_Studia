import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import SearchBar from './components/SearchBar';
import SkladnikiTable from './components/SkladnikiTable';
import Orders from './components/Orders';
import Chart from './components/Chart';
import Actions from './components/Actions';
import '../App.css';

const Magazyn = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const skladniki = [
        { id: 1, nazwa: 'Mąka', ilosc: '50 kg', lowStock: false },
        { id: 2, nazwa: 'Ser Grana Padano', ilosc: '30 kg', lowStock: false },
        { id: 3, nazwa: 'Passata', ilosc: '20 kg', lowStock: true },
        { id: 4, nazwa: 'Pieczarki', ilosc: '10 kg', lowStock: false },
        { id: 5, nazwa: 'Szynka Parmeńska', ilosc: '15 kg', lowStock: true },
        { id: 6, nazwa: 'Oliwa', ilosc: '50 l', lowStock: false }
    ];

    const dataBar = [
        { name: 'Mąka', value: 50 },
        { name: 'Ser', value: 30 },
        { name: 'Pomidory', value: 20 },
        { name: 'Pieczarki', value: 10 },
        { name: 'Szynka', value: 15 }
    ];

    const COLORS = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

    return (
        <div id="content-container">
            <div id="left-container">
                <Typography id="title">Aktualny stan magazynu</Typography>
                <Chart dataBar={dataBar} COLORS={COLORS} />
                <Orders />
            </div>
            <div id="right-container">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Actions />
                <SkladnikiTable skladniki={skladniki} searchTerm={searchTerm} />
                <div style={{ textAlign: 'right' }} className="transform-up">
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#333',
                            color: '#fff',
                            textTransform: 'none',
                            height: '40px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            marginTop: '20px',
                            marginRight: '40px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#555'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}
                    >
                        Przejdź do składania zamówienia
                    </Button>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#333',
                            color: '#fff',
                            textTransform: 'none',
                            height: '40px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            marginTop: '20px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#555'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}
                    >
                        Przejdź do śledzenia zamówień
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { Magazyn };
